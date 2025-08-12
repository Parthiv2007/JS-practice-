import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Data from './components/Data';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState({
    celcius: ' ',
    name: ' ',
    humidity: '',
    weather: ''
  });

  const [name, setname] = useState(''); 

  const handleclick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fd87f0938506e19ae23a72fb18e2aeb8&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          setdata({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            wind: res.data.wind.speed,
          })
        })
        .catch(err => console.log(err));

    } 
  }

 

  return (
    <>
      <div className="container">
        <div className="display">
          <h2>Know weather around your city</h2>

          <div className="search">
            <input type="text" className='search-bar' placeholder='Enter your city,state,or contry' onChange={e =>   setname(e.target.value)} />
            <button className='search-btn' onClick={handleclick}>search</button>
          </div>
          <h1 className='city-name'>{data.name}</h1>

          <div className="data"> <h1>{Math.round(data.celcius)}°C</h1> </div>

          <div className="od">
            <p>wind:{data.wind}km/h</p>
            <p>humidity:{data.humidity}%</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
