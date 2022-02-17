'use strict'

const { employeesChildRouter, loginController } = require('./employees')
const { clientChildRouter } = require('./client')
const { vehicleChildRouter } = require('./vehicle')
const { subscriberChildRouter } = require('./subscriber')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)
router.use('/employees', employeesChildRouter)
router.use('/client', clientChildRouter)
router.use('/vehicle', vehicleChildRouter)
router.use('/subscriber', subscriberChildRouter)

module.exports = router
