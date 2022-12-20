const router = require('express').Router();
const {Instructor} = require('../models')

router.get('/test', (req, res) => {
    res.send('working');
})

router.get('/contact-us', (req, res) => {
    res.render('page5-contactus');
})
router.get('/instrList', async(req, res) => {
  const instructorResults = await Instructor.findAll({

  })
  const instructors = instructorResults.map(value => value.get({plain:true}))
    return res.render('instrList', {
      instructors: instructors
    }); 
   
  });
module.exports = router;