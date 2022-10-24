import {createSlice} from '@reduxjs/toolkit';
import {getWeather, showWeather} from 'react-native-weather-api';

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
        console.log('payload: ' + action.payload);
      getWeather({
        key: '72576a874b6d2e544c95528c755cbbe4',
        city: action.payload[0],
        country: action.payload[1],
      }).then(() => {
        console.log('ayaya');
        let data = new showWeather();
        console.log(Math.round(data.temp-273.15) + ' hey');
        return {
          name: action.payload[0],
          country: action.payload[1],
          temp: Math.round(data.temp-273.15),
          description: data.description,
          icon: data.icon,
        };
      });
    },
  },
});

export const {checkWeather} = weatherSlice.actions;
export default weatherSlice.reducer;
