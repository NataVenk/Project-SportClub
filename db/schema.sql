DROP DATABASE IF EXISTS hemlock_db;
CREATE DATABASE hemlock_db;

USE hemlock_db;

CREATE TABLE users(
    id INT NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(14) NOT NULL,
    monday BOOLEAN,
    tuesday BOOLEAN,
    wednesday BOOLEAN,
    thursday BOOLEAN,
    friday BOOLEAN,
    saturday BOOLEAN,
    sunday BOOLEAN,
    spin BOOLEAN,
    str_fit BOOLEAN,
    cardio BOOLEAN,
    crossfit BOOLEAN,
    swimming BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE instructors(
    id INT NOT NULL,
    instructor_name VARCHAR(100) NOT NULL,
    monday BOOLEAN,
    tuesday BOOLEAN,
    wednesday BOOLEAN,
    thursday BOOLEAN,
    friday BOOLEAN,
    saturday BOOLEAN,
    sunday BOOLEAN,
    spin BOOLEAN,
    str_fit BOOLEAN,
    cardio BOOLEAN,
    crossfit BOOLEAN,
    swimming BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE appointments(
    id INT NOT NULL,
    user_id INT,
    user_name VARCHAR(100),
    instructor_id INT,
    instructor_name VARCHAR(100),
    appointment_day VARCHAR(100),
    appointment_area VARCHAR(100),
    PRIMARY KEY (id)
);
