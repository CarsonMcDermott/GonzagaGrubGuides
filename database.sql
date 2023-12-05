

CREATE TABLE restaurant (
    name VARCHAR(255) PRIMARY KEY,
    address VARCHAR(100),
    phone_number VARCHAR(255),
    food_type VARCHAR(15),
    bio VARCHAR(255),
    picture blob
);

CREATE TABLE review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    rating INT,
    comments VARCHAR(255),
    
    FOREIGN KEY (name) REFERENCES gonzagagrubguides.Restaurant(name)
);