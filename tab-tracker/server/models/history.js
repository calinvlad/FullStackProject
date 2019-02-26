'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {});
  History.associate = function(models) {
    // associations can be defined here
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  };
  return History;
};