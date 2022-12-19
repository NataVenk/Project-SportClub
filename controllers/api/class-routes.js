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
router.get('/', async (req, res) => {
  res.render('all'); // all + main
});

//get one class
router.get('/class/:num', async (req, res) => {
  console.log(classes[req.params.num - 1]);
  
  return res.render('class', classes[req.params.num - 1]); 
 
});

module.exports = router;
