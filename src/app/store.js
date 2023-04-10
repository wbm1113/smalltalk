import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../component/weather/WeatherSlice'
import factReducer from '../component/facts/FactsSlice'
import locationReducer from '../component/more-from-your-location/MoreFromYourLocationSlice'
import newsReducer from '../component/news/NewsSlice'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    facts: factReducer,
    location: locationReducer,
    news: newsReducer
  },
});
