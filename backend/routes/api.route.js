const express = require('express');
const router = express.Router();
const postRoutes = require('./post.route');

router.get('/', (req, res) => {
  res.send('API');
});

router.use('/posts', postRoutes);


module.exports = router;
