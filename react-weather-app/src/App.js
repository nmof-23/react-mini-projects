// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import React,{ useState , useEffect} from "react";
import { usePosition } from 'use-position';
import axios from "axios"
import Weather from "./components/Weather";

const App = () => {

    const [weather , setWeather] = useState()
    const {latitude, longitude} = usePosition();

    const getWeatherData = async(lat , lon) => {

        try {
            const key = process.env.REACT_APP_WEATHER_API_KEY
            const lang = navigator.language;
            console.log( { lang } );
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
            setWeather(data)
        } catch {
            alert("Veri alınırken hata oluştu.")
        }
    }

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude ,longitude);
    }, [latitude , longitude])

    console.log(latitude , longitude , weather);

    return (
        <React.Fragment>
            <h2>Hava Durumu</h2>
            <Weather weather={weather} />
        </React.Fragment>

        
    )    
}

export default App;