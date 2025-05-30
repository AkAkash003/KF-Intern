import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import { weatherCodes } from "./constants";
import { useEffect, useRef, useState } from "react";
import NoResultsDiv from "./components/NoResultsDiv";
import DailyForecastList from "./components/DailyForecastList";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecasts, setHourlyForecasts] = useState([]);
  const [dailyForecasts, setDailyForecasts] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState({});
  const [hasNoResults, setHasNoResults] = useState(false);
  const [chanceOfRain, setChanceOfRain] = useState(null);
  const searchInputRef = useRef(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;
    const next24HoursData = hourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours;
    });
    setHourlyForecasts(next24HoursData);
  };

  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("API Error");
      const data = await response.json();

      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );
      setCurrentWeather({ temperature, description, weatherIcon });

      const allHourlyData = data.forecast.forecastday.flatMap((day) => day.hour);
      searchInputRef.current.value = data.location.name;
      filterHourlyForecast(allHourlyData);

      setDailyForecasts(data.forecast.forecastday);

      const details = {
        humidity: data.current.humidity,
        pressure: data.current.pressure_mb,
        windSpeed: data.current.wind_kph,
        visibility: data.current.vis_km,
        chanceOfRain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      };
      setChanceOfRain(details.chanceOfRain);
      setWeatherDetails(details);
    }
    catch (error) {
      console.error("Weather data fetch failed:", error);
      setHasNoResults(true);
    }
  };

  useEffect(() => {
    const defaultCity = "Chennai";
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=7`;
    getWeatherDetails(API_URL);
  }, []);

  return (
    <div className="main-container">
      <div className="layout">
        <div className="left-panel">
          <SearchSection getWeatherDetails={getWeatherDetails} searchInputRef={searchInputRef} />
          {hasNoResults ? (
            <NoResultsDiv />
          ) : (
            <>
             
              <CurrentWeather currentWeather={currentWeather} chanceOfRain={chanceOfRain} />
              <div className="hourly-forecast">
                <ul className="weather-list">

                  {hourlyForecasts.map((hourlyWeather) => (
                    <HourlyWeatherItem
                      key={hourlyWeather.time_epoch}
                      hourlyWeather={hourlyWeather}
                    />
                  ))}
                </ul>
              </div>
              <WeatherDetails details={weatherDetails} />
            </>
          )}
        </div>

        <div className="right-panel">
          <DailyForecastList dailyForecasts={dailyForecasts} />
        </div>
      </div>
    </div>
  );
};

export default App;
