import axios from 'axios';

const apiKey = 'TWÓJ_API_KEY';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

export const getWeather = (city) =>
  axios.get(`${baseUrl}weather?q=${city}&units=metric&appid=${apiKey}`);

export const getForecast = (city) =>
  axios.get(`${baseUrl}forecast?q=${city}&units=metric&appid=${apiKey}`);
