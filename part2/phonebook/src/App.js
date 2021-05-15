import React, { useState } from 'react'

const Filter = ({filterVal,handleFilter}) => {
  return(
    <div>
      Filter shown with : <input value={filterVal} onChange={handleFilter}/>
    </div>
  ) 
}

const PersonForm = ({addPerson,newName,newNum,setNewName,setNewNum})=>{
 return(
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/> <br/>
        number: <input value={newNum} onChange={(event) => setNewNum(event.target.value)}/>

      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({persons,filterVal}) =>{
  
  return(
    <ul>
      {
        persons.filter(person => person.name.toLowerCase().includes(filterVal.toLowerCase()))
          .map(person => <li key={person.name}>{person.name} {person.number}</li>)
      }
    </ul>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filterVal, setFilterVal ] = useState('')



  const addPerson = (event) =>{
    event.preventDefault();
    
    if ("Arto Hellas" === newName){
      alert(`Arto Hellas is already added to phonebook`)
    }else if(persons.some(p => p.name===newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
      const nameObj = {
        name:newName,
        number:newNum
      }
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNum('')
    }
    
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={(event)=> setFilterVal(event.target.value)}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNum={newNum} setNewName={setNewName} setNewNum={setNewNum} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterVal={filterVal}/>
    </div>
  )
}

export default App;
