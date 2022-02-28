DROP DATABASE IF EXISTS DBUserManagement;

CREATE DATABASE DBUserManagement;

USE DBUserManagement;

CREATE TABLE users (
  id int(11) PRIMARY KEY AUTO_INCREMENT,
  nombre varchar(60) NOT NULL,
  edad varchar(2) NOT NULL,
  genero varchar(2) NOT NULL,
  email varchar(100) NOT NULL,
  profesion varchar(60) NOT NULL,
  salario float NOT NULL,
  nroTelef varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE users
  ADD UNIQUE KEY nroTelef (nroTelef),
  ADD UNIQUE KEY email (email);


INSERT INTO users (nombre, edad, genero, email, profesion, salario, nroTelef) VALUES
('Demo', '45', 'F', 'maildemo@gmail.com', 'Arquitecto', 2000, '000000000'),
('Demo Demo', '20', 'M', 'maildemo2@hora.com', 'Ing Civil', 4500, '100000000'),
('Lorem Demo', '23', 'M', 'maildemo3@demo.com', 'Ing Civil', 3500, '010000000');
