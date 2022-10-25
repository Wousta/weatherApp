import React from 'react';
import {Provider} from 'react-redux';

import store from './store';
import WeatherApp from './app/WeatherApp';

//Redux store is passed to the Provider component
const App = () => {
  return (
    <Provider store={store}>
      <WeatherApp />
    </Provider>
  );
};

export default App;
