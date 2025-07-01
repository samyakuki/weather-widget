
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox(){
    let [city,setCity]=useState("");
    let handleChange= (evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
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