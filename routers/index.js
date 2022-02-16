'use strict'

const { employeesChildRouter, loginController } = require('./employees')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)
router.use('/employees', employeesChildRouter)

module.exports = router
