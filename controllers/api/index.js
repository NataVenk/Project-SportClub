const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const activityRoutes = require('./activity-routes');

router.use('/members', memberRoutes);
router.use('/activity-routes', activityRoutes);

module.exports = router;