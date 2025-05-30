const WeatherDetails = ({ details }) => {
  if (!details || Object.keys(details).length === 0) {
    return null; // or <p>Loading weather details...</p>
  }

  return (
    <div className="weather-details">
      <h2>Weather Details</h2>
      <ul>
        <li><i class="bi bi-moisture me-2"></i> Humidity: {details.humidity}%</li>
        <li><i class="bi bi-speedometer2 me-2"></i> Pressure: {details.pressure} hPa</li>
        <li><i class="bi bi-wind me-2"></i> Wind Speed: {details.windSpeed} km/h</li>
        <li><i class="bi bi-eye me-2"></i> Visibility: {details.visibility} km</li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
