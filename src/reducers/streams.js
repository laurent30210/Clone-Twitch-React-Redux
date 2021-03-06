import {
  GET_STREAM_FROM_API_SUCCESS,
  GET_DATA_FROM_API_ERROR,
  GET_CATEGORY_FROM_API_SUCCESS,
  GET_CHANNEL_FROM_API_SUCCESS,
  SEND_VIEWERS_BY_CHANNEL,
} from 'src/store/actions';

const initialState = {
  liveStreamsList: [],
  catStreamsList: [],
  channelStream: [],
  viewersByChannel: [],
  errorText: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case GET_STREAM_FROM_API_SUCCESS:
      return {
        ...oldState,
        liveStreamsList: action.streamsList,
      };
    case GET_CATEGORY_FROM_API_SUCCESS:
      return {
        ...oldState,
        catStreamsList: action.categoryList,
      };
    case GET_DATA_FROM_API_ERROR:
      return {
        ...oldState,
        errorText: action.errorText,
      };
    case GET_CHANNEL_FROM_API_SUCCESS:
      return {
        ...oldState,
        channelStream: [
          ...oldState.channelStream,
          {
            [action.gameName]: action.channel,
          },
        ],
      };
    case SEND_VIEWERS_BY_CHANNEL:
      return {
        ...oldState,
        viewersByChannel: [
          ...oldState.viewersByChannel,
          {
            [action.gameName]: action.viewers,
          },
        ],
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
