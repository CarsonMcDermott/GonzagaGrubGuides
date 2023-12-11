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
 "We provide a healthy alternative for Gonzaga Students to eat!", NULL),
("Pizza Pipeline", "1403 N Division St, Spokane WA 99202", "509-326-6412", "Pizza",
  "We make the best food for all Gonzaga students to devour!", NULL),
("Qdoba", "1117 N Dakota, Spokane WA 99206", "509-313-7216", "Burrito",
 "We provide close food for all Gonzaga Studnets to swallow!", NULL),
("Jimmy John's", "105 E Mission Ave, Spokane WA 99202", "509-327-3278", "Sandwiches",
 "We are here for Gonzaga students to come if they want", NULL),
("Frugals", "1229 N Hamilton St, Spokane, WA 99202", "509-242-3669", "Burgers",
  "We make goood food for all Gonzaga students to enjoy!",LOAD_FILE('downloads/5YO7ry6u0f.png'));

INSERT INTO review (name, rating, comments) VALUES ("Pita Pit", 1, "Bad"), ("Pita Pit", 2, "Not Good"), ("Pita Pit", 3, "Mid"), ("Pita Pit", 4, "Good"),
("Pita Pit", 5, "This is the most immaculate food I have ever tasted, swallowed, and dissolved in my life");  