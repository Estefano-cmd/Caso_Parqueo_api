'use strict'

const { SubscriptionTypeController } = require('../controllers')

const express = require('express')
const router = express.Router()
const subscriptionTypeController = new SubscriptionTypeController()

router
  .route('/')
  .get(subscriptionTypeController.findAll)
  .post(subscriptionTypeController.create)

router
  .route('/:id')
  .get(subscriptionTypeController.findOne)
  .patch(subscriptionTypeController.update)
  .delete(subscriptionTypeController.delete)

module.exports = {
  subscriptionTypeChildRouter: router
}