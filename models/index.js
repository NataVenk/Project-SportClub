const Member = require ('./member')
const Activity = require('./activity');
const Instructor = require('./instructor');
// const MemberActivity = require('./member-activities');

// Member.hasMany(Activity, {
//   through: MemberActivity, 
//   foreignKey: 'member_id',
  
// });

// Activity.hasMany(Member, {
//   through: MemberActivity, 
//   foreignKey: 'activity_id'
// });

Activity.belongsTo(Instructor, {
    foreignKey: 'instructor_id'
  });


module.exports = {Member, Activity, Instructor};