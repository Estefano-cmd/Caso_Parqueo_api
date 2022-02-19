'use strict'

const bcrypt = require('bcryptjs')
const saltRounds = 10
const Employees = require('../models').employees

class EmployeesController {
  findAll (req, res, next) {
    Employees.findAll()
      .then(Employeess => {
        for (const Employees of Employeess) {
          delete Employees.dataValues.password
        }
        res.json(Employeess)
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Employees.findOne({ where: { id: req.params.id } })
      .then(Employees => {
        delete Employees.dataValues.password
        res.json(Employees)
      })
      .catch(err => next(err))
  }

  login (req, res, next) {
    const error = {
      name: 'Authentication Error.',
      message: 'El usuario/contraseña es incorrecto!'
    }
    const body = req.body
    Employees.findOne({ where: { login: body.login } })
      .then(Employees => {
        if (!Employees) {
          return res.status(400).json(error)
        }
        bcrypt.compare(body.password, Employees.password)
          .then((result) => {
            if (result) {
              delete Employees.dataValues.password
              res.json(Employees)
            } else {
              return res.status(400).json(error)
            }
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  create (req, res, next) {
    let body = null
    let salt = null
    let password = null
    body = req.body
    salt = bcrypt.genSaltSync(saltRounds)
    password = bcrypt.hashSync(body.password, salt)

    body.password = password
    body.roles = body.roles || JSON.stringify(['role1'])
    body.enabled = true
    Employees.create(body)
      .then((data) => res.status(201).json(data))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Employees.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Employees.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = EmployeesController
