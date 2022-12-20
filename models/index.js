const Member = require ('./member')
const Activity = require('./activity');
const Instructor = require('./instructor');

Member.hasMany(Activity, {
  foreignKey: 'member_id',
  onDelete: 'CASCADE'
});

Activity.hasMany(Member, {
  foreignKey: 'member_id'
});

Activity.belongsTo(Instructor, {
    foreignKey: 'instructor_id'
  });


module.exports = {Member, Activity, Instructor};