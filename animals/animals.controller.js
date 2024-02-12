'use strict'

import animals from './animals.model.js'
import { encrypt, checkPassword, checkUpdate } from '../src/utils/validator.js' 
import { update } from '../src/user/user.controller.js';


// routes/animalRoutes.js
const Animal = require('../models/Animal');

export const test = (req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const register = async(req, res)=>{
    try{
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'ADMIN'
        let user = new animals(data)
        await user.save()
        return res.send({message: `Registered successfully, can be logged with username ${user.username}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error registering animals', err: err})
    }
}

export const update = async(req,res)=>{
    try{
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have submitted some data that connot be update or missing data'})
        let updateanimals = await animals.findOneAndUpdate(
            { _id: id },
            data,
            {new: true}
        )
        if(!updateanimals) return res.status(401).send({message: 'animal not found and not update'})
        return res.send({message: 'Update user' , updateanimals})
    }catch(err){
        console.error(err)
        if(err.keyValue.username)return res.status(400).send({message: `Username ${err.keyValue.username} is alredy taken`})
        return res.status(500).send({message: 'Error updating account'})
    }
}


// Eliminar un Animal
export const deleteu = ('/animals/:id', async (req, res) => {
    try {
      const animal = await Animal.findByIdAndDelete(req.params.id);
      if (!animal) {
        return res.status(404).send({ error: 'Animal no encontrado' });
      }
      res.send(animal);
    } catch (error) {
      res.status(500).send({ error: 'Error al eliminar el animal' });
    }
});

