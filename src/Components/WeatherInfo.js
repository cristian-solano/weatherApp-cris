import {useEffect, useState} from 'react'
import getWeatherOfCountry from '../Services/getWeather'


const WeatherInfo = () => {
    
    
    
    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [weather, setWeather] = useState([])
    const [humidity, setHumidity] = useState('')
    
    

    useEffect (()=> {
    
        
    navigator.geolocation.getCurrentPosition(function(pos) {
        setLatitude("Latitude is: " + pos.coords.latitude);
        setLongitude("Longitude is: " + pos.coords.longitude);
     
        

        getWeatherOfCountry(pos.coords.latitude, pos.coords.longitude).then(res => {
            setName(res.data.name)
            setCountry(res.data.sys.country)
            setWeather(res.data.weather[0].main)
            setHumidity(res.data.main.humidity)

        })
            .catch(err => {
            console.log(err)
        })

    })

   

    
  }, [latitude, longitude, name, country, weather, humidity])

//   const lat = latitude.map(
//     setLatitude(Number(pos.coords.latitude))
//   )
  

    return (
        <div className='Weather'>
            <h1>{country}</h1>
            <h2>{name}</h2>
            <p>{latitude}</p>
            <p>{longitude}</p>
            <p>{`Humidity: ${humidity}`} </p>
            <h4>{weather}</h4>
            
            
           
            
        </div>
    )

    // 
}

export default WeatherInfo