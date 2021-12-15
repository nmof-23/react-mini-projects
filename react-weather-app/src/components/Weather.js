import React from "react";

const Weather = (props) => {

    const { weather } = props

    if(!weather){
        return <p>please wait...</p>
    } 

    return (
        <React.Fragment>
            <h3>{weather.name}</h3>
            <h4>{weather.weather.map(data => data.description).join(", ")}</h4>
            <p>{weather.main.temp}°C</p>
            <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
            <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </React.Fragment>
    )
};

export default Weather;