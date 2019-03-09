const express = require("express");
const router = express.Router();
const Wine = require('../models/Wine')


/* GET home page */
router.get("/", (req, res, next) => {

});

router.get("/wines", (req, res, next) => {
  Wine.find()
  .then(wines => res.status(200).json(wines))
  .catch(err => res.status(500).json({message: "Error fetching wines from the database."}))
});

module.exports = router;
