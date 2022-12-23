// variable declaration to seed the database
const seedDatabase = require("./seeds");

seedDatabase(function () {
  process.exit(0);
});