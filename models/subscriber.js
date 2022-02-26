"use strict";

module.exports = (sequelize, DataTypes) => {
  const subscriber = sequelize.define(
    "subscribers",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      direction: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(8),
        allowNull: false
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: 'clientId',
        primaryKey: true
      },
    },
    {
      tableName: "subscribers",
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  );

  return subscriber;
};
