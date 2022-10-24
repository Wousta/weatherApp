import {createSlice} from '@reduxjs/toolkit';
import {getWeather, showWeather} from 'react-native-weather-api';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: null,
    country: null,
    temp: null,
    description: null,
    icon: null,
  },
  reducers: {
    checkWeather(state, action) {
      const {city, country, temp, description, icon} = action.payload;
      console.log(`payload: ${city}, ${country}, ${temp}`);
      state.city = city;
      state.country = country;
      state.temp = temp;
      state.description = description;
      state.icon = icon;
      console.log('Que esta pasando');
    },
  },
});

export const {checkWeather} = weatherSlice.actions;
export default weatherSlice.reducer;
