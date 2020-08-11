import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import './styles/style.css';

const API_KEY = `81e06c55bbe753ebf2bfc0e84ed7668a`;

function App() {
  let [currentWeather, setCurrentWeather] = useState('');
  let [city, setCity] = useState('London');
  let [cityUpdate, setCityUpdate] = useState('');

  useEffect(() => {
    async function fetchData(){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setCurrentWeather(data);
          console.log(data)
        })
    }
    fetchData();
  }, [city])

  function handleCityChange(update) {
    setCityUpdate(update);
  }

  const commitCityChange = () => {
    setCity(cityUpdate);
  }

  return (
    <div className="App">
      <h3>Weather Update</h3>
      <Search handleCityChange={handleCityChange} commitCityChange={commitCityChange}/>
      <WeatherCard currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
