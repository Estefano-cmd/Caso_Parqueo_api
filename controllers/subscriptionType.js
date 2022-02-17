'use strict'

const SubscriptionType = require('../models').subscriptionTypes

class SubscriptionTypeController {

  findAll (req, res, next) {
    SubscriptionType.findAll()
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    SubscriptionType.findOne({ where: { id: req.params.id } })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    SubscriptionType.create(req.body)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    SubscriptionType.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    SubscriptionType.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = SubscriptionTypeController