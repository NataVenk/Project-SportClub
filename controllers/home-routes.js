const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('working');
})

router.get('/contact-us', (req, res) => {
    res.render('page5-contactus');
})

module.exports = router;