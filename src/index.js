import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './Redux/Store/Store';

const store = createStore();

const jsx =
  (<Provider store={store}>
    <App/>
  </Provider>)


ReactDOM.render(jsx, document.getElementById('root'));


