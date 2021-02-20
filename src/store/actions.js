export const GET_STREAM_FROM_API = 'GET_STREAM_FROM_API ';
export const GET_STREAM_FROM_API_SUCCESS = 'GET_STREAM_FROM_API_SUCCESS';
export const GET_DATA_FROM_API_ERROR = 'GET_DATA_FROM_API_ERROR';

export const getStreamFromAPI = () => ({
  type: GET_STREAM_FROM_API,
});
export const getStreamFromAPISuccess = (streamsList) => ({
  type: GET_STREAM_FROM_API_SUCCESS,
  streamsList,
});
export const getDataFromAPIError = (errorText) => ({
  type: GET_DATA_FROM_API_ERROR,
  errorText,
});
