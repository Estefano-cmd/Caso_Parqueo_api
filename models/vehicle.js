"use strict";

module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define(
    "vehicles",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      licensePlate: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      color: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      model: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      clientId: {
        type: DataTypes.INTEGER,
        field: 'clientId',
        primaryKey: true
      },
    },
    {
      tableName: "vehicles",
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  );

  return client;
};
