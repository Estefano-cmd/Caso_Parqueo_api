'use strict'

const Register = require('../models').registers

class RegisterController {
  findAll (req, res, next) {
    Register.findAll()
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Register.findOne({ where: { id: req.params.id } })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOneByLicensePlate (req, res, next) {
    const licensePlate = req.params.licensePlate;
   
    Register.findOne({ where: { licensePlate } })
      .then(vehicles => {
        res.json(vehicles)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    Register.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Register.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Register.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = RegisterController