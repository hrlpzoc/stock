const { Console } = require('console');
const express = require ('express')
const mongoose = require('mongoose');
const { restart } = require('nodemon');
const path =require('path')
require('dotenv').config()

const app = express()

mongoose 
    .connect(
        'mongodb+srv://hernas:hernas2005@development.2xqf1jr.mongodb.net/stock-app?retryWrites=true&w=majority)' 
    )
    .then (result =>{
        app.listen(PORT, () => {
            console.log ('servidor escuchando en el puerto', PORT)  
            //se ejecuta cuando el servidor esta escuchando en el puerto'
        })
    })
    .then(result => (console.log('conectado a la base de datos')))
    .catch(err => console.log(err))

    const productSchemas = new mongoose.Schema({
        name: { type: String, required: true }, 
        //price: { type: Number, required: true },
        price: Number, 

    },
    {timestamps: true}
    )

    const Product = mongoose.model('Product', productSchemas)
    
    //app.get('/api/v1/products', (req, res) => {});
    
    app.use(express.json())
    

    app.post('/api/v1/products', async (req, res, next) => {
        //
        const newProduct = new Product(req.body)
        
        //guarda en la base de datos
        await newProduct.save()   
        
        .then(result => {res.status(201).json({ message: 'petición recibida' })})
        .catch(err => console.log(err)) 
    } ) 

    app.use(express.static(path.join(__dirname, 'public')))


    const PORT = process.env.PORT || 4000
