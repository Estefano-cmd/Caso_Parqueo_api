"use strict";

module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define(
    "clients",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surnames: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
      }
    },
    {
      tableName: "clients",
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      }
    }
  );

  return client;
};