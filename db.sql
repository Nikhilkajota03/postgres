CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE nodeAuth;

CREATE TABLE users(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);


SELECT * FROM users;

INSERT INTO users (name,email,password) VALUES ('Bob','bob@gmail.com','123456');