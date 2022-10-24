import {createSlice} from '@reduxjs/toolkit';


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
      state.city = city;
      state.country = country;
      state.temp = temp;
      state.description = description;
      state.icon = icon;
    },
  },
});

export const {checkWeather} = weatherSlice.actions;
export default weatherSlice.reducer;
