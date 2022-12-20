const router = require('express').Router();
//hardcoded data to render dynamically
const instructors = [
  {
    instructor_name: 'Matt',
    specialty: 'crossFit',
  },
  {
    instructor_name: 'Muchir',
    specialty:
      'yoga',
  },
  {
    instructor_name: 'Paul',
    specialty:
      'spin',
  },
  {
    instructor_name: 'Natalia',
    specialty:
      'cardio',
  },
  
];

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
