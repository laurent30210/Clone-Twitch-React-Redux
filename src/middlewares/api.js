import axios from 'axios';

import {
  GET_STREAM_FROM_API,
  getStreamFromAPISuccess,
  getDataFromAPIError,
  getCategoryFromAPISuccess,
} from 'src/store/actions';

// Client_ID = 3672qpowsak0jc3gz1w7g3ltttf7o8
// redirect = 'http://127.0.0.1/'
// URL https://id.twitch.tv/oauth2/authorize?client_id=3672qpowsak0jc3gz1w7g3ltttf7o8&redirect_uri=https://127.0.0.1/&response_type=token
// TOKEN 4114x35j0lpi82l88oxmj4n0tw4cok

const apiTwitch = axios.create({
  headers: {
    'Client-ID': '3672qpowsak0jc3gz1w7g3ltttf7o8',
    Authorization: 'Bearer 4114x35j0lpi82l88oxmj4n0tw4cok',
  },
});

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STREAM_FROM_API:
      // first 
      apiTwitch.get('https://api.twitch.tv/helix/streams')
        .then((response) => {
          // console.log(response.data);
          const { data } = response.data;
          // here we receive each img's objects without an size witdh, height
          const newDatas = data.map((item) => {
            // replace {width and height} width an valid size
            const newThumbnailUrl = item.thumbnail_url
              .replace('{width}', '337')
              .replace('{height}', '190');
            item.thumbnail_url = newThumbnailUrl;
            return item;
          });
          store.dispatch(getStreamFromAPISuccess(newDatas));
        })
        .catch((error) => {
          // console.log('error ', error);
          if (error.response.status) {
            const { status, statusText } = error.response;
            store.dispatch(getDataFromAPIError(`erreur ${status}, message ${statusText}`));
          }
        });
        apiTwitch.get('https://api.twitch.tv/helix/games/top')
        .then((response) => {
          console.log(response.data);
          const { data } = response.data;
          // here we receive each img's objects without an size witdh, height
          const newDatas = data.map((item) => {
            // replace {width and height} width an valid size
            const newBoxArtUrl = item.box_art_url
              .replace('{width}', '153')
              .replace('{height}', '204');
            item.box_art_url = newBoxArtUrl;
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
        });
      break;
    default:
      next(action);
  }
};

export default api;
