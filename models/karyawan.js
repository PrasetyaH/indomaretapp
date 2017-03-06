'use strict';
module.exports = function(sequelize, DataTypes) {
  var karyawan = sequelize.define('karyawan', {
    name: DataTypes.STRING,
    alamat: DataTypes.STRING,
    usia: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
       karyawan.hasMany(models.laptop,{onDelete: 'CASCADE'});
      }
    }
  });
  return karyawan;
};