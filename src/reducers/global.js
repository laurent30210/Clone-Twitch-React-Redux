import {
  LOADER_ON,
  LOADER_OFF,
} from 'src/store/actions';

const initialState = {
  loader: false,
  loaderLive: false,
  loaderCat: false,
  loaderTop: false,
  menuActived: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
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
