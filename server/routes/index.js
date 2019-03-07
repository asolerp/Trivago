const express = require("express");
const router = express.Router();

const Parser = require("rss-parser");
const parser = new Parser();

/* GET home page */
router.get("/", (req, res, next) => {});

router.get("/wines", (req, res, next) => {
  parser.parseURL("https://www.winespectator.com/rss/rss?t=dwp").then(feed => {
    feed.items.forEach(item => {
      console.log(item.categories);
    });
  });

  // console.log("todo ok!")
  // res.status(200).json({message: "todo ok!"})
});

module.exports = router;
