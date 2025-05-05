const express = require('express')

//Express router
const router = express.Router()

router.get('/note.txt', (req,res)=>{
    res.send('Este no es un archivo')
})

router.get('/profile', (req, res)=>{
    res.send('Profile Page')
})

module.exports = router;
