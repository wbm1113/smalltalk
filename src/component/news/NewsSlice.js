import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { queryNews } from './queryNews';

const initialState = {
  news: {}
}

export const selectNews = (state) => state.news.news;

export const queryNewsAsync = createAsyncThunk(
  'news/queryNewsAsync',
  async  () => {
    const news = await queryNews();
    return news;
  }
)

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(queryNewsAsync.fulfilled, (state, action) => {
        state.news = action.payload;
      })
  }
})

export default newsSlice.reducer;