'use strict'

const { PlacesController } = require('../controllers')

const express = require('express')
const router = express.Router()
const placesController = new PlacesController()

router
  .route('/')
  .get(placesController.findAll)
  .post(placesController.create)

router
  .route('/name/:name')
  .get(placesController.findOneByName)

router
  .route('/state/:state')
  .get(placesController.findByState)

router
  .route('/:id')
  .get(placesController.findOne)
  .patch(placesController.update)


module.exports = {
  placesChildRouter: router
}