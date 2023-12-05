CREATE TABLE Restaurant (
    Title VARCHAR(255) PRIMARY KEY,
    Food VARCHAR(100),
    Located VARCHAR(255),
    Phone VARCHAR(15),
    Rating INT,
    Bio VARCHAR(255)
);

CREATE TABLE Review (
    Review_id INT PRIMARY KEY,
    Restaurant VARCHAR(255),
    Rating INT,
    comments VARCHAR(255),
    FOREIGN KEY (Restaurant) REFERENCES Restaurant(Title)
);