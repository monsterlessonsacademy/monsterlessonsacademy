import { useEffect, useState } from "react";
import data from "./data";
import "./weather.css";
import axios from "axios";

const apiKey = "13b8c2b59f4710181773774cff02b763";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=${apiKey}`;

const LocationSearch = ({ locationChange }) => {
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    locationChange(location);
    setLocation("");
  };
  return (
    <form onSubmit={handleSubmit} className="location-search">
      <input
        type="text"
        placeholder="City, Country"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-search-input"
      />
    </form>
  );
};

const WeatherInfo = ({ weatherInfo }) => {
  const celsiusTemperature = Math.floor(weatherInfo.main.temp - 273);
  const celsiusFeelsLikeTemperature = Math.floor(
    weatherInfo.main.feels_like - 273
  );
  return (
    <div className="weather-info">
      <img className="weather-info-image" src={`/public/${weatherInfo.weather[0].icon}.png`} />
      <div className="weather-info-temp">{celsiusTemperature} °C</div>
      <div className="weather-info-name">{weatherInfo.name}</div>
      <div className="weather-info-details">
        <div className="weather-info-detail">
          <b>Feels like:</b> {celsiusFeelsLikeTemperature}°C
        </div>
        <div className="weather-info-detail">
          <b>Humidity:</b> {weatherInfo.main.humidity}%
        </div>
        <div className="weather-info-detail">
          <b>Wind speed:</b> {weatherInfo.wind.speed} km/h
        </div>
      </div>
    </div>
  );
};

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!location) {
      return;
    }
    console.log("location", location);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    setWeatherInfo(null);
    axios.get(url).then((response) => {
      setWeatherInfo(response.data);
    });
  }, [location]);
  return (
    <div className="weather-block">
      <LocationSearch locationChange={(location) => setLocation(location)} />
      {weatherInfo && <WeatherInfo weatherInfo={weatherInfo} />}
    </div>
  );
};

export default Weather;
