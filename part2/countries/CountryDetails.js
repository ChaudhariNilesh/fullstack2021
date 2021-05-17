import React from 'react';


const CountryDetail = ({cntydetail}) =>{
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
    </div>)
  
  }

export default CountryDetail