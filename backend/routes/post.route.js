const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/posts.controller');


router.get('/', (req, res, next) => {
  if(req.query.search){
    PostsController.searchPosts(req.query, (err, posts) => {
      if(err){
        throw err;
      }
      res.json(posts);
    });
  }else{
    PostsController.getPosts(req.query, (err, posts) => {
      if(err){
        throw err;
      }
      res.json(posts);
    });
  }

});

router.post('/', (req, res, next) => {
  PostsController.create({
    title: req.query.title,
    user: req.query.user,
    time: req.query.time,
    url: req.query.url
  });
});

module.exports = router;
