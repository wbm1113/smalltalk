import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryWeatherData } from './weatherApi';

const initialState = {
  status: 'initial',
  current: {
    temp: 0,
    condition: ''
  },
  forecast: []
}

export const selectCurrent = (state) => state.weather.current;
export const selectForecast = (state) => state.weather.forecast;

export const queryWeatherAsync = createAsyncThunk(
  'weather/queryWeatherData',
  async () => {
    const weatherData = await queryWeatherData();
    return weatherData;
  }
)

export const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(queryWeatherAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(queryWeatherAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.current.temp = action.payload.currentTemp
        state.current.condition = action.payload.currentCondition
        state.forecast = action.payload.forecast
      })
  }
})

export default weatherForecastSlice.reducer;