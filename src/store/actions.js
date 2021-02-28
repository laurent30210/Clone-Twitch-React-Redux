export const GET_STREAM_FROM_API = 'GET_STREAM_FROM_API ';
export const GET_STREAM_FROM_API_SUCCESS = 'GET_STREAM_FROM_API_SUCCESS';
export const GET_DATA_FROM_API_ERROR = 'GET_DATA_FROM_API_ERROR';
export const GET_CATEGORY_FROM_API_SUCCESS = 'GET_CATEGORY_FROM_API_SUCCESS';
export const GET_CATEGORY_FROM_API = 'GET_CATEGORY_FROM_API';

export const getStreamFromAPI = () => ({
  type: GET_STREAM_FROM_API,
});
export const getStreamFromAPISuccess = (streamsList) => ({
  type: GET_STREAM_FROM_API_SUCCESS,
  streamsList,
});
export const getCategoryFromAPI = () => ({
  type: GET_CATEGORY_FROM_API,
});
export const getCategoryFromAPISuccess = (categoryList) => ({
  type: GET_CATEGORY_FROM_API_SUCCESS,
  categoryList,
});
export const getDataFromAPIError = (errorText) => ({
  type: GET_DATA_FROM_API_ERROR,
  errorText,
});
