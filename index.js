const express = require('express')

const app = express();

app.get('/',(req, res)=>{
    res.send("Hola mundo")
})

app.get('/about',(req, res)=>{
    res.send("About")
})

app.get('/us',(req, res)=>{
    res.send("Us")
})

app.get('/this',(req, res)=>{
    res.send("This")
})

app.use((req,res)=>{
    res.status(404).send("404: No existe")
})

app.listen(3000)
console.log("Server on port 3000")


