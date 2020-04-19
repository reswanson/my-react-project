import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

// import counter from './components/Provider/CreateBookStore';
import mybookstore from './components/Provider/counter';

import App from './App'

import './index.css';


// const store=createStore(CreateBookStore);
const store = createStore(mybookstore);


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,


  document.getElementById('root')
);
