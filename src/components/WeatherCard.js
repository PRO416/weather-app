import React from 'react'

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div>
        {props.currentWeather.base}
      </div>
    </div>
  );
};

export default WeatherCard;
