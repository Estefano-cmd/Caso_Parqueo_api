'use strict'

const { employeesChildRouter, loginController } = require('./employees')
const { clientChildRouter } = require('./client')
const { vehicleChildRouter } = require('./vehicle')
const { subscriberChildRouter } = require('./subscriber')
const { priceChildRouter } = require('./price')
const { subscriptionChildRouter } = require('./subscription')
const { subscriptionTypeChildRouter } = require('./subscriptionType')
const { registerChildRouter } = require('./register')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)
router.use('/employees', employeesChildRouter)
router.use('/client', clientChildRouter)
router.use('/vehicle', vehicleChildRouter)
router.use('/subscriber', subscriberChildRouter)
router.use('/price', priceChildRouter)
router.use('/subscription', subscriptionChildRouter)
router.use('/subscriptionType', subscriptionTypeChildRouter)
router.use('/register', registerChildRouter)

module.exports = router
