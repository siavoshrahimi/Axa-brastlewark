import {createStore, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from "./rootReducer";

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
  const store = createStore(rootReducer, composeenhance(applyMiddleware(ReduxThunk)));
  return store;
}
