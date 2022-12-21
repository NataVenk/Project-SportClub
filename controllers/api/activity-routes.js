const router = require('express').Router();
const { Member, MemberActivity, Activity } = require('../../models');


//get all classes
router.get('/activity', async (req, res) => {
  res.render('all'); 
});



router.post('/member-interest', async (req, res) => {
  try {
    const memberFav = await MemberActivity.create({
      activity_id: req.body.activity_id,
      activity_name: req.body.activity_name,
      description: req.body.description,
      instructor_id: req.body.instructor,
      day1: req.body.day1
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(memberFav);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//get one class


// TODO: Add a route called `/dish/:num` below
// router.get('/dish/:num', (req, res) => {

//   return res.render('dish', dishes[req.params.num - 1]);
// })


router.get('/activlist', (req, res) => {
  
  
  return res.render('activelist', {
    activities: activities
  }); 
 
});

module.exports = router;
