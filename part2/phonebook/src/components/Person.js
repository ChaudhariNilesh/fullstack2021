const Persons = ({persons,filterVal,delPerson}) =>{
    return(
      <ul>
        {
          persons.filter(person => person.name.toLowerCase().includes(filterVal.toLowerCase()))
            .map(person => <li key={person.id}> <b>{person.name}</b> : {person.number}<button onClick={()=>delPerson(person)} >Delete</button></li>)
        }
      </ul>
    )
  }

export default Persons