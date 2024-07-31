import mongoose from "mongoose" 
import express from "express"
import cors from "cors"
import dotenv from "dotenv" 
import {test} from './backend/controllers/user.controller'
dotenv.config(); 

mongoose.connect(urlDB)

.then (()=>{
    console.log('Funciona mi conexion a base de datos')
})
.catch((err) => {
    console.error('No funciona mi conexión a base de datos', err)
})

const app = express()
app.use(cors())

app.listen(4000, ()=>{
    console.log ('Funciona mi servidor local')
})

test()
