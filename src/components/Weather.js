import React, { useState } from 'react';
import './Weather.css';

function FetchWeatherReports(cityName) {
  return fetch(`http://api.weatherapi.com/v1/current.json?key=8ddad426a1534588827182325241706&q=${cityName}&aqi=no`);
}
function useSearchParams() {
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));

  const updateSearchParams = (params) => {
    const newSearchParams = new URLSearchParams(params);
    setSearchParams(newSearchParams);
    window.history.pushState({}, '', '?' + newSearchParams.toString());
  };

  return [searchParams, updateSearchParams];
}


function Weather() {
  const [inputValue, setInputValue] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('q');
  console.log(id);

  const fetchHumidWeatherAndTemperature = async (cityName) => {
      const response = await FetchWeatherReports(cityName);
      const data = await response.json();
      setHumidity(data.current.humidity);
      setTemperature(data.current.temp_c);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchParams({ cityName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHumidWeatherAndTemperature(inputValue);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} style={{marginRight: '2rem'}}>
        <h1 style={{ textAlign: 'center' }}>Weather</h1>
        <input
          id='input'
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='Enter your City Name'
        />
        <button type="submit" id='button'>Submit</button>
      </form>
        <h1>
          {searchParams.get('cityName')}
        </h1>
      {(humidity !== 0 && temperature !== 0) && (
        <div id="output">
          <p>Current Humidity: {humidity}%</p>
          <p>Current Temperature: {temperature}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
