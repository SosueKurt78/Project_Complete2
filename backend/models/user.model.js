import {Schema, model} from 'mongoose'

const Productoesquema = new mongoose.Schema({
    nombre: {
        type: String
    },
    Costo: {
        type: float
    }
})

const Clientesquema = new mongoose.Schema({
    nombre: {
        type: String
    },
    Idcliente: int 
})

const Estatusesquema = new mongoose.Schema({
    Fecha: {
        type: Date
    },
    Estatus: {
        type: String
    }
})

export const ProductoModelo = new model ((Producto),Productoesquema)
export const ClientesModel = new model((Cliente), Clientesquema)
export const EstatusModelo = new model((Estatus), Estatusesquema)
