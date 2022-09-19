import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../axios/fetchWeather';

const initialState = {
  items: {},
  status: 'loading',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchWeather.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const selectWeatherData = (state) => state.weather.items;

export default weatherSlice.reducer;
