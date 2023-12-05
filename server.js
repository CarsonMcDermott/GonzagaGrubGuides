const express = require('express');
const mysql = require('mysql2');

const config = require('./config.json');

const app = express();
app.use(express.static('public'));

app.listen(3001, function() {
    console.log("Listening on Port 3001...");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/home.html');
});

app.post('/newRestaurant.html', function(req, res) {
    var name = req.body.restaurantName;
    var address = req.body.address;
    var phone = req.body.phoneNumber;
    var type = req.body.foodType;
    var bio = req.body.bio;
    var picture = req.body.imageUpload;
    var cn = mysql.createConnection(config);
    cn.connect();
});