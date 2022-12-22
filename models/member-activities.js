const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MemberActivity extends Model {}

MemberActivity.init(
  {
   
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'activity',
        key: 'id',
        unique: false,
      },
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'member',
        key: 'id',
        unique: false,
      },
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