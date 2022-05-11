module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      text: DataTypes.TEXT('long'),
      //userId: DataTypes.INTEGER,
      time: DataTypes.DATE,
    }, {
      timestamps: false,
    });
    Message.associate = (models) => {
      Message.belongsTo(models.User,
        { foreignKey: 'user_id', as: 'users'})
    }
  
    return Message;
  }