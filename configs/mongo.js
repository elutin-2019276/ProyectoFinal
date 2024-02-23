//Configuración de MongoDB

'use strict'

import mongoose, { mongo } from 'mongoose'

export const connect = async()=>{
    try{
        mongoose.connection.on('error', ()=>{
            console.log('MongoDB | could not be connect to mongodb')
            mongoose.disconnect()
        })

        mongoose.connection.on('connecting', ()=> console.log('MongoDB | try connecting'))
        mongoose.connection.on('connected', ()=> console.log('MongoDB | Connected to mongodb'))
        mongoose.connection.on('open', ()=> console.log('MongoDB | Connect to database'))
        mongoose.connection.on('reconnected', ()=> console.log('MongoDB | Reconnected to mongodb'))
    
        return await mongoose.connect('mongodb://127.0.0.1:27017/ProyectoFinal')
    
    }catch(err){
        console.error('Database connection failes', err)
    }
}