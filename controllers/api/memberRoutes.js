const router = require('express').Router();
const { Member, MemberActivity, Activity } = require('../../models');



router.post('/', async (req, res) => {
  try {
    const userData = await Member.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Member.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post("/activity", (req, res)=>{
  if (!req.session.logged_in) {res.status(400).json("you need to be logged in")}
MemberActivity.destroy({where:{member_id:req.session.user_id}})
.then (()=>{
  const array = req.body.activities.map(activity =>{
    return {
      member_id: req.session.user_id,
      activity_id: activity
    }
  })
  return MemberActivity.bulkCreate(array)
}).then(memberActs => {
  res.status(200).json("new activities updated")
})
.catch(err => {
  res.status(500).json(err)
})
})


router.put('/', (req, res)=>{
  if (!req.session.logged_in) {res.status(400).json("you need to be logged in")}
   Member.update(req.body,{
    where:{id:req.session.user_id}
  })
  .then (member => {res.status(200).json(member)})
  .catch (err=>res.status(500).json(err))
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).json("You are now logged out");
    });
  } else {
    res.status(404).end();
  }
});

router.get('/fun',(req,res)=> {
  Member.findAll({include: {model:Activity, through: MemberActivity}})
  .then(members => {
    res.json(members)
  })
})

module.exports = router;
