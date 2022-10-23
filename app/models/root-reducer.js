import { combineReducers } from "redux";
import { reducer as weatherReducer } from "./weather/reducers";

const rootReducer = combineReducers({ weather: weatherReducer });

export {rootReducer};