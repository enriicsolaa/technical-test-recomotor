-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS recomotordb;
USE recomotordb;

-- Crear tabla empleados
CREATE TABLE IF NOT EXISTS empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Crear tabla marcas
CREATE TABLE IF NOT EXISTS marcas (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Crear tabla modelos
CREATE TABLE IF NOT EXISTS modelos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    img TEXT NOT NULL,
    marca_id INT NOT NULL,
    FOREIGN KEY (marca_id) REFERENCES marcas(id)
);

-- Crear tabla favoritos
CREATE TABLE IF NOT EXISTS favoritos (
    empleado_id INT NOT NULL,
    modelo_id INT NOT NULL,
    PRIMARY KEY (empleado_id, modelo_id),
    FOREIGN KEY (empleado_id) REFERENCES empleados(id) ON DELETE CASCADE,
    FOREIGN KEY (modelo_id) REFERENCES modelos(id) ON DELETE CASCADE
);

-- Insertar empleados
INSERT INTO empleados (id, nombre) VALUES
(1, 'Enric Sola'),
(2, 'Josep Valero'),
(3, 'Jaume Perera'),
(4, 'Anna Mendez'),
(5, 'Maria Grau')
ON DUPLICATE KEY UPDATE nombre = VALUES(nombre);

-- Insertar marcas
INSERT INTO marcas (id, nombre) VALUES
(1, 'Tesla'),
(2, 'Nissan'),
(3, 'Volkswagen'),
(4, 'Toyota'),
(5, 'Honda'),
(6, 'Lamborghini'),
(7, 'Audi'),
(8, 'BMW'),
(9, 'Mercedes-Benz'),
(10, 'Porsche')
ON DUPLICATE KEY UPDATE nombre = VALUES(nombre);

