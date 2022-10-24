import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import WeatherApp from './app/WeatherApp';

const App = () => {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
};

export default App;
