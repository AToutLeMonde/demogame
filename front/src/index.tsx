import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Body} from '@fcc/ui'
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import configAxios from './api/configAxios';

configAxios();

ReactDOM.render(
  <React.StrictMode>
    <Body>
    <StoreProvider store={store}>
      <App />
      </StoreProvider>
    </Body>
  </React.StrictMode>,
  document.getElementById('root')
);