const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

// Init express
const app = express();

// Connect to mongoDB Atlas
const db = require('./config/keys').MongoURI;
mongoose.connect(db, {useNewUrlParser:true})
    .then(()=>console.log('MongoDB connected...'))
    .catch(err=>console.error(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/',require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

// Listen port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
