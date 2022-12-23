const router = require('express').Router();
const { Member, MemberActivity, Activity } = require('../../models');

// create new member
router.post('/signup', async (req, res) => {
  try {
    const userData = await Member.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login existing member
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

router.put('/', (req, res) => {
  if (!req.session.logged_in) { res.status(400).json("you need to be logged in") }
  Member.update(req.body, {
    where: { id: req.session.member_id }
  })
    .then(member => { res.status(200).json(member) })
    .catch(err => res.status(500).json(err))
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).json("You are now logged out");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
