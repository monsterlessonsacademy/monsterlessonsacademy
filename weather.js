import weatherInfo from "./weather-data";

class Weather {
  constructor() {
    this.locationSearch = document.querySelector(".location-search");
    this.locationSearchInput = document.querySelector(".location-search-input");
    this.weatherInfoBlock = document.querySelector(".weather-info-block");
    this.weatherInfoImage = document.querySelector(".weather-info-image");
    this.weatherInfoTemp = document.querySelector(".weather-info-temp");
    this.weatherInfoName = document.querySelector(".weather-info-name");
    this.feelsLike = document.querySelector(".feels-like");
    this.humidity = document.querySelector(".humidity");
    this.windSpeed = document.querySelector(".wind-speed");

    this.addListeners();
  }

  addListeners() {
    this.locationSearch.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (this.locationSearchInput.value === "") {
        return;
      }

      this.weatherInfo = await this.getWeatherInfo(
        this.locationSearchInput.value
      );
      this.renderWeatherInfo();
      this.locationSearchInput.value = "";
    });
  }

  getUrl(location) {
    const apiKey = "13b8c2b59f4710181773774cff02b763";
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  }

  async getWeatherInfo(location) {
    try {
      const url = this.getUrl(location);
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.error("Cannot fetch a location");
    }
  }

  renderWeatherInfo() {
    const celsiusTemperature = Math.floor(this.weatherInfo.main.temp - 273);
    const celsiusFeelsLikeTemperature = Math.floor(
      this.weatherInfo.main.feels_like - 273
    );
    this.weatherInfoImage.setAttribute(
      "src",
      `/public/${this.weatherInfo.weather[0].icon}.png`
    );
    this.weatherInfoTemp.textContent = `${celsiusTemperature} °C`;
    this.weatherInfoName.textContent = this.weatherInfo.name;
    this.feelsLike.textContent = celsiusFeelsLikeTemperature;
    this.humidity.textContent = this.weatherInfo.main.humidity;
    this.windSpeed.textContent = this.weatherInfo.wind.speed;
    this.weatherInfoBlock.classList.remove("hidden");
  }
}

new Weather();
