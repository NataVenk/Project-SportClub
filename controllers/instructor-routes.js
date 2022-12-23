const router = require('express').Router();

router.get('/instrList', (req, res) => {

  return res.render('instrList', {
    instructors: instructors
  });

});

module.exports = router;
