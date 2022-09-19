import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeatherStatus',
  async (city) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bea40095eab92fdbc14e7089b3a88b4`
    );
    return data;
  }
);
