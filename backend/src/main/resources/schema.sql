
CREATE DATABASE IF NOT EXISTS studentmanagement;

USE studentmanagement;

CREATE TABLE IF NOT EXISTS navbar (
    id BIGINT NOT NULL AUTO_INCREMENT,
    age INT NOT NULL,
    marks INT NOT NULL,
    course VARCHAR(255),
    name VARCHAR(255),
    PRIMARY KEY (id)
);
