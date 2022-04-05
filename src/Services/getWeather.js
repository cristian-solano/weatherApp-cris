import axios from "axios";


const getWeatherOfCountry = async (latitude, longitude) => {
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a466b1eeb497dddc91b403e139015307`
    const req = await axios.get(URL)
    return req
}

export default getWeatherOfCountry