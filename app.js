const express = require ('express')

const app = express()

app.get('/', (req, res) =>{
    console.log ('peticiones recibidas')

    res.send('<h1>hola mundo con nodemon</h1>')
})

app.listen(4000, () => {
    console.log ('servidor escuchando')
})