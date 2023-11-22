import React from 'react'
import { useWeather } from '../Provider/WeatherContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Location() {
  const {city}=useWeather();
  return (
    <div><span><LocationOnIcon/></span>{city?city:"Enter your Location Please"}</div>
  )
}

export default Location