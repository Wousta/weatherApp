import { createSlice } from '@reduxjs/toolkit'

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
    getWeather(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    getWeatherSuccess(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = weatherSlice.actions
export default weatherSlice.reducer