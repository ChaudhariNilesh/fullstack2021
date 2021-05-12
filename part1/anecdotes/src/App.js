import {useState} from 'react'
const Button = ({text,handleClick}) => {
  return (

  <button onClick={handleClick} >{text}</button>


  )
}
function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(new Array(anecdotes.length).fill(0))

  const  vote = () =>{
    const copy = [...voted]; 
    copy[selected]+=1
    setVoted(copy)
  }

  const  highVoted = () => voted.indexOf(Math.max(...voted))
  return (
    <div>
      <h1> Anecdote of the day</h1>
      <p>{anecdotes[selected]} <br/>has {voted[selected]}</p>
      <br/>
      <Button text="next anecdotes" handleClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)))} />
      <Button text="vote" handleClick={vote} />
      <h1> Anecdote with most votes</h1>
      <p>{anecdotes[highVoted()]} <br/>has {voted[highVoted()]}</p>

    </div>
  );
}

export default App;   
