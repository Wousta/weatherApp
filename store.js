import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './app/models/root-reducer';

const store = configureStore({
    reducer: rootReducer,
});

export { store };