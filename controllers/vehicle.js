'use strict'

const Vehicle = require('../models').vehicles

class VehicleController {
  findAll (req, res, next) {
    Vehicle.findAll()
      .then(vehicles => {
        res.json(vehicles)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Vehicle.findOne({ where: { id: req.params.id } })
      .then(vehicles => {
        res.json(vehicles)
      })
      .catch(err => next(err))
  }

  findOneByLicensePlate (req, res, next) {
    const licensePlate = req.params.licensePlate;
   
    Vehicle.findOne({ where: { licensePlate } })
      .then(vehicles => {
        res.json(vehicles)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    Vehicle.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Vehicle.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Vehicle.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = VehicleController