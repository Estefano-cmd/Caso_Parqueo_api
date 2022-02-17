'use strict'

const { SubscriptionController } = require('../controllers')

const express = require('express')
const router = express.Router()
const subscriptionController = new SubscriptionController()

router
  .route('/')
  .get(subscriptionController.findAll)
  .post(subscriptionController.create)

router
  .route('/:id')
  .get(subscriptionController.findOne)
  .patch(subscriptionController.update)
  .delete(subscriptionController.delete)

module.exports = {
  subscriptionChildRouter: router
}