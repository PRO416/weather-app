import React from 'react'

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div>
        <>
        {
          props.currentWeather.weather ? props.currentWeather.weather.map(item => {
            return(
              <div key={item} className="description">
                <div>{item.main}</div>
                <img src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="icon"/>
                <div>{item.description}</div>
              </div>
            );
          }) : ''
        }
        </>
        <div className="temp">
          <span>min: {props.currentWeather.main ? (parseInt(props.currentWeather.main.temp_min - 273.15)) : ''}</span>
          <span>{props.currentWeather.main ? (parseInt(props.currentWeather.main.temp - 273.15)) : ''}</span>
          <span>max: {props.currentWeather.main ? (parseInt(props.currentWeather.main.temp_max - 273.15)) : ''}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
