import SearchBox from './searchBox'
import InfoBox from './infoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        
    })
    let updateWeatherInfo=(res)=>{
        setWeatherInfo(res);
    }
    return <>
    <h2>Weather Widget App</h2>
    <SearchBox updateInfo={updateWeatherInfo}></SearchBox>
    <InfoBox info={weatherInfo}></InfoBox>
    </>
}