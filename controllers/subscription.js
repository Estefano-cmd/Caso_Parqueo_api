'use strict'

const Subscription = require('../models').subscriptions
const Subscriber = require('../models').subscribers
const SubscriptionType = require('../models').subscriptionTypes
class SubscriptionController {

  findAll (req, res, next) {
    Subscription.findAll({
      include: [
        { model: Subscriber },
        { model: SubscriptionType }
      ],
    })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Subscription.findOne({ where: { subscriberId: req.params.id } })
      .then(data => {
        res.json(data)
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    Subscription.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Subscription.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Subscription.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = SubscriptionController