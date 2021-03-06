/* eslint-disable no-return-assign */
import axios from 'axios';

import {
  GET_STREAM_FROM_API,
  getStreamFromAPISuccess,
  getDataFromAPIError,
  GET_CATEGORY_FROM_API,
  getCategoryFromAPISuccess,
  getChannelFromAPI,
  GET_CHANNEL_FROM_API,
  getChannelFromAPISuccess,
  loaderOn,
  loaderOff,
  sendViewersByChannel,
} from 'src/store/actions';

const apiTwitch = axios.create({
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '3672qpowsak0jc3gz1w7g3ltttf7o8',
    Authorization: 'Bearer 4114x35j0lpi82l88oxmj4n0tw4cok',
  },
});

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STREAM_FROM_API:
      // first
      store.dispatch(loaderOn('loaderTop'));
      apiTwitch.get('https://api.twitch.tv/helix/streams')
        .then((response) => {
        // console.log(response.data);
          const { data } = response.data;
          // here we receive each img's objects without an size witdh, height
          const dataWithNewSize = data.map((item) => {
            // replace {width and height} width an valid size
            const newSizeWidth = 320;
            const newSizeHeight = 190;
            const newThumbnailUrl = item.thumbnail_url
              .replace('{width}', newSizeWidth)
              .replace('{height}', newSizeHeight);
            item.thumbnail_url = newThumbnailUrl;
            return item;
          });
          // now it's necessary to retrieve the id for each user
          // prepare query params for the next request
          let queryParamsUsers = '';
          dataWithNewSize.map((stream) => (queryParamsUsers += `id=${stream.user_id}&`));
          // console.log( userIds);
          // now, we have to do is send the request
          const urlUsers = `https://api.twitch.tv/helix/users?${queryParamsUsers}`;
          // console.log(urlUsers);

          const usersName = [];
          let finalArray = [];
          apiTwitch.get(urlUsers)
            .then((responseUsers) => {
              usersName.push(responseUsers.data.data);

              finalArray = dataWithNewSize.map((item) => {
                item.picUser = '';
                item.login = '';
                usersName[0].forEach((user) => {
                  if (item.user_id === user.id) {
                    item.picUser = user.profile_image_url;
                    item.login = user.login;
                  }
                });
                return item;
              });
              store.dispatch(getStreamFromAPISuccess(finalArray));
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          if (error.response.status) {
            const { status, statusText } = error.response;
            store.dispatch(getDataFromAPIError(`erreur ${status}, message ${statusText}`));
          }
        })
        .finally(() => {
          store.dispatch(loaderOff('loaderTop'));
        });
      break;
    case GET_CATEGORY_FROM_API:
      store.dispatch(loaderOn('loaderCat'));

      apiTwitch.get('https://api.twitch.tv/helix/games/top')
        .then((response) => {
          const { data } = response.data;
          // here we receive each img's objects without an size witdh, height
          const newDatas = data.map((item) => {
            // replace {width and height} width an valid size
            const newSizeWidth = 153;
            const newSizeHeight = 204;
            const newBoxArtUrl = item.box_art_url
              .replace('{width}', newSizeWidth)
              .replace('{height}', newSizeHeight);
            item.box_art_url = newBoxArtUrl;

            store.dispatch(getChannelFromAPI(item.name));
            return item;
          });
          store.dispatch(getCategoryFromAPISuccess(newDatas));
        })
        .catch((error) => {
          // console.log('error ', error);
          if (error.response.status) {
            const { status, statusText } = error.response;
            store.dispatch(getDataFromAPIError(`erreur ${status}, message ${statusText}`));
          }
        })
        .finally(() => {
          store.dispatch(loaderOff('loaderCat'));
        });
      break;
    case GET_CHANNEL_FROM_API: {
      const urlChannel = `https://api.twitch.tv/kraken/streams?game=${action.channelID}`;
      apiTwitch.get(urlChannel)
        .then((response) => {
          // console.log(action.channelID, response);
          const { streams } = response.data;
          const viewers = streams.reduce((acc, value) => acc + value.viewers, 0);
          store.dispatch(getChannelFromAPISuccess(action.channelID, streams));
          store.dispatch(sendViewersByChannel(action.channelID, streams, viewers));
        })
        .catch((error) => {
          if (error.response.status) {
            console.log(error);
            const { status, statusText } = error.response;
            store.dispatch(getDataFromAPIError(`erreur ${status}, message ${statusText}`));
          }
        });
    }
      break;
    default:
      next(action);
  }
};

export default api;
