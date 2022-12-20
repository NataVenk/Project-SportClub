const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MemberActivity extends Model {}

MemberActivity.init(
  {
   
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  
   
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'memberactivity',
  }
);

module.exports = MemberActivity;