import React from 'react'

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div>
        {
          <span>{props.currentWeather.main ? props.currentWeather.main.temp : ''}</span>,
          props.currentWeather.weather ? props.currentWeather.weather.map(item => {
            return(
              <>
                <div key={item.description}>{item.description}</div>
                <div key={item.main}>{item.main}</div>
              </>
            );
          }) : ''
        }
      </div>
    </div>
  );
};

export default WeatherCard;
