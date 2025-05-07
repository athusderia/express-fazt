const mysql = require('mysql2/promise')

async function connectDB(){
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'expressdb'

})


const result = await connection.query('SELECT 1 +1 AS Result')
console.log(result)
}

module.exports = {connectDB}