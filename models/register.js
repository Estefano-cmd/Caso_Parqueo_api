"use strict";

module.exports = (sequelize, DataTypes) => {
  const subscription = sequelize.define(
    "registers",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      dateEntry: DataTypes.DATE,
      dateExit: DataTypes.DATE,
      place: DataTypes.STRING,
      total: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      priceId: {
        type: DataTypes.INTEGER,
        field: 'priceId',
        primaryKey: true
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: 'clientId',
        primaryKey: true
      },
      employeId: {
        type: DataTypes.INTEGER,
        field: 'employeId',
        primaryKey: true
      }
    },
    {
      tableName: "registers"
    }
  );

  return subscription;
};