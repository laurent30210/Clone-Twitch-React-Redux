import { combineReducers } from 'redux';

// import reducers
import streamsReducer from './streams';
import globalReducer from './global';

export default combineReducers({
  // setup many states
  streamsReducer,
  globalReducer,

});
