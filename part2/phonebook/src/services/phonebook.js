
import axios from 'axios'
const baseURL = "/api/persons"
// const baseURL = "https://stark-meadow-74176.herokuapp.com/api/persons"

const getAll =  () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
};

const newPerson = (phObj) =>{
    const request = axios.post(baseURL,phObj)
    return request.then(response => response.data)   
}
const updatePerson = (id,uptObj) =>{
    const request = axios.put(`${baseURL}/${id}`,uptObj)
    
    return request.then(response =>  response.data)
        // .catch(error=> console.log("ERR",error))   
}
const deletePerson = (id) =>{
    const request = axios.delete(`${baseURL}/${id}`)
    return request.then(response => response.data)   
}
const phoneService = {
    getAll,
    newPerson,
    updatePerson,
    deletePerson
}
export default phoneService