require('dotenv').config()
const express = require ('express')

const app = express()

app.get('/', (req, res) =>{
    console.log ('peticiones recibidas')

    res.send('<h1>hola mundo con nodemon conmigo hernán</h1>')
})
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log ('servidor escuchando')
})