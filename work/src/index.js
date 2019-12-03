import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store";

const newApp =(
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(newApp, document.getElementById('root'));
