import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
=======
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
>>>>>>> dbe730b8a41dfbc0e6792fd0db1083eb82fe8a7b
