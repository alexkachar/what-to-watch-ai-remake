import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import store from './store/store';
import { initApp } from './store/store';

initApp();

const root = createRoot(document.getElementById(`root`)!);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
