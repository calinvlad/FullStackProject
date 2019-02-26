'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {});
  Bookmark.associate = function(models) {
    // associations can be defined here
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  };
  return Bookmark;
};