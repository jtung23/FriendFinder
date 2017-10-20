var path = require('path');

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};


// var express = require("express");
// var router = express.Router();

// router.get("/survey", function(req, res) {
// 	console.log('survey get');
// 	res.sendFile(path.join(__dirname, "/../public/survey.html"));
// });

// // If no matching route is found default to home
// router.use(function(req, res) {
// 	console.log('use default home');
// 	res.sendFile(path.join(__dirname, "/../public/home.html"));
// });

// module.exports = router;