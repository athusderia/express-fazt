//Queris en la url

const express = require('express')

const app = express();

//all funciona con todos los metodos app
//get, post, put, delete

app.all('/info',(req,res)=>{
    res.send('Server Info')
})

app.get('/search',(req,res)=>{
    console.log(req.query)
    if(req.query.q === 'javascript books'){
        res.send('Lista de libros de javascript')
    }else{
        res.send('Pagina normal')
    }
})


app.get('/hello/:username', (req,res)=>{
    console.log(req.query)

    res.send(`Hello ${req.params.username}`);
})


app.listen(1234)
console.log("Server on port 1234")


