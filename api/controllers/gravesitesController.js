const Gravesite = require('../models/gravesitesModel')
const mongoose = require('mongoose')

// GET all gravesites 
const getSites = async (req, res) => {
  const sites = await Gravesite.find({})

  res.status(200).json(sites)
}

// GET a single gravesite 
const getOneSite = async (req, res) => {
  const { id } = req.params 

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'vet not found'})
  }

  const site = await Gravesite.findById(id)

  if(!site) {
    return res.status(404).json({error: 'gravesite not found'})
  }

  res.status(200).json(site)
}

module.exports = {
  getSites,
  getOneSite
}