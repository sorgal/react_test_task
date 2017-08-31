import 'core-js/es6'
import 'core-js/stage/4'
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './redux'
import { Provider } from 'react-redux'

// const $root = document.getElementById('root')

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'));
// const renderView = () => render(
//   <Provider store={store}>
//      <App />
//   </Provider>,
//   $root
// )
//
// renderView()
//
// registerServiceWorker();

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);
