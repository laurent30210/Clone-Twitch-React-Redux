import { applyMiddleware, createStore } from 'redux';
import rootReducer from 'src/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from 'src/middlewares/api';

const store = createStore(
  // setup rootReducer -> toll's reducers
  rootReducer,
  composeWithDevTools(
    applyMiddleware(api),
  ),
);

export default store;
