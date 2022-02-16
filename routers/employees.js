'use strict'

const { EmployeesController } = require('../controllers')

const express = require('express')
const router = express.Router()
const employeesController = new EmployeesController()

router
  .route('/')
  .get(employeesController.findAll)
  .post(employeesController.create)

router
  .route('/:id')
  .get(employeesController.findOne)
  .patch(employeesController.update)
  .delete(employeesController.delete)

module.exports = {
  loginController: employeesController.login,
  employeesChildRouter: router
}
