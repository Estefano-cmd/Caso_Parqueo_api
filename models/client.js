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
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      surnames: {
        type: DataTypes.STRING(30),
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
