const sequelize = require('../config/connection');
const { Instructor, Member, Activity, MemberActivity } = require('../models');
const instructorData = require('./instructor.json');
const memberData = require('./memberData.json');
const activityData = require('./activity.json');
const memberActivities = require('./member-activity.json')

const seedDatabase = async (cb) => {
  await sequelize.sync({ force: true });
  console.log('====================seeding data==================')

  await Instructor.bulkCreate(instructorData, {
    individualHooks: true,
    returning: true,
  });
  console.log('====================instructor seeded data==================')

  await Activity.bulkCreate(activityData, {
    individualHooks: true,
    returning: true,
  });
  console.log('====================activities seeded data==================')
  await Member.bulkCreate(memberData, {
    individualHooks: true,
    returning: true,
  });
  console.log('====================members seeded data==================')
  await MemberActivity.bulkCreate(memberActivities, {
    individualHooks: true,
    returning: true,
  });
  console.log('====================members act data==================')
  cb();
};

module.exports = seedDatabase;