-- Insertar modelos
INSERT INTO modelos (id, nombre, tipo, img, marca_id) VALUES
(1, 'Model S Plaid', 'electrico', 'tesla-model-s.jpg', 1),
(2, 'GT-R', 'gasolina', 'nissan-gtr.jpg', 2),
(3, 'Golf GTD', 'diesel', 'volkswagen-golf-gtd.jpg', 3),
(4, 'Supra', 'gasolina', 'toyota-supra.jpg', 4),
(5, 'Acura NSX', 'gasolina', 'honda-acura-nsx.jpg', 5),
(6, 'Urus', 'gasolina', 'lamborghini-urus.jpg', 6),
(7, 'RS6', 'gasolina', 'audi-rs6.jpg', 7),
(8, 'M3', 'gasolina', 'bmw-m3.jpg', 8),
(9, 'A45 AMG', 'gasolina', 'mercedes-benz-a45-amg.jpg', 9),
(10, 'Cayenne E-Hybrid', 'hibrido', 'porsche-cayenne-e-hybrid.jpg', 10),
(11, 'Model 3', 'electrico', 'tesla-model-3.jpg', 1),
(12, 'Model X', 'electrico', 'tesla-model-x.jpg', 1),
(13, 'Model Y', 'electrico', 'tesla-model-y.jpg', 1),
(14, 'Roadster', 'electrico', 'tesla-roadster.jpg', 1),
(15, 'Leaf', 'electrico', 'nissan-leaf.jpg', 2),
(16, 'Altima', 'gasolina', 'nissan-altima.jpg', 2),
(17, '370Z', 'gasolina', 'nissan-370z.jpg', 2),
(18, 'Ariya', 'electrico', 'nissan-ariya.jpg', 2),
(19, 'Passat', 'diesel', 'volkswagen-passat.jpg', 3),
(20, 'ID.4', 'electrico', 'volkswagen-id4.jpg', 3),
(21, 'Polo', 'gasolina', 'volkswagen-polo.jpg', 3),
(22, 'Tiguan', 'diesel', 'volkswagen-tiguan.jpg', 3),
(23, 'Corolla', 'hibrido', 'toyota-corolla.jpg', 4),
(24, 'Prius', 'hibrido', 'toyota-prius.jpg', 4),
(25, 'GR86', 'gasolina', 'toyota-gr86.jpg', 4),
(26, 'Mirai', 'hidrogeno', 'toyota-mirai.jpg', 4),
(27, 'Civic Type R', 'gasolina', 'honda-civic-type-r.jpg', 5),
(28, 'CR-V Hybrid', 'hibrido', 'honda-crv-hybrid.jpg', 5),
(29, 'e:Ny1', 'electrico', 'honda-eny1.jpg', 5),
(30, 'Jazz', 'hibrido', 'honda-jazz.jpg', 5),
(31, 'Huracán EVO', 'gasolina', 'lamborghini-huracan-evo.jpg', 6),
(32, 'Aventador S', 'gasolina', 'lamborghini-aventador.jpg', 6),
(33, 'Revuelto', 'hibrido', 'lamborghini-revuelto.jpg', 6),
(34, 'Sián FKP 37', 'hibrido', 'lamborghini-sian.jpg', 6),
(35, 'A3 Sportback', 'gasolina', 'audi-a3.jpg', 7),
(36, 'e-tron GT', 'electrico', 'audi-etron-gt.jpg', 7),
(37, 'Q8 e-tron', 'electrico', 'audi-q8-etron.jpg', 7),
(38, 'S5 Coupe', 'gasolina', 'audi-s5.jpg', 7),
(39, 'i4', 'electrico', 'bmw-i4.jpg', 8),
(40, 'iX', 'electrico', 'bmw-ix.jpg', 8),
(41, 'X5', 'hibrido', 'bmw-x5.jpg', 8),
(42, 'Z4', 'gasolina', 'bmw-z4.jpg', 8),
(43, 'EQC', 'electrico', 'mercedes-eqc.jpg', 9),
(44, 'C-Class', 'diesel', 'mercedes-c-class.jpg', 9),
(45, 'EQS', 'electrico', 'mercedes-eqs.jpg', 9),
(46, 'GLA 250', 'hibrido', 'mercedes-gla250.jpg', 9),
(47, '911 Carrera', 'gasolina', 'porsche-911-carrera.jpg', 10),
(48, 'Taycan Turbo', 'electrico', 'porsche-taycan.jpg', 10),
(49, 'Panamera E-Hybrid', 'hibrido', 'porsche-panamera-hybrid.jpg', 10),
(50, 'Macan', 'gasolina', 'porsche-macan.jpg', 10),
(51, 'Cybertruck', 'electrico', 'tesla-cybertruck.jpg', 1),
(52, 'X-Trail e-Power', 'hibrido', 'nissan-xtrail-epower.jpg', 2),
(53, 'Arteon', 'gasolina', 'volkswagen-arteon.jpg', 3),
(54, 'Land Cruiser', 'diesel', 'toyota-land-cruiser.jpg', 4),
(55, 'Fit', 'gasolina', 'honda-fit.jpg', 5),
(56, 'Countach LPI 800-4', 'hibrido', 'lamborghini-countach.jpg', 6),
(57, 'RS e-tron GT', 'electrico', 'audi-rs-etron.jpg', 7),
(58, 'XM', 'hibrido', 'bmw-xm.jpg', 8),
(59, 'GLE Coupe', 'diesel', 'mercedes-gle-coupe.jpg', 9),
(60, '718 Boxster', 'gasolina', 'porsche-718-boxster.jpg', 10)
ON DUPLICATE KEY UPDATE 
    nombre = VALUES(nombre),
    tipo = VALUES(tipo),
    img = VALUES(img),
    marca_id = VALUES(marca_id);

-- Insertar favoritos
INSERT INTO favoritos (empleado_id, modelo_id) VALUES
(1, 6),
(2, 9),
(3, 2),
(4, 7),
(5, 1)
ON DUPLICATE KEY UPDATE empleado_id = VALUES(empleado_id);