const Post = require('../models/post.model');

module.exports.getPosts = (params, callback) => {
  let skips = parseInt(params.skip);
  Post.find(callback).sort({ time: -1 }).skip(skips).limit(5);
};

module.exports.searchPosts = (params, callback) => {
  let searchExp = new RegExp(params.search.toLowerCase(), 'i')
;
  let found = Post.find({
    $or: [
      { user: searchExp },
      { title: searchExp },
      { url: searchExp },
    ]
  }, callback);
};

module.exports.create = (postParams, callback) => {
  let newPost = new Post(postParams);
  newPost.save();
};
