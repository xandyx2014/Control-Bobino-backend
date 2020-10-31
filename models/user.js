'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nombre: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    /* Usuario.hasMany( models.Token, {
      foreignKey: 'usuario_id'
    });
    Token.belongsTo( models.Usuario, {
      foreignKey: 'usuario_id'
    }); */
    User.hasMany(models.CalculoLecheria, {
      foreignKey: 'user_id'
    });
  };
  return User;
};