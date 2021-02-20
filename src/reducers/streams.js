import {
  GET_STREAM_FROM_API_SUCCESS,
  GET_DATA_FROM_API_ERROR,
} from 'src/store/actions';

const initialState = {
  liveStreamsList: [],
  errorText: '',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case GET_STREAM_FROM_API_SUCCESS:
      return {
        ...oldState,
        liveStreamsList: action.streamsList,
      };
    case GET_DATA_FROM_API_ERROR:
      return {
        ...oldState,
        errorText: action.errorText,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
