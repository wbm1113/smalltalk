import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryUserPosition } from './queryUserPosition';

const initialState = {
  location: {}
}

export const selectLocation = (state) => state.location.location;

export const queryUserPositionAsync = createAsyncThunk(
  'location/queryUserPosition',
  async () => {
    const position = await queryUserPosition();
    return position;
  }
)

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(queryUserPositionAsync.fulfilled, (state, action) => {
        state.location = action.payload;
      })
  }
})

export default locationSlice.reducer;