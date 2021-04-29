DROP DATABASE mystuffproject;
CREATE DATABASE mystuffproject;

\c mystuffproject;

CREATE TABLE todos (
  id serial PRIMARY KEY,
  task VARCHAR(200)
);