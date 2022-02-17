'use strict'

const Price = require('../models').prices

class PriceController {

  findAll (req, res, next) {
    Price.findAll()
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Price.findOne({ where: { id: req.params.id } })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    Price.create(req.body)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Price.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Price.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = PriceController