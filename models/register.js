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
      dateExit: {
        type: DataTypes.DATE,
        allowNull: true
      },
      place: DataTypes.STRING,
      total: {
        type: DataTypes.FLOAT,
        allowNull: true
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
      createdAt: false,
      updatedAt: false,
      tableName: "registers"
    }
  );

  return subscription;
};