const express = require('express');
const mysql = require('mysql2');
const ejs = require('ejs');

const config = require('./config.json');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.listen(3001, function() {
    console.log("Listening on Port 3001...");
});
app.get("/", function (req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT * FROM restaurant LIMIT 5';
    cn.query(q, function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        console.log(rows);
        res.render("home", {rows : rows});
    });
    cn.end();
    
});
app.get("/allRestaurants", function (req, res) {
    res.render('allRestaurants');
});
app.get("/allReviews", function (req, res) {
    res.render('allReviews');
});

app.get('/restaurant', function(req, res) {
    res.render('restaurnt');
});
app.get('/newRestaurant', function(req, res) {
    res.sendFile(__dirname + '/views/newRestaurant.html');
});

// app.get('/', (req, res) => {
//     const name = 'John Doe'; // Replace with your desired dynamic data
//     res.render('home', { name });
//   });

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/views/pages/home.html');
// });
// app.get('/', function (req, res) {
//     const name = 'John Stirrat is a very intellectual individual!';
//     res.render('/views/pages/index', {name});
// });

app.post('/newRestaurant.html', function(req, res) {
    var name = req.body.restaurantName;
    var address = req.body.address;
    var phone_number = req.body.phoneNumber;
    var food_type = req.body.foodType;
    var bio = req.body.bio;
    var picture = req.body.imageUpload;
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'INSERT INTO restaurant VALUE (?, ?, ?, ?, ?, ?)';
    cn.query(q, [name, address, phone_number, food_type, bio, picture], function(err) {
        if (err) {console.log('Error: ', err);}
    });
    const q2 = 'SELECT * FROM restaurant WHERE name = ?';
    cn.query(q2, [name], function(err, rows, fields) {
        res.render('restaurant', {
            name : rows[0].name,
            address : rows[0].address,
            phone_number : rows[0].phone_number,
            food_type : rows[0].food_type,
            bio : rows[0].bio
        });
    });
    cn.end();
});

app.post('/review.html', function(req, res) {
    var name = req.body.restaurantName;
    var rating = req.body.radio;
    var comments = req.body.comments;
    var picture = req.body.imageUpload;
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'INSERT INTO review (name, rating, comments, picture) VALUE (?, ?, ?, ?)';
    cn.query(q, [name, rating, comments, picture], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
    });
    const q2 = 'SELECT * FROM review WHERE name = ?';
    cn.query(q2, [name], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('allReviews');
    });
    cn.end();
});

app.get('/review', function(req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name FROM restaurant';
    cn.query(q, function(err, names, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('review', {names});
    })
    cn.end();
});
