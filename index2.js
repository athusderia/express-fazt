const express = require('express')

const app = express();
//Funciones para poder interpretar lo que llega del front y luego 
// pasarlo al método de abajo
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/user', (req,res) =>{
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.listen(1234)
console.log("Server on port 1234")


