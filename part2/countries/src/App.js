import {useState,useEffect} from 'react'
import axios  from 'axios'
import CountryDetail from '.\\components\\CountryDetails'

const Country = ({ctryName,handleChange}) =>{
  return(
    <form>
      Find Countries : <input value={ctryName} onChange={handleChange}/>
    </form>
  )
}

const CountryList = ({countries,filterVal,setCnty}) =>{
  const filteredCnty = countries.filter(c=> c.name.toLowerCase().includes(filterVal.toLowerCase()))
    return(
      <>
      {
        filteredCnty.length > 10 ? <p>Too many matches, specify another filter</p> 
        : filteredCnty.length === 1 ? <CountryDetail cntydetail={filteredCnty[0]}/> :
        <ul>
          {filteredCnty.map(c => <li key={c.name}>{c.name}<button onClick={()=> setCnty(c)}>show</button></li>)}
        </ul>  
      }
      </>
    )
  }

const App = () => {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [countryDetail, setCountryDetail] = useState([])
  
    useEffect(()=>{
        axios.get(`https://restcountries.eu/rest/v2/all`).then(response=>{
          if (response.data!=null){
              setCountries(response.data)
          }
        },error=>{
          console.log(error.message);
        })
   },[])
 
  
  
  return (
    <div>
      <Country ctryName={country} handleChange={(event)=> {setCountry(event.target.value); setCountryDetail([])}} />

      {(country && !countryDetail.name)?<CountryList filterVal={country} countries={countries} setCnty={setCountryDetail}/>: <></>}
      
      {(countryDetail.name) ? <CountryDetail cntydetail={countryDetail}/>  : <></> }
      
    </div>
  );
}

export default App;
