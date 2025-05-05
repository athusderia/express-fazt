//Middleware es una acción intermedia que sirve para hacer algo especifico
const express = require('express')
const morgan = require('morgan')

const app = express();

//Usando express router
const HomeRoutes = require('./routes/home.js')
const UsersRoutes = require('./routes/users.js')



//Middleware morgan
app.use(morgan('dev'))
//Es un middleware
app.use(express.json())
//Usando express router
app.use(HomeRoutes)
app.use(UsersRoutes)


app.listen(12345)
console.log("Server on port 12345")


