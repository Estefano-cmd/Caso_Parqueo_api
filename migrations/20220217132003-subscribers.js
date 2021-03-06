'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'subscribers',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        direction: {
          type: Sequelize.STRING(50),
          allowNull: true
        },
        phone: {
          type: Sequelize.STRING(8),
          allowNull: false
        },
        enabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        clientId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "clients",
            key: "id"
          }
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
    return queryInterface.dropTable('subscribers')
  }
};
