'use strict'

import express from 'express'

import {
    validateJwt,
    isAdmin
} from '../../middlewares/validate-jwt.js'

import {
    test,
    register,
    login,
    update,
    deleteU} from './user.controller.js'

const api = express.Router()

//Middleaware

//ROLE ADMIN
api.get('/test', [validateJwt, isAdmin], test)

//Role CLIENT/ADMIN
api.put('/update/:id', [validateJwt, isAdmin], update)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteU)

//PUBLIC
api.post('/register', register)
api.post('/login', login)

export default api

