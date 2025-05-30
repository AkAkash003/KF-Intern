const HourlyWeatherItem = ({ hourlyWeather }) => {
  const time = new Date(hourlyWeather.time).getHours();
  const displayTime = `${time % 12 || 12} ${time >= 12 ? "PM" : "AM"}`;
  const icon = hourlyWeather.condition.icon;
  const temp = Math.round(hourlyWeather.temp_c);
  const rainChance = hourlyWeather.chance_of_rain;

  return (
    <li className="weather-item">
      <p className="hour">{displayTime}</p>
      <img src={icon} alt="weather icon" className="weather-icon" />
      <p className="temperature">{temp}°C</p>
      <p className="rain-chance">{rainChance}% 🌧</p>
    </li>
  );
};

export default HourlyWeatherItem;
