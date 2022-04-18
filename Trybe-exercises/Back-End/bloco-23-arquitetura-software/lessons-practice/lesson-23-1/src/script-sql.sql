CREATE DATABASE IF NOT EXISTS model_database;
USE model_database;

DROP TABLE IF EXISTS CUSTOMERS;

CREATE TABLE customers (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) not null,
cpf VARCHAR(50) not null,
password VARCHAR(100) not null
);

CREATE DATABASE IF NOT EXISTS model_database;

USE model_database;

DROP TABLE IF EXISTS CUSTOMERS;

CREATE TABLE customers (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) not null,
cpf VARCHAR(50) not null,
email VARCHAR(100) not null,
password VARCHAR(100) not null
);

INSERT INTO customers (name, cpf, email, password)
VALUES ('goku', '821.222.313-83', 'goku@gmail.com', '123goku123'),
('Naruto', '123.222.313-83', 'naruto@gmail.com', '123naruto123'),
('Eren', '321.222.313-83', 'eren@gmail.com', '123eren123');

SELECT * FROM customers;
