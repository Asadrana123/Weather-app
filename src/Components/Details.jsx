import React from 'react'
import Content from './Content'
import ContentName from './ContentName'
import { useWeather } from '../Provider/WeatherContext'
function Details() {
  const {weatherData}=useWeather();
  return (
    <div className='details'>
       {weatherData&&<div><ContentName/></div>} 
        {weatherData&&weatherData.map((data,index)=>{
            return <div key={index}><Content data={data}/></div>
        })} 
    </div>
  )
}

export default Details;