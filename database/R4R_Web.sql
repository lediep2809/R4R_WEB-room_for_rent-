CREATE DATABASE R4R_Web;
USE R4R_Web;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  status INT NULL,
  createddate TIMESTAMP NOT NULL,
  roleid INT NULL
);

CREATE TABLE room (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NULL,
  category VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  capacity VARCHAR(255) NOT NULL,
  status VARCHAR(255) NULL,
  description TEXT NULL,
  price VARCHAR(255) NOT NULL,
  deposit VARCHAR(255) NULL,
  electricPrice VARCHAR(255) NULL,
  waterPrice VARCHAR(255) NULL,
  otherPrice VARCHAR(255) NULL,
  houseOwner VARCHAR(255) NULL,
  ownerPhone VARCHAR(255) NULL,
  createdby INT NULL
);
CREATE TABLE role(
    id bigint NOT NULL PRIMARY KEY auto_increment,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(255) NOT NULL
);