'use strict'

const Places = require('../models').places

class PlacesController {

  findAll (req, res, next) {
    Places.findAll()
      .then(places => {
        res.json(places)
      })
      .catch(err => next(err))
  }

  findByState (req, res, next) {
    const state = req.params.state
    console.log(state);

    Places.findOne({ where: { state } })
      .then(places => {
        res.json(places)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Places.findOne({ where: { id: req.params.id } })
      .then(places => {
        res.json(places)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    Places.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const state = req.body.state

    Places.update({ state }, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }
}

module.exports = PlacesController