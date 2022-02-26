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
          type: Sequelize.STRING(50),
          allowNull: false
        },
        avatar: {
          type: Sequelize.BLOB('medium'),
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true
        },
        direction: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        login: {
          type: Sequelize.STRING(10),
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        enabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
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
