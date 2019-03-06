const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

});

router.get('/', (req, res, next)=> {
  console.log("todo ok!")
  res.status(200).json({message: "todo ok!"})
})

module.exports = router;
