const express = require('express')
const morgan = require('morgan')

const app = express();

//Middleware morgan
app.use(morgan('tiny'))

app.get('/profile', (req, res)=>{
    res.send('Profile Page')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

app.get('/dashboard',(req,res)=>{
    res.send('Dashboard page')
})


app.listen(1234)
console.log("Server on port 1234")


