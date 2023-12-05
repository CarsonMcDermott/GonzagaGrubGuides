const express = require('express');
const mysql = require('mysql2');
// const ejs = require('ejs');

const config = require('./config.json');

const app = express();
app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// app.set('view engine', 'ejs');

app.listen(3001, function() {
    console.log("Listening on Port 3001...");
});

app.get("/", function (req, res) {
    return res.render("home.ejs");
});



app.get("/allRestaurants", function (req, res) {
  return res.render("allRestaurants.ejs");
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

// app.post('/newRestaurant.html', function(req, res) {
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

app.get('/review', function(req, res) {
    var cn = mysql.createConnection(config);
    cn.connect();
    const q = 'SELECT name FROM restaurant';
    cn.query(q, function(err, names, fields) {
        if (err) {console.log('Error: ', err);}
        res.render('review', {names});
    })
});
