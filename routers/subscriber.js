'use strict'

const { SubscriberController } = require('../controllers')

const express = require('express')
const router = express.Router()
const subscriberController = new SubscriberController()

router
  .route('/')
  .get(subscriberController.findAll)
  .post(subscriberController.create)

router
  .route('/:id')
  .get(subscriberController.findOne)
  .patch(subscriberController.update)
  .delete(subscriberController.delete)

module.exports = {
  subscriberChildRouter: router
}