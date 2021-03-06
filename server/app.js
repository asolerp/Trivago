require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const CronJob = require("cron").CronJob;
const rssWine = require("./public/javascripts/rssWineUpdate");
const imagesAPI = require('./public/javascripts/imagesAPI')
const config = require('config');
const morgan = require('morgan');

// Node Job to get every day the list of wines

new CronJob(
  "* * */23 * * *",
  function() {
    rssWine.getListOfWines();
    // imagesAPI.getImagesOfWine();
  },
  null,
  true
);

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [`http://localhost:3000`]
  })
);

if(config.util.getEnv('NODE_ENV') !== 'test') {
  //use morgan to log at command line
  app.use(morgan('combined')); 
}

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Trivago";

const index = require("./routes/index");
app.use("/", index);

module.exports = app;
