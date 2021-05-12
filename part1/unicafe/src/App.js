import React,{useState} from 'react'



const Display= ({text}) => <h1>{text}</h1>
const Statistics = ({good,bad,neutral}) => {
  const all = good+bad+neutral
  const avg = (good-bad/3)
  const posAvg = (good/all * 100 )+"%"
  if (all !== 0 ){
    return(
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          
          <Statistic text="all" value={all} />
          <Statistic text="average" value={avg} />
          <Statistic text="positive" value={posAvg} />
        </tbody>
      </table>
    )
  }
  else{
    return(<p>No Feedback Given.</p>)
  }
}

const Statistic = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
} 

const Button = ({text,handleClick}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  );
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  return (
    <div>
      <Display text="give feedback"/>
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1) } text="neutral"/>
      <Button handleClick={()=> setBad(bad+1)} text="bad"/>

      <Display text="statistics"/>
      
    <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
