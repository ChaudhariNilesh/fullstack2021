const express = require('express')
const app = express()

let persons=[
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "nilesh",
      "number": "123",
      "id": 4
    },
    {
      "name": "abc",
      "number": "122",
      "id": 5
    }
  ]

app.get("/api/persons",(request,response)=>{
    response.json(persons)
})

app.get("/info",(request,response)=>{
    response.send(`Phonebook has info for ${persons.length} people. <br/> ${new Date()}`)
})

app.get("/api/person/:id",(request,response)=>{
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if(person){

        response.json(person)
    }else{
        response.status(404).end("404 not found")
    }
    
})


app.delete("/api/person/:id",(request,response)=>{
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if(person){
        const person = persons.filter(p => p.id !== id)
        response.json(person)
    }else{
        response.status(404).end("404 not found")
    }
    
})

app.use(express.json())
app.post("/api/persons/",(request,response)=>{
    const body = request.body
    if (!body.name){
        return response.status("400").json({
            "error":"person name is missing."
        })
    }else if(!body.number){
        return response.status("400").json({
            "error":"person number is missing."
        })
    }else if(persons.some(p => p.name===body.name)){
        return response.status("400").json({
            "error":"person name must be unique."
        })
    }else{
        const person = {
            "name":body.name,
            "number":body.number,
            "id":Math.random() * 1000
        }
        persons.concat(person)
        response.json(persons)
    }  
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)