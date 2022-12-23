const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instructor extends Model { }

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
    monday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    friday: {
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