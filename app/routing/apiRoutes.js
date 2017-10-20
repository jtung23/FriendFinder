var friends = require("../data/friends");

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends); 
	});
	app.post('/api/friends', function(req, res) {
		// compare req.body.scores array with each friends[i]
		console.log(req.body);
		var reqScoreArr = req.body.scores
		for (var i = 0; i < friends.length; i++) {
			var friendsArrScore = friends[i].scores;
			friendsArrScore.forEach(function(value, i) {
				let diff = value - reqScoreArr[i];
			})
			console.log(friendsArrScore);
			console.log('friendsarr ' + friendsArrScore[i], ' newObjScore ' + reqScoreArr[i]);
		}
		friends.push(req.body);

	});
};







// var express = require("express");
// var route = express.Router();

// route.get('/api/friends', function(req, res) {
// 	console.log(friends);
// 	res.json(friends);
// });
// route.post('/api/friends', function(req, res) {
// 	console.log('post runs');
// 	console.log(req);
// 	friends.push(req.body);
// })

// module.exports = route;