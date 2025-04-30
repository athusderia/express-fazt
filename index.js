const express = require('express')

const app = express();
//Recibe nombres por parametros en la url
app.get('/helo/:username', (req,res)=>{
    // console.log(req.params.username)

    res.send(`Hello ${req.params.username}`);
})

app.listen(1234)
console.log("Server on port 1234")


