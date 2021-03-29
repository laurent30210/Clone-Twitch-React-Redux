export const GET_STREAM_FROM_API = 'GET_STREAM_FROM_API ';
export const GET_STREAM_FROM_API_SUCCESS = 'GET_STREAM_FROM_API_SUCCESS';
export const GET_DATA_FROM_API_ERROR = 'GET_DATA_FROM_API_ERROR';
export const GET_CATEGORY_FROM_API_SUCCESS = 'GET_CATEGORY_FROM_API_SUCCESS';
export const GET_CATEGORY_FROM_API = 'GET_CATEGORY_FROM_API';
export const GET_CHANNEL_FROM_API = 'GET_CHANNEL_FROM_API';
export const GET_CHANNEL_FROM_API_SUCCESS = 'GET_CHANNEL_FROM_API_SUCCESS';
export const SEND_VIEWERS_BY_CHANNEL = 'SEND_VIEWERS_BY_CHANNEL';
export const OPEN_MENU_ACTIVED = 'OPEN_MENU_ACTIVED';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_VALUE2 = 'CHANGE_VALUE2';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SUBMIT_VALUE = 'SUBMIT_VALUE';
export const LOADER_OFF = 'LOADER_OFF';
export const LOADER_ON = 'LOADER_ON';

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
export const getChannelFromAPI = (channelID) => ({
  type: GET_CHANNEL_FROM_API,
  channelID,
});
export const getChannelFromAPISuccess = (gameName, channel) => ({
  type: GET_CHANNEL_FROM_API_SUCCESS,
  gameName,
  channel,
});
export const sendViewersByChannel = (gameName, channel, viewers) => ({
  type: SEND_VIEWERS_BY_CHANNEL,
  gameName,
  channel,
  viewers,
});
export const openMenuActived = () => ({
  type: OPEN_MENU_ACTIVED,
});
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});
export const changeValue2 = (value) => ({
  type: CHANGE_VALUE2,
  value,
});
export const resetSearch = () => ({
  type: RESET_SEARCH,
});
export const submitValue = () => ({
  type: SUBMIT_VALUE,
});
export const loaderOn = (loaderName) => ({
  type: LOADER_ON,
  loaderName,
});
export const loaderOff = (loaderName) => ({
  type: LOADER_OFF,
  loaderName,
});
