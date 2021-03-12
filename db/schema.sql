DROP DATABASE IF EXISTS healthLog;

CREATE DATABASE healthLog;
USE healthLog;

CREATE TABLE log (
    id int NOT NULL AUTO_INCREMENT,
    breakfast varchar(100),
    lunch varchar(100),
    dinner varchar(100),
    snack varchar(100),
    supplements varchar(100),
    PRIMARY KEY (id)
)