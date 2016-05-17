//require login controller
//require Posts controller
//require comments controller
var express = require('express'),
  routes = express.Router(),
  passport = require('passport'),
  jwt = require('express-jwt'),
  auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
  }),
  users = require('../Controllers/users.js')
  posts = require('../Controllers/posts.js')
  // comments = require('../controllers/comments.js'),

routes.post('/register', function(req, res) {
  users.register(req, res);
});

routes.post('/login', function(req, res) {
  users.login(req, res)
});

routes.post('/isLoggedIn', function(req, res) {
  users.isLoggedIn(req, res);
})

routes.get('/logout', function(req, res){
  users.logout(req, res);
})

//Testing Client makes API call to backend
routes.get('/testData'), function(req, res){
  posts.findTest(req, res)
}

//Get All Posts
routes.get('/getPosts', function(req, res){
  posts.show(req, res);
})

//Get Single Post
routes.get('/getSinglePost/:id', function(req, res) {
  posts.getSinglePost(req, res)
})

//Add Post
routes.post('/addPost', function(req, res){
  posts.create(req, res);
})
//Get Comments
routes.get('/getComments/:id', function(req, res) {
  comments.show(req, res);
})

routes.post('/addComment/:id', function(req, res){
  comments.create(req, res);
})



module.exports = routes;