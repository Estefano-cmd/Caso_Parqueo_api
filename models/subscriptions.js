"use strict";

module.exports = (sequelize, DataTypes) => {
  const subscription = sequelize.define(
    "subscriptions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      dateBegin: DataTypes.DATE,
      dateFinish: DataTypes.DATE,
      subscriberId: {
        type: DataTypes.INTEGER,
        field: 'subscriberId',
        primaryKey: true
      },
      subscriberTypeId: {
        type: DataTypes.INTEGER,
        field: 'subscriberTypeId',
        primaryKey: true
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      tableName: "subscriptions"
    }
  );

  return subscription;
};
