const EmployeesController = require('./employees')
const ClientController = require('./client') 
const VehicleController = require('./vehicle')
const SubscriberController = require('./subscriber')
const SubscriptionController = require('./subscription')
const SubscriptionTypeController = require('./subscriptionType')
const PriceController = require('./price')
const RegisterController = require('./register')

module.exports = {
  EmployeesController,
  ClientController,
  VehicleController,
  SubscriberController,
  PriceController,
  SubscriptionController,
  SubscriptionTypeController,
  RegisterController
}
