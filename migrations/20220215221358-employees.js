'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'employees',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        fullname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        avatar: {
          type: Sequelize.BLOB('medium'),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        direction: {
          type: Sequelize.STRING,
          allowNull: false
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        enabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        roles: {
          type: Sequelize.TEXT,
          allowNull: false
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
    return queryInterface.dropTable('employees')
  }
}
