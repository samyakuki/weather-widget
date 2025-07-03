import SearchBox from './searchBox'
import InfoBox from './infoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike: 32.33,
        humidity: 61,
        temp: 29.63,
        tempMax: 29.63,
        tempMin: 29.63,
        weather: "clear sky"
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