const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const activityRoutes = require('./activity-routes');
const seedDatabase = require('../../seeds/seeds');

router.use('/members', memberRoutes);
router.use('/activity-routes', activityRoutes);

router.post('/seedDatabase', (req, res) => {
  seedDatabase(function () {
    res.json({
      message: "completed seed"
    })
  });
});

module.exports = router;