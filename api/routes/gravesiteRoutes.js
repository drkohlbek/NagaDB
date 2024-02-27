const express = require('express')
const {
  getSites,
  getOneSite
} = require('../controllers/gravesitesController')

const router = express.Router()

// GET all gravesites 
router.get('/', getSites)

// GET a single gravesite 
router.get('/:id', getOneSite)


module.exports = router