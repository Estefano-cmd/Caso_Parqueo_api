"use strict";

//const places = require("../routers/places")

module.exports = (sequelize, DataTypes) => {
  const place = sequelize.define(
    "places",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamp: false,
      tableName: "places",
    }
  );

  return place;
};
