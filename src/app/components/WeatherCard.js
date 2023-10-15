"use-client"

import styles from "./WeatherCard.module.css"
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({cityName, weatherType, currentWeather, highTemp, lowTemp, cloudiness, humidity, windSpeed})=> (
    <div className={styles.weatherCardWrapper} style={{backgroundColor: `rgba(0,0,0,0.${cloudiness}`}}>
        <div className={styles.weatherCardImg}>
            <WeatherIcon weatherType={weatherType}/>
        </div>
        <div className={styles.weatherCardCont}>
            <h2>{cityName}</h2>
            <p>Weather type: {weatherType}</p>
            <p>Current Temperature: {currentWeather}</p>
            <p>Hight Temperature: {highTemp}</p>
            <p>Low Temperature: {lowTemp}</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity: {humidity}</p>
            <p>Wind Speed: {windSpeed}</p>
        </div>
    </div>
);

export default WeatherCard