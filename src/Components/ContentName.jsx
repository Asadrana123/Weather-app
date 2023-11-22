import React from 'react'
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useWeather } from '../Provider/WeatherContext';
function ContentName() {
  const {
    city,
    setCity,
    date,
    setDate,
    weatherData,
    setWeatherData,
    error,
    setError }=useWeather();
  return (
    <div className='content-name'>
         <div><DatePicker
    selected={date}
    onChange={date => setDate(date)}
    dateFormat="MM/dd/yyyy"
    placeholderText="Select a date"
  /></div>
         <div>Weather Condition</div>
         <div>High Temperature</div>
         <div>Low Temperature</div>
         <div>Humidity</div>
         <div>Sunrise Time</div>
         <div>Sunset Time</div>
    </div>
  )
}

export default ContentName