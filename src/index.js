import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

// import counter from './components/Provider/CreateBookStore';
import mybookstore from './components/Provider/counter';
import {fetchUsers} from './actions'

import App from './App'

import './index.css';

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

//const storeFactory = (initialState=stateData) =>
//    createStore(
//        combineReducers({todos}),
//        ((localStorage['redux-store']) ?
//            JSON.parse(localStorage['redux-store']) :
//            stateData
//        ),
//        applyMiddleware(thunk, logger, saver)
//    )


// const store=createStore(CreateBookStore);
const store = createStore(fetchUsers);


ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,


  document.getElementById('root')
);
