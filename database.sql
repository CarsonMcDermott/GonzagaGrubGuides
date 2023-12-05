CREATE TABLE Restaurant (
    name VARCHAR(255) PRIMARY KEY,
    address VARCHAR(100),
    phone_number VARCHAR(255),
    food_type VARCHAR(15),
    bio VARCHAR(255),
    picture blob
);

CREATE TABLE Review (
    review_id INT PRIMARY KEY,
    name VARCHAR(255),
    rating INT,
    comments VARCHAR(255),
    FOREIGN KEY (name) REFERENCES Restaurant(name)
);