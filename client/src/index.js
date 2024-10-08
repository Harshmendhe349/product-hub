import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import App from './App';
import store from './redux/store';  // Import your Redux store
import './index.css';

ReactDOM.render(
  <Provider store={store}>  {/* Wrap App with Provider and pass the store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
