const router = require('express').Router();
//hardcoded data to render dynamically


//get all instructors
// router.get('/instrList', async (req, res) => {
//   res.render('all'); 
// });


router.get('/instrList', (req, res) => {
  
  return res.render('instrList', {
    instructors: instructors
  }); 
 
});

module.exports = router;
