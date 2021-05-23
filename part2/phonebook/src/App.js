import React, { useState, useEffect } from 'react'
import phoneService from './services/phonebook'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Person'
import Message from './components/Message'
import './index.css'



const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filterVal, setFilterVal ] = useState('')
  const [ msg, setMsg ] = useState({})

  useEffect(()=>{
    phoneService.getAll().then(phones => setPersons(phones))
  },[])

  const addPerson = (event) =>{
    event.preventDefault();
    if (persons.some(p => p.name===newName)){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)){
        const pObj = persons.find(p => p.name === newName)
        phoneService.updatePerson(pObj.id,{...pObj,number:newNum,}).then(updObj => {
          setPersons(persons.map(p=> p.id !== pObj.id ? p : updObj))
          setMsg({
            message:`Information of ${newName} has updated.`,
            type:"success"
          })
          setTimeout(() => {
            setMsg({})
          }, 5000)
          setNewName('')
          setNewNum('')
        }).catch(error=>{
          console.log("UPDATED::",error)
          setMsg({
            message: error.response.data.error,
            type:"error"
          })
          setTimeout(() => {
            setMsg({})
          }, 5000)
        })
      }
    }else{
      phoneService.newPerson({name:newName,number:newNum,}).then(newObj => {

        setPersons(persons.concat(newObj))
        setMsg({
          message:`Information of ${newName} has  been added to the server.`,
          type:"success"
        })
        setTimeout(() => {
          setMsg({})
        }, 5000)
        setNewName('')
        setNewNum('')
      }).catch(error=>{
        setMsg({
          message:`${error.response.data.error}`,
          type:"error"
        })
        setTimeout(() => {
          setMsg({})
        }, 5000)
        setNewName('')
        setNewNum('')
      })
    }
    
  }
  const delPerson = ({id,name}) =>{
    const confirm = window.confirm(`Delete ${name} ?`)   
    if(confirm){
      phoneService.deletePerson(id).then(response=>{
        setPersons(persons.filter(p=> p.id !==id))
      }).catch(error=>{
        console.log(error)
        setMsg({
          message:error.response.data.error,
          type:"error"
        })
        setTimeout(() => {
          setMsg({})
        }, 5000)
      })
  }
}
  return (
    <div>
      <Message msg={msg}/>
      <h2>Phonebook</h2>
      <Filter handleFilter={(event)=> setFilterVal(event.target.value)}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNum={newNum} setNewName={setNewName} setNewNum={setNewNum}  />
      <h2>Numbers</h2>
      <Persons persons={persons} filterVal={filterVal} delPerson={delPerson}/>
    </div>
  )
}

export default App;
