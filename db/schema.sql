CREATE DATABASE burgers_db

USE burgers_db

CREATE TABLE burger 
(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Burger_Name varchar(255),
    Devoured BOOLEAN default false
)