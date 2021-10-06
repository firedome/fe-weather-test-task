import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/App';
import initStore from 'redux/store';
import { Provider } from 'react-redux';

import './index.css';

export const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
