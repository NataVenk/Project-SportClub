const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Member extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Member.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
        hooks: {
          beforeCreate: async (newMemberData) => {
            newMemberData.password = await bcrypt.hash(newMemberData.password, 10);
            return newMemberData;
          },
          beforeUpdate: async (updatedMemberData) => {
            updatedMemberData.password = await bcrypt.hash(updatedMemberData.password, 10);
            return updatedMemberData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'member',
      }
    );
    
    module.exports = Member;
    