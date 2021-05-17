
const PersonForm = ({addPerson,newName,newNum,setNewName,setNewNum})=>{
    return(
       <form onSubmit={addPerson}>
         <div>
           <label/>Person Name : <input value={newName} onChange={(event) => setNewName(event.target.value)}/> <br/>
           <label/>Phone Number : <input value={newNum} onChange={(event) => setNewNum(event.target.value)}/>
   
         </div>
         <div>
           <button type="submit">add</button>
         </div>
       </form>
     )
   }

   export default PersonForm