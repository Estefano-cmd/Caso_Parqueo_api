'use strict'

const { RegisterController } = require('../controllers')

const express = require('express')
const router = express.Router()
const registerController = new RegisterController()

router
  .route('/')
  .get(registerController.findAll)
  .post(registerController.create)

router
  .route('/client/:id')
  .get(registerController.findOneByClientId)

  router
  .route('/place/:id')
  .get(registerController.findOneByPlaceId)

router
  .route('/:id')
  .get(registerController.findOne)
  .patch(registerController.update)
  .delete(registerController.delete)

module.exports = {
  registerChildRouter: router
}