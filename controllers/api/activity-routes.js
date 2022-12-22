const router = require('express').Router();
const { Member, MemberActivity, Activity } = require('../../models');

// create new member activities
router.post('/newMemberActivities', async (req, res) => {
  try {
    console.log(req.session.user_id);
    console.log(req.body);
    await MemberActivity.destroy({ where: { member_id: req.session.user_id } });
    for(const activityId of req.body.activityIds) {
      const member_id = req.session.user_id;
      await MemberActivity.create({
        member_id: member_id,
        activity_id: activityId
      })
    };

    res.json("Good");

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// //get all classes
// router.get('/activity', async (req, res) => {
//   res.render('all'); 
// });



// router.post('/member-interest', async (req, res) => {
//   try {
//     const memberFav = await MemberActivity.create({
//       activity_id: req.body.activity_id,
//       activity_name: req.body.activity_name,
//       description: req.body.description,
//       instructor_id: req.body.instructor,
//       day1: req.body.day1
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(memberFav);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
//get one class


// TODO: Add a route called `/dish/:num` below
// router.get('/dish/:num', (req, res) => {

//   return res.render('dish', dishes[req.params.num - 1]);
// })


// router.get('/activlist', (req, res) => {
  
  
//   return res.render('activelist', {
//     activities: activities
//   }); 
 
// });

module.exports = router;
