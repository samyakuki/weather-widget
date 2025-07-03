
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[err,setErr]=useState(false);

    const Api_URL="https://api.openweathermap.org/data/2.5/weather";
    const Api_KEY="8fb1125867086c4aff4abd39bcd549e7";

    let getWeaterInfo=async ()=>{
        try{const res = await fetch(`${Api_URL}?q=${city}&appid=${Api_KEY}&units=metric`);
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
        return result;}
        catch(e){
            throw e;
        }

    }
    let handleChange= (evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        try{evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo=await  getWeaterInfo();
      updateInfo(newInfo);}
      catch(e){
        setErr(true)
      }
    }
    return <>
    <form onSubmit={handleSubmit}>
     {city === "" && <h4>Enter the city name for weather info</h4>}
        <TextField id="outlined-basic" label="city" variant="outlined" value={city} onChange={handleChange} required/>
        <br></br><br></br>
        <Button variant="contained" type="Submit" >Search</Button>
        {err && <p style={{color:"red"}}>no such place exists</p>}
    </form>

    </>
}