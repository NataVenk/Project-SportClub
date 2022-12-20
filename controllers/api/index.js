const router = require('express').Router();
const memberRoutes = require('./memberRoutes');

router.use('/members', memberRoutes);

module.exports = router;