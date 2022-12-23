const Member = require('./member')
const Activity = require('./activity');
const Instructor = require('./instructor');

const MemberActivity = require('./member-activities');

Member.belongsToMany(Activity, {
  through: MemberActivity,
  foreignKey: 'member_id',

});

Activity.belongsToMany(Member, {
  through: MemberActivity,
  foreignKey: 'activity_id'
})

Activity.belongsTo(Instructor, {
  foreignKey: 'instructor_id'
});

Instructor.hasOne(Activity, {
  foreignKey: 'instructor_id'
});

module.exports = { Member, Activity, Instructor, MemberActivity };