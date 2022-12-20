const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activity extends Model {}

Activity.init(
  {
   
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);

module.exports = Activity;
