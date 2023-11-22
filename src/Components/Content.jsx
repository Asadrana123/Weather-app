import React from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
function Content({data}) {
  let icon="";
  if(data.weatherCondition==="Thunderstorm") icon="WIND";
  if(data.weatherCondition==="Drizzle"|| data.weatherCondition==="RAIN") icon="RAIN";
  if(data.weatherCondition==="Snow") icon="SNOW";
  if(data.weatherCondition==="Clear") icon="CLEAR_DAY";
  if(data.weatherCondition==="Clouds") icon="CLOUDY";
  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 50,
    animate: true
  };
  return (
    <div className='content'>
      <div>{data.date}</div>
      <div>
        <ReactAnimatedWeather
             icon={icon}
             color={defaults.color}
             size={defaults.size}
             animate={defaults.animate}
        />
      </div>
      <div>{data.highTemp}</div>
      <div>{data.lowTemp}</div>
      <div>{data.humidity}%</div>
      <div>{new Date(data.sunrise * 1000).toLocaleTimeString()}</div>
      <div>{new Date(data.sunset * 1000).toLocaleTimeString()}</div>
    </div>
  )
}
export default Content