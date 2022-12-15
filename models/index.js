const Member = require ('./member')
const Class = require('./class');
const Instructor = require('./instructor');

Member.hasMany(Class, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

Class.hasMany(Member, {
  foreignKey: 'member_id'
});

Class.belongsTo(Intsructor, {
    foreignKey: 'instructor_id'
  });


module.exports = { Member, Class, Instructor};

// matt was here adding a comment.