const mongoose = require('mongoose');
const config = require('../config/database');


const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: new Date()
  },
  time_ago: {
    type: String
  },
  comments_count: {
    type: Number,
    default: 0
  },
  type: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  domain: {
    type: String
  },
  points: {
    type: Number,
    default: 0
  }
});

const Post = module.exports = mongoose.model('Post', PostSchema);
