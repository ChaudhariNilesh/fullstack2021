
import axios from 'axios'
const baseURL = "http://localhost:3001/persons"

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
    return request.then(response => response.data)   
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