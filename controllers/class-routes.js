const router = require('express').Router();
//hardcoded data to render dynamically
const classes = [
  {
    class_name: 'Strength Fitness',
    description: 'set of exercises to strenghen your core',
  },
  {
    class_name: 'Yoga',
    description:
      'Relax, concentrate',
  },
  {
    class_name: 'Cardio',
    description:
      'dance your heart out',
  },
  {
    class_name: 'Spin',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
  },
  {
    class_name: 'crossFit',
    description:
      'mix of everything',
  },
  {
    class_name: 'swimming',
    description:
      'pool party',
  },
  
];

//get all classes
router.get('/classes', async (req, res) => {
  res.render('all'); 
});

//get one class


// TODO: Add a route called `/dish/:num` below
// router.get('/dish/:num', (req, res) => {

//   return res.render('dish', dishes[req.params.num - 1]);
// })


router.get('/classList', (req, res) => {
  
  
  return res.render('classList', {
    classes: classes
  }); 
 
});

module.exports = router;
