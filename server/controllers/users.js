var mongoose = require('mongoose'),
	passport = require('passport')
	User = require('../models/User.js')
	users = {}

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

users.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();

  user.username = req.body.username;
  user.email = req.body.email;

  user.setPassword(req.body.password);


  user.save(function(err) {
    var token;

    if(err) {
      console.log(err);
      console.log('error!')
    } else {
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });

    }

  });
};

users.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }
  console.log('before authentication in passport')
  console.log('hereee!')

  passport.authenticate('local', function(err, user, info){
    var token;
    console.log('before the err catch')

    // If Passport throws/catches an error
    if (err) {
      console.log('there is an error!')
      res.status(404).json(err);
      return;
    }

    console.log('found user')
    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      console.log('not found')
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};

module.exports = users;