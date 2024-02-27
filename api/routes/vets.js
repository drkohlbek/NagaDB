const express = require('express') 
const { 
  getVets,
  getOneVet
} = require('../controllers/vetsController')

const router = express.Router() 

// GET all vets
router.get('/', getVets)

// GET a single vet 
router.get('/:id', getOneVet)




module.exports = router