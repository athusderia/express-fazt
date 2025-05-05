const express = require('express')

const app = express();

//Middleware
// Cualquier ruta que llegue a mi aplicación va pasar por esta
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`)
    next()
})

app.get('/profile', (req, res)=>{
    res.send('Profile Page')
})

app.get('/about', (req, res)=>{
    res.send('About Page')
})

//Middleware isAuthenticated
app.use((req, res, next) => {
    if(req.query.login ==='athus@gmail.com'){
        next()
    }else{
        res.send('No autorizado')
    }
})

app.get('/dashboard',(req,res)=>{
    res.send('Dashboard page')
})




app.listen(1234)
console.log("Server on port 1234")