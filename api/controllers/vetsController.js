const Veteran = require('../models/vetsModel')
const mongoose = require('mongoose')

// GET all vets 
const getVets = async (req, res) => {
  const vets = await Veteran.find({})

  res.status(200).json(vets)
}

// GET a single vet
const getOneVet = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'vet not found'})
  }

  const vet = await Veteran.findById(id)

  if(!vet) {
    return res.status(404).json({error: 'vet not found'})
  }

  res.status(200).json(vet)
}

module.exports = {
  getVets, 
  getOneVet
} 