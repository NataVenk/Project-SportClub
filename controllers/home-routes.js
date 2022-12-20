const router = require('express').Router();
const { Instructor } = require('../models')

router.get('/test', (req, res) => {
    res.send('working');
})

//routing to homepage
router.get ('/', async (req,res)=> {
    res.render('index');
})

//routing to About us
router.get('/aboutus', (req, res) => {
    res.render('page2-aboutus');
});


//routing to contact us page
router.get('/contact-us', (req, res) => {
    res.render('page5-contactus');
})

//routing to instructors
router.get('/instrList', async (req, res) => {
    const instructorResults = await Instructor.findAll({

    })
    const instructors = instructorResults.map(value => value.get({ plain: true }))
    return res.render('instrList', {
        instructors: instructors
    });

});
//routing to all activities
router.get('/activlist', async (req, res) => {
    const activityResults = await Activity.findAll({

    })
    const activities = activityResults.map(value => value.get({ plain: true }))
    return res.render('activlist', {
        activities: activities
    });

});
//routing to login/signup page
router.get('/login', (req, res) => {
    res.render('login');
});


module.exports = router;

