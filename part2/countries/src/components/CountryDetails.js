import axios from 'axios';
import React,{useEffect,useState} from 'react';

const CountryDetail = ({cntydetail}) =>{
  const KEY = process.env.REACT_APP_WEATHER_API_KEY
  const [whtrData, setWhtrData] = useState({})

  useEffect(()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=${KEY}&query=${cntydetail.name}`).then(response =>{
      setWhtrData(response.data.current)
    })
  },[cntydetail.name])
  // console.log(Boolean(whtrData));
    return(
    <div>
      <h1>{cntydetail.name}</h1>
      <p><strong>Capital:</strong>{cntydetail.capital}</p>
      <p><strong>Population:</strong>{cntydetail.population}</p>

      <ul>
        {
          cntydetail.languages.map(l => <li key={l.name}>{l.name}</li>)
        }
      </ul>
      <img src={cntydetail.flag} width="148px" height="148px" alt="flag"/>

      {
        (whtrData) ?       
        <div>
        <h1>Weather in {cntydetail.name}</h1>
        <p><strong>Temperature : </strong>{whtrData.temperature} celcius</p>
        <img src={whtrData.weather_icons} width="148px" height="148px" alt="weather"/>
        
        <p><strong>Wind : </strong>{whtrData.wind_speed} mph direction {whtrData.wind_dir}</p>
        </div>
        : <></>
      }


    </div>)
  
  }

export default CountryDetail