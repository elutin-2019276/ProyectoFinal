'use strict'

import jwt from 'jsonwebtoken'
import User from '../src/user/user.model.js'

export const validateJwt = async(req, res, next)=>{
    try{
        //Obtener la llave de acceso al token
        let secretKey = process.env.SECRET_KEY
        //Obtener el token de los headers
        let { token } = req.headers
        //Verificar si viene el token
        if(!token) return res.status(401).send({message: 'Unauthorized'})
        //Obtener el uid que envio el token
        let { uid } = jwt.verify(token, secretKey)
        //Validar si el usuario aun existe en la BD
        let user = await User.findOne({_id: uid})
        if(!user) return res.status(404).send({message: 'User not found - Unauthorized'})
        req.user = user
        console.log(user)
        next()
    }catch(err){
        console.error(err)
        return res.status(401).send({message: 'Invalid token or expired '})
    }
}

export const isAdmin = async(req, res, next)=>{
    try{
        let {role, username} = req.user
        if(!role || role !== 'ADMIN') return res.status(403).send({message: `You do not have access | username ${username}`})
        next()
    }catch(err){
        console.error(err)
        return res.status(400).send({message: 'Unauthorized role'})
    }
}