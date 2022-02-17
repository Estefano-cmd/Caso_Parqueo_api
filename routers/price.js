'use strict'

const { PriceController } = require('../controllers')

const express = require('express')
const router = express.Router()
const priceController = new PriceController()

router
  .route('/')
  .get(priceController.findAll)
  .post(priceController.create)

router
  .route('/:id')
  .get(priceController.findOne)
  .patch(priceController.update)
  .delete(priceController.delete)

module.exports = {
  priceChildRouter: router
}