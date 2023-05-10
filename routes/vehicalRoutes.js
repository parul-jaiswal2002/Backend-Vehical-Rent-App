const express = require('express')
const {createVehical,getAllVehical} = require('../controllers/vehicalControllers')
const router = express.Router()

router.get('/', getAllVehical)
router.post('/submit', createVehical)


module.exports = router

