import {modelo} from '../models/user.model'

export const test = () => 
{
    console.log('si funciona la suncion entre el controlador y el proyecto')
}

ProductoModelo.create({
    nombre: 'Bocina',
    Costo: 4.5
})

ClienteModelo.create({
    nombre: 'Juan Pérez',
    Idcliente: 12345
})

EstatusModelo.create({
    Fecha: new Date(),
    Estatus: 'Enviado'
})
