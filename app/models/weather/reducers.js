import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "./actions";

const initialState = {
    name: null,
    country: null,
    temp: null,
    description: null,
    icon: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER': {
        const{name, country, temp, description, icon} = action.payload;

        return {
            name,
            country,
            temp,
            description,
            icon,
        };
    }
    case 'GET_WEATHER_SUCCESS':
        //TODO
    case 'GET_WEATHER_FAILURE':
        //TODO
    default:
      return state;
  }
};

export {reducer};