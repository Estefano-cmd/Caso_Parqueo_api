'use strict'

const { VehicleController } = require('../controllers')

const express = require('express')
const router = express.Router()
const vehicleController = new VehicleController()

router
  .route('/')
  .get(vehicleController.findAll)
  .post(vehicleController.create)

router
  .route('/licensePlate/:licensePlate')
  .get(vehicleController.findOneByLicensePlate)

router
  .route('/:id')
  .get(vehicleController.findOne)
  .patch(vehicleController.update)
  .delete(vehicleController.delete)

module.exports = {
  vehicleChildRouter: router
}