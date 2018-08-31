const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const config = require('./config/database');
const Seeds = require('./config/seeds');
const pretty = require('express-prettify');


const app = express();
const API = require('./routes/api.route');
const Posts = require('./routes/post.route');
const port = process.env.Port || 3000;


// Database connection
mongoose.connect(config.database, { useNewUrlParser: true });

mongoose.connection.on('connected', (err) => {
  console.log('Connected to database' + config.database);
  if(err){
    throw err;
  }

  mongoose.connection.db.collection('posts').countDocuments((error, count) => {
    console.log(count);
    if(count === 0){
      Seeds.seedPosts();
    }else if(error){
      throw error;
    }
  });
});

// Cors Middleware
app.use(cors());

// Static Folder for Angular
app.use(express.static(path.join(__dirname, '/dist')));

// Body Parser
app.use(bodyParser.json());
app.use(pretty({ query: 'pretty'}));

// Landing Route for news feed
app.get('/', (req, res) => {
  res.send('Use api routes.');
});

app.use('/api', API);

app.listen(port, () => {
  Seeds.seedPosts();
  console.log('Server started on port ' + port);
});
