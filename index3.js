//Con dos puntos en una url, el servidor puede interpretar el valor
// y guardarlo en una variable

const express = require('express')

const app = express();
//Recibe nombres por parametros en la url
app.get('/hello/:username', (req,res)=>{
    // console.log(req.params.username)

    res.send(`Hello ${req.params.username}`);
})

app.get(('/add/:x/:y'),(req,res)=>{
    const {x,y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})
//Con el return hacemos que acabe ahí el programa
app.get('/users/:username/photo',(req, res)=>{
    if(req.params.username ==='erick'){
        return res.sendFile('./src/images/cheemsCode.jpg',{
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso')
})

app.get('/name/:name/age/:age',(req,res)=>{
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años `)
})

app.listen(1234)
console.log("Server on port 1234")


