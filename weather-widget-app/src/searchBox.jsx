
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox(){
    let [city,setCity]=useState("");

    const Api_URL="https://api.openweathermap.org/data/2.5/weather";
    const Api_KEY="8fb1125867086c4aff4abd39bcd549e7";

    let getWeaterInfo=async ()=>{
        const res = await fetch(`${Api_URL}?q=${city}&appid=${Api_KEY}&units=metric`);
        const jsonResponse = await res.json();
        let result = {
             city:city,
             temp: jsonResponse.main.temp,
             tempMin: jsonResponse.main.temp_min,
             tempMax: jsonResponse.main.temp_max,
             humidity: jsonResponse.main.humidity,
             feelsLike: jsonResponse.main.feels_like,
             weather: jsonResponse.weather[0].description,
        };
        console.log(result);

    }
    let handleChange= (evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeaterInfo();
    }
    return <>
    <h3>Search for the Weather</h3>
    <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="city" variant="outlined" value={city} onChange={handleChange} required/>
        <br></br><br></br>
        <Button variant="contained" type="Submit" >Search</Button>
    </form>

    </>
}