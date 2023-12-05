const express = require('express');
const mysql = require('mysql2');

const config = require('./config.json');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.listen(3001, function() {
    console.log("Listening on Port 3001...");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/home.html');
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
    cn.query(q, [name, address, phone_number, food_type, bio, picture]);
    // TODO: Add error Handeling for duplicates and others
    const q2 = 'SELECT * FROM restaurant WHERE name = ?';
    cn.query(q2, [name]);
    res.send(`<html><body><h1>${name}</h1></body></html>`);
    
    cn.end();
});

// app.post('/review.html', function(req, res) {
//     var name = req.body.restaurantName;
//     var address = req.body.address;
//     var phone_number = req.body.phoneNumber;
//     var food_type = req.body.foodType;
//     var bio = req.body.bio;
//     var picture = req.body.imageUpload;
//     var cn = mysql.createConnection(config);
//     cn.connect();
//     const q = 'INSERT INTO restaurant VALUE (?, ?, ?, ?, ?, ?)';
//     cn.query(q, [name, address, phone_number, food_type, bio, picture]);
//     // TODO: Add error Handeling for duplicates and others
//     const q2 = 'SELECT * FROM restaurant WHERE name = ?';
//     cn.query(q2, [name]);
//     res.send(`<html><body><h1>${name}</h1></body></html>`);
    
//     cn.end();
// });