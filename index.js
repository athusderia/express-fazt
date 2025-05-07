//Middleware es una acción intermedia que sirve para hacer algo especifico
const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const app = express();
const path = require('path');

//Usando express router
const HomeRoutes = require('./routes/home.js')
const UsersRoutes = require('./routes/users.js')
const {connectDB} = require('./src/db.js')

connectDB()

//Middleware morgan
app.use(morgan('dev'))
//Es un middleware
app.use(express.json())
//Usando express router
app.use(HomeRoutes)
app.use(UsersRoutes)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public/views'))


app.listen(12345)
console.log("Server on port 12345")


