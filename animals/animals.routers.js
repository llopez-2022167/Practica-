import  express  from 'express';
import {test, register, update, deleteu} from './animals.controller.js';

const api = express.Router(); 

// routes/animalRoutes.js
//const animal = require('../models/Animal');

api.get('./test', test)
api.put('/update/:id', update)
api.post('/register', register)
api.delete('/deleteu/id', deleteu)

export default api
