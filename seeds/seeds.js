const sequelize = require('../config/connection');
const { Instructor, Member } = require('../models');
const instructorData = require('./instructor.json');
const memberData = require('./memberData.json');


//const userData = require('./userData.json');
//const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const instructors = await Instructor.bulkCreate(instructorData, {
    individualHooks: true,
    returning: true,
  });

  const members = await Member.bulkCreate(memberData, {
    individualHooks: true,
    returning: true,
  });

  /* for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  } */

  process.exit(0);
};

seedDatabase();
