import {
  GET_STREAM_FROM_API_SUCCESS,
} from 'src/store/actions';

const initialState = {
  liveStreamsList: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case GET_STREAM_FROM_API_SUCCESS:
      return {
        ...oldState,
        liveStreamList: action.streamsList,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
