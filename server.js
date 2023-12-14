const express = require('express');
const mysql = require('mysql2');
const ejs = require('ejs');
const fs = require('fs')

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
    const q = 'SELECT name, address, phone_number, food_type, bio, r.picture, ROUND(AVG(rating), 1) as rating  \
                FROM restaurant r JOIN review re USING (name) GROUP BY name ORDER BY rating DESC LIMIT 5';
    cn.query(q, function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render("home", {rows : rows});
    });
    cn.end();  
});
app.get("/allRestaurants", function (req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name, address, phone_number, food_type, bio, r.picture, ROUND(AVG(rating), 1) as rating  \
                FROM restaurant r JOIN review re USING (name) GROUP BY name';
    cn.query(q, function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render("allRestaurants", {rows : rows});
    });
    cn.end();
});
app.get("/sortByRating", function (req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name, address, phone_number, food_type, bio, r.picture, ROUND(AVG(rating), 1) as rating  \
                FROM restaurant r JOIN review re USING (name) GROUP BY name ORDER BY rating DESC';
    cn.query(q, function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render("allRestaurants", {rows : rows});
    });
    cn.end();  
});
app.get("/sortByName", function (req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name, address, phone_number, food_type, bio, r.picture, ROUND(AVG(rating), 1) as rating  \
                FROM restaurant r JOIN review re USING (name) GROUP BY name ORDER BY name';
    cn.query(q, function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render("allRestaurants", {rows : rows});
    });
    cn.end();  
});
app.get("/allReviews", function (req, res) {
    var name = req.body.button;
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT * FROM review WHERE name=?';
    cn.query(q, [name], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('allReviews', {rows : rows});
    });
    cn.end();
});
app.get('/random_restaurant', function(req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT * FROM restaurant';
    cn.query(q, function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        var index = Math.floor(Math.random() * rows.length);
        res.render('restaurant', {row : rows[index]});
    });
    cn.end();
});
app.get('/restaurant', function(req, res) {
    var name = req.query.name;
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name, address, phone_number, food_type, bio, r.picture, ROUND(AVG(rating), 1) as rating  \
                FROM restaurant r JOIN review re USING (name) WHERE name = ? GROUP BY name';
    cn.query(q, [name], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('restaurant', {row : rows[0],});
    });
    cn.end();
});
app.post('/restaurant', function(req, res) {
    var name = req.body.name;
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT * FROM review WHERE name=?';
    cn.query(q, [name], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('allReviews', {rows : rows});
    });
    cn.end();
});
app.get('/newRestaurant', function(req, res) {
    res.sendFile(__dirname + '/views/newRestaurant.html');
});
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
            row: rows[0]
        });
    });
    cn.end();
});
app.post('/review', function(req, res) {
    var name = req.body.restaurantName;
    var rating = req.body.radio;
    var comments = req.body.comments;
    // var picture = req.body.imageUpload;
        //Don't need this anymore

    // https://stackoverflow.com/questions/73378041/how-can-i-transfer-an-image-from-html-to-nodejs-to-use-it-with-ejs
    var image = req.files.imageUpload;
    image.mv('./photos/' + name + '.jpg');
    
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'INSERT INTO review (name, rating, comments, picture) VALUE (?, ?, ?, ?)';
    cn.query(q, [name, rating, comments, picture], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
    });
    const q2 = 'SELECT * FROM review WHERE name = ?';
    cn.query(q2, [name], function(err, rows, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('allReviews', {rows : rows});
    });
    cn.end();
});
app.get('/review', function(req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name FROM restaurant';
    cn.query(q, function(err, names, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('review', {names : names});
    })
    cn.end();
});