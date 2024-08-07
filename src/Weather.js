import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
    const [city,setCity] = useState();
    const [weather, setWeather] = useState();
    const handleCityChange= (event) =>{
        setCity(event.target.value)
    }

    const fetchWeather = async() =>{
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'24d2a3f02b5e0b35d3adc6bd363bdb72'}`)
            setWeather(response)
            // console.log(response)
        }

        catch (error){
            console.log("Error Fetching weather data", error)

        }
    }
    const handleClick = () => {
        fetchWeather();
    }
  return (
    <div className='weather-container'> 
        <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange}/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='weather-info'>
            <h3>{weather.data.name}</h3>
            <p>Temp is {weather.data.main.temp - 273.15 +' \u00B0C'}</p>
            <p>{weather.data.weather[0].description}</p>

        </div>
        </>}
    </div>
  )
}
