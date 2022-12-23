const router = require('express').Router();
//hardcoded data to render dynamically


router.get('/instrList', (req, res) => {
  
  return res.render('instrList', {
    instructors: instructors
  }); 
 
});

module.exports = router;
