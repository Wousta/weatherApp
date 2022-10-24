import {createSlice} from '@reduxjs/toolkit';
import {
  getWeather,
  showWeather,
} from 'react-native-weather-api';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    name: null,
    country: null,
    temp: null,
    description: null,
    icon: null,
  },
  reducers: {
    checkWeather(state, action) {
      getWeather({
        key: '72576a874b6d2e544c95528c755cbbe4',
        city: action.payload.name,
        country: action.payload.country,
      }).then(() => {
        let data = new showWeather();
        state.push({
          name: action.payload.name,
          country: action.payload.country,
          temp: data.temp,
          description: data.description,
          icon: data.icon,
        });
      });
    },
  },
});

export const {checkWeather} = weatherSlice.actions;
export default weatherSlice.reducer;
