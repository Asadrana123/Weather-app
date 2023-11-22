import React from 'react'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useWeather } from '../Provider/WeatherContext';
import axios from 'axios';
const WeatherConfig=require("../apiKeys");
function SearchBar() {
  const { 
    city,
    setCity,
    setWeatherData,
    setError } =useWeather();
 const getWeather=async (e)=>{
  if(e.key!=="Enter") return;
  try {
    const response = await axios.get(WeatherConfig.base, {
      params: {
        q: city,
        appid: WeatherConfig.key,
        units: 'metric', // You can change this to 'imperial' for Fahrenheit
      },
    });

    const forecast = response.data.list;

    const dailyWeatherData = [];

    for (let i = 0; i < 5; i++) {
      const dayData = forecast[i * 8]; // Data for each day at 12:00 PM (assuming 3-hour intervals)
      
      if (dayData) {
        dailyWeatherData.push({
          date: new Date(dayData.dt_txt).toLocaleDateString(),
          highTemp: dayData.main.temp_max,
          lowTemp: dayData.main.temp_min,
          humidity: dayData.main.humidity,
          sunrise: response.data.city.sunrise,
          sunset: response.data.city.sunset,
          weatherCondition: dayData.weather[0].main, // Accessing the main weather condition
          weatherDescription: dayData.weather[0].description, // Accessing the detailed weather description
        });
      }
    }

    setWeatherData(dailyWeatherData);
    setError('');
  } catch (error) {
    setWeatherData(null);
    setError(`Error: ${error.message}`);
  }


 }
  return (
    <div>
    <TextField
      id="search-input"
      value={city}
      variant="outlined"
      placeholder='Search Your City'
      onChange={(e)=>setCity(e.target.value)}
      onKeyDown={getWeather}
      InputProps={{
        startAdornment: (
          <SearchIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
        ),
      }}
    />
  </div>
  )
}

export default SearchBar