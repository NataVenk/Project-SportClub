const router = require('express').Router();
const { Member, MemberActivity, Activity } = require('../../models');

// create new member activities
router.post('/newMemberActivities', async (req, res) => {
  try {
    console.log(req.session.user_id);
    console.log(req.body);
    await MemberActivity.destroy({ where: { member_id: req.session.user_id } });
    for (const activityId of req.body.activityIds) {
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

module.exports = router;
