'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'subscriptions',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        dateBegin: Sequelize.DATE,
        dateFinish: Sequelize.DATE,
        enabled: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        },
        subscriberId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "subscribers",
            key: "id"
          }
        },
        subscriberTypeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "subscriberTypes",
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
    return queryInterface.dropTable('subscriptions')
  }
};
