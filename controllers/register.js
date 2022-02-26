"use strict";

const Register = require("../models").registers;
const Client = require("../models").clients;
const Price = require("../models").prices;
const Place = require("../models").places;
const Employees = require("../models").employees;

class RegisterController {
  findAll(req, res, next) {
    Register.findAll({
      include: [
        { model: Client },
        { model: Price },
        { model: Employees },
        { model: Place }
      ],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => next(err));
  }

  findOne(req, res, next) {
    Register.findOne({
      where: { id: req.params.id },
      include: [
        { model: Client },
        { model: Price },
        { model: Employees },
        { model: Place }
      ],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => next(err));
  }

  findOneByClientId(req, res, next) {
    Register.findOne({ 
      where: { clientId: req.params.id, dateExit: null },
      include: [
        { model: Client },
        { model: Price },
        { model: Employees },
        { model: Place }
      ]
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => next(err));
  }

  findOneByPlaceId(req, res, next) {
    Register.findOne({
      include: [{ model: Client }],
      where: {
        placeId: req.params.id
      },
      order: [["id", "DESC"]],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => next(err));
  }

  findOneByLicensePlate(req, res, next) {
    const licensePlate = req.params.licensePlate;

    Register.findOne({ where: { licensePlate } })
      .then((vehicles) => {
        res.json(vehicles);
      })
      .catch((err) => next(err));
  }

  create(req, res, next) {
    Register.create(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => next(err));
  }

  update(req, res, next) {
    const body = req.body;
    Register.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch((err) => next(err));
  }

  delete(req, res, next) {
    Register.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch((err) => next(err));
  }
}

module.exports = RegisterController;
