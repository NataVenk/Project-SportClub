const router = require('express').Router();
//hardcoded data to render dynamically

//get all classes
router.get('/activity', async (req, res) => {
  res.render('all'); 
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
