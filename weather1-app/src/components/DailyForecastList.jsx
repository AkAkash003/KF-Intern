const DailyForecastList = ({ dailyForecasts }) => {
  if (!dailyForecasts || dailyForecasts.length === 0) {
    return <p>No daily forecast data available.</p>;
  }

  return (
    <div className="daily-forecast">
      <h2>Daily Forecast</h2>
      <div className="daily-cards">
        {dailyForecasts.map((day) => (
          <div className="daily-card" key={day.date}>
            <p><strong>{day.date}</strong></p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{day.day.condition.text}</p>
            <p>Min: {Math.round(day.day.mintemp_c)}°C</p>
            <p>Max: {Math.round(day.day.maxtemp_c)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecastList;
