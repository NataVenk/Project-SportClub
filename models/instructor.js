const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instructor extends Model {}

Instructor.init(
  {
   
    instructor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    specialty: {
      type: DataTypes.STRING,
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
    modelName: 'instructor',
  }
);

module.exports = Instructor;