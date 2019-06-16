import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import DataReducer from '../Reducer/DataReducer';

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
  const store = createStore(combineReducers({
      profileData:DataReducer,
    }),
    composeenhance(applyMiddleware(ReduxThunk))
  );
  return store;
}
