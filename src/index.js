import React from 'react';
import '~/config/reactotron';
import { Provider } from 'react-redux';

import store from '~/store';
import Home from '~/pages/home';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
