const express = require('express')

const app = express();

app.get('/',(req,res) =>{
    res.send('Hola mundo')
})

app.get('/miArchivo',(req,res) =>{
    res.sendFile('./src/images/cheemsCode.jpg',{
        root: __dirname
    })
})

app.get('/user',(req,res) =>{
    res.json(
        {"name": "Athus",
            "lastname": "Deria"
        })
})

app.get('/isAlive',(req,res) =>{
    res.sendStatus(204).end()
})

app.listen(1234)
console.log("Server on port 1234")


