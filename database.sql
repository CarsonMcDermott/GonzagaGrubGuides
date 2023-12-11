DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS restaurant;

CREATE TABLE restaurant (
    name VARCHAR(255) PRIMARY KEY,
    address VARCHAR(100),
    phone_number VARCHAR(255),
    food_type VARCHAR(15),
    bio VARCHAR(255),
    picture BLOB
);

CREATE TABLE review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    rating INT,
    comments VARCHAR(255),
    picture BLOB,
    FOREIGN KEY (name) REFERENCES gonzagagrubguides.Restaurant(name)
);

INSERT INTO restaurant VALUES 
("Pita Pit", "818 E Sharp Ave, Spokane WA 99202", "509-483-7482", "Veggies",
 "We provide a healthy alternative for Gonzaga Students to eat!", LOAD_FILE('photos/Pita_Pit_restaurant.jpg')),
("Pizza Pipeline", "1403 N Division St, Spokane WA 99202", "509-326-6412", "Pizza",
  "We make the best food for all Gonzaga students to devour!", LOAD_FILE('photos/ls.jpg')),
("Qdoba", "1117 N Dakota, Spokane WA 99206", "509-313-7216", "Burrito",
 "We provide close food for all Gonzaga Studnets to swallow!", LOAD_FILE('photos/OIP.jpg')),
("Jimmy John's", "105 E Mission Ave, Spokane WA 99202", "509-327-3278", "Sandwiches",
 "We are here for Gonzaga students to come if they want", LOAD_FILE('photos/jimmy-johns-menu.png')),
("Frugals", "1229 N Hamilton St, Spokane, WA 99202", "509-242-3669", "Burgers",
  "We make goood food for all Gonzaga students to enjoy!",LOAD_FILE('photos/5YO7ry6u0f.png'));

INSERT INTO review (name, rating, comments, picture) VALUES ("Pita Pit", 1, "Bad", LOAD_FILE('photos/Pita_Pit_restaurant.jpg')),
 ("Pita Pit", 2, "Not Good", LOAD_FILE('photos/Pita_Pit_restaurant.jpg')), ("Pita Pit", 3, "Mid", LOAD_FILE('photos/Pita_Pit_restaurant.jpg')),
 ("Pita Pit", 4, "Good", LOAD_FILE('photos/Pita_Pit_restaurant.jpg')),
("Pita Pit", 5, "This is the most immaculate food I have ever tasted, swallowed, and dissolved in my life", LOAD_FILE('photos/Pita_Pit_restaurant.jpg'));
