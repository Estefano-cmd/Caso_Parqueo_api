'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'registers',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        dateEntry: Sequelize.DATE,
        dateExit: {
          type: Sequelize.DATE,
          allowNull: true
        },
        total: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        enabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        placeId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "places",
            key: "id"
          }
        },
        priceId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "prices",
            key: "id"
          }
        },
        clientId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "clients",
            key: "id"
          }
        },
        employeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "employees",
            key: "id"
          }
        },
      },
      {
        engine: 'InnoDB',
        charset: 'latin1'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('registers')
  }
};
