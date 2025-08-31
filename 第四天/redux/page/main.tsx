// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 用 Provider 包裹整个应用 */}
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);