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
      type: DataTypes.TEXT,
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