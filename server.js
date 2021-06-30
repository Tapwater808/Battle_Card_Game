const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

// static asset service

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// API Routes

// const GameRoutes = require('./routes/GameAPI);

// app.use(GameRoutes);

// Send requests up to the React app

app.get('/', function(req, res) {
    res.sendFile(path.joint(__dirname, './client/public/index.html'));
});

// Define Mongoose Connection

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/game', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to db!");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});