
import { useEffect, useState } from "react"
import getWeatherOfCountry from "../Services/getWeather"



const Button = () => {

        const [isCelcius, setIsCelcius] = useState(false)
        const [temperature, setTemperature] = useState(0)

    useEffect (()=> {

        navigator.geolocation.getCurrentPosition(function(pos) {

            getWeatherOfCountry(pos.coords.latitude, pos.coords.longitude).then(res => {
                setTemperature(res.data.main.temp)
            })
            .catch(err => {
                console.log(err)    
            })
                
        })
    }, [temperature])


    return (
        <div className>
            <h1>{isCelcius ? temperature: (temperature * 9 /5 ) + 32 }{
                isCelcius ? 'C' : 'F'
            }</h1>
            <button onClick={() => setIsCelcius(!isCelcius)} type="button" className="btn btn-light but">Change to {isCelcius ? 'Fahrenheit' : 'Celcius'}</button>
        </div>
    )
    

}   

export default Button