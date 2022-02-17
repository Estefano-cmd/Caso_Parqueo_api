'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'clients',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        surnames: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        enabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients')
  }
}