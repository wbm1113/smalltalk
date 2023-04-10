import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryFactOfTheDay } from './queryFactOfTheDay';

const initialState = {
  factOfTheDay: ''
}

export const selectFact = (state) => state.facts.factOfTheDay;

export const queryFactOfTheDayAsync = createAsyncThunk(
  'facts/queryFactOfTheDay',
  async () => {
    const factOfTheDay = await queryFactOfTheDay();
    return factOfTheDay;
  }
)


export const factSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(queryFactOfTheDayAsync.fulfilled, (state, action) => {
        state.factOfTheDay = action.payload;
      })
  }
})

export default factSlice.reducer;