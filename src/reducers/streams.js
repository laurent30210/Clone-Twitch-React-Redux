import {
  GET_STREAM_FROM_API_SUCCESS,
  GET_DATA_FROM_API_ERROR,
  GET_CATEGORY_FROM_API_SUCCESS,
  GET_CHANNEL_FROM_API_SUCCESS,
} from 'src/store/actions';

const initialState = {
  liveStreamsList: [],
  catStreamsList: [],
  channelStream: [],
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
        [action.gameName]: action.channel,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
