import {
  OPEN_MENU_ACTIVED,
  CHANGE_VALUE,
  CHANGE_VALUE2,
  RESET_SEARCH,
  LOADER_ON,
  LOADER_OFF,
} from 'src/store/actions';

const initialState = {
  headerValue: '',
  sidebarValue: '',
  loader: false,
  loaderLive: false,
  loaderCat: false,
  loaderTop: false,
  menuActived: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU_ACTIVED:
      return {
        ...oldState,
        menuActived: !oldState.menuActived,
      };
    case CHANGE_VALUE:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    case RESET_SEARCH:
      return {
        ...oldState,
        value: '',
      };
    case LOADER_ON:
      return {
        ...oldState,
        [action.loaderName]: true,
      };
    case LOADER_OFF:
      return {
        ...oldState,
        [action.loaderName]: false,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
