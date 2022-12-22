const router = require('express').Router();
const { Instructor, Activity, MemberActivity, Member } = require('../models');
const withAuth = require('../utils/auth');

router.get('/test', (req, res) => {
    res.send('working',
    {logged_in: req.session.logged_in});
})

//routing to homepage
router.get ('/', async (req,res)=> {
    res.render('index', {
        logged_in: req.session.logged_in
    });
})

//routing to About us
router.get('/about-us', (req, res) => {
    res.render('page2-aboutus', {
        logged_in: req.session.logged_in
    });
});


//routing to contact us page
router.get('/contact-us', (req, res) => {
    res.render('page5-contactus',{
        logged_in: req.session.logged_in});
})

//routing to instructors
router.get('/instrList', async (req, res) => {
    const instructorResults = await Instructor.findAll({

    })
    const instructors = instructorResults.map(value => value.get({ plain: true }))
    return res.render('instrList', {
        instructors: instructors,
        logged_in: req.session.logged_in
    });
});
//routing to all activities
router.get('/activlist', async (req, res) => {
    const activityResults = await Activity.findAll({
include: "instructor"
    })
    const activities = activityResults.map(value => value.get({ plain: true }))
    console.log(activities)
    return res.render('activity', {
        activities,
        logged_in: req.session.logged_in
    });
});

//routing to existing member activity
router.get('/youractivity', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const memberData = await Member.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [
          {
            model: Activity,
            through: MemberActivity, 
          }
        ],
      });
      console.log("============")
    
      const user = memberData.get({ plain: true });
      console.log(JSON.stringify(user, null, 2))
      res.render('youractivity', {
        user,
        logged_in: true
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//   // Use withAuth middleware to prevent access to route
// router.get('/youractivity', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const memberData = await MemberActivity.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//routing to member interest selection page

  router.get('/member-interest', withAuth, async (req, res) => {
  
try {
    // Find the logged in user based on the session ID
    const memberData = await Member.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: {model:Activity, through: MemberActivity},
    });
    console.log("============")
  

    const user = memberData.get({ plain: true });
console.log(user)
    res.render('member-interest', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
 

// router.get('/member-interest', withAuth, async (req, res) => {
//     try {
// const memberfav = activityResults.map(value => value.get({ plain: true }))

//       const memberData = await Member.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: {model:Activity, through: MemberActivity},
//       });


// router.get('/memberlist', (req, res) => {
//         Member.find({ include: { model: Activity, through: MemberActivity } })
//           .then(members => {
//             res.json(members)
//           })
//       });


//routing to login/signup page
router.get('/login', (req, res) => {
    console.log("AM I LOGGED IN??", req.session.logged_in)
    if(req.session.logged_in){
        res.redirect('/')
        return
    }
    res.render('login');
});


module.exports = router;

