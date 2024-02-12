import  express  from 'express';
import {test, register, login, update, deleteU} from './animals.controller.js';

const api = express.Router(); 

// routes/animalRoutes.js
//const animal = require('../models/Animal');

api.get('./test', test)
api.put('/update/:id', update)

export default api
