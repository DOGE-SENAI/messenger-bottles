module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      img: DataTypes.STRING
    });
  
    User.associate = (models) => {
      User.hasMany(models.Message,
        { foreignKey: 'user_id', as: 'messages'})
    }

    return User;
  }