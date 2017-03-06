'use strict';
module.exports = function(sequelize, DataTypes) {
  var laptop = sequelize.define('laptop', {
    merek: DataTypes.STRING,
    harga: DataTypes.STRING,
    coba : DataTypes.STRING,

  }, {
    classMethods: {
      associate: function(models) {
        laptop.belongsTo(models.karyawan,{foreignKey: 'karyawan',targetKey: 'coba'});
      }
    }
  });
  return laptop;
};