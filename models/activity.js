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
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    day1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    day2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    day3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    day4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

   day5: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
