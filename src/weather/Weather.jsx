import { useState } from "react";
import "./weather.css";
import { useEffect } from "react";
import axios from "axios";

const apiKey = "13b8c2b59f4710181773774cff02b763";

const LocationSearch = ({ locationChange }) => {
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    locationChange(location);
    setLocation("");
  };
  return (
    <form className="location-search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="City, Country"
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
      <img
        className="weather-info-image"
        src={`/public/${weatherInfo.weather[0].icon}.png`}
      />
      <div className="weather-info-temp">{celsiusTemperature} °C</div>
      <div className="weather-info-name">{weatherInfo.name}</div>
      <div className="weather-info-details">
        <div className="weather-info-detail">
          <b>Feels like:</b> {celsiusFeelsLikeTemperature}°C
        </div>
        <div className="weather-info-detail">
          <b>Humidity</b> {weatherInfo.main.humidity}%
        </div>

        <div className="weather-info-detail">
          <b>Wind speed:</b> {weatherInfo.wind.speed} km/h
        </div>
      </div>
    </div>
  );
};

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    if (!location) {
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
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
