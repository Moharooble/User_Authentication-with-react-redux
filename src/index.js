import React from 'react';
import { createRoot } from 'react-dom/client';  // Note the change here
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);  // Create the root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);