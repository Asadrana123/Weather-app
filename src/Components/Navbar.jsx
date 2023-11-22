import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import ReplayIcon from '@mui/icons-material/Replay';
import { useWeather } from '../Provider/WeatherContext';
function Navbar() {
  const {
    setCity,
    setWeatherData
    }=useWeather();
    const refresh=()=>{
      setWeatherData(null);
      setCity("");
    }
  return (
    <div className='navbar'>
        <div> <span><LightModeIcon/></span>Weather 99</div>
        <div onClick={refresh} id="refresh"><span><ReplayIcon/></span>  Refresh</div>
    </div>
  )
}

export default Navbar