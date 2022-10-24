import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './app/slices/weatherSlice';

const store = configureStore({
    reducer: {
        weather: weatherSlice,
    },
});

export { store };