const express = require('express')
const app = express()
require('dotenv').config();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/whiteboard-01',
//     {useNewUrlParser: true, useUnifiedTopology: true});
const uri = process.env.MONGODB_URI
mongoose.connect(`mongodb+srv://anjun77:cindyanjun0215@anjun77.t2s9u.mongodb.net/whiteboard-01?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  // cookie: {secure: true}
}))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/demo-controller')(app)
require('./controllers/quizzes-controller')(app)
require('./controllers/question-controller')(app)

app.listen(process.env.PORT ||4000)

