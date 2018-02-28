-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-02-2018 a las 21:50:29
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cultivos-ingresos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calidads`
--

CREATE TABLE `calidads` (
  `id` int(11) NOT NULL,
  `tipo` enum('Verde','Amarillo','Rojo') NOT NULL DEFAULT 'Verde'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calidads`
--

INSERT INTO `calidads` (`id`, `tipo`) VALUES
(1, 'Verde'),
(2, 'Amarillo'),
(3, 'Rojo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camions`
--

CREATE TABLE `camions` (
  `id` int(11) NOT NULL,
  `patenteChasis` varchar(255) DEFAULT NULL,
  `patenteAcoplado` varchar(255) DEFAULT NULL,
  `nombreChofer` varchar(255) DEFAULT NULL,
  `empresaId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `camions`
--

INSERT INTO `camions` (`id`, `patenteChasis`, `patenteAcoplado`, `nombreChofer`, `empresaId`, `createdAt`, `updatedAt`) VALUES
(1, '1234zxcv', '1234zxcv', 'CultivosChofer', 1, '2018-02-19 14:51:51', '2018-02-19 14:51:52'),
(2, '6789qwer', '6789qqwer', 'KoraChofer', 2, '2018-02-19 14:52:30', '2018-02-19 14:52:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chacras`
--

CREATE TABLE `chacras` (
  `id` int(11) NOT NULL,
  `renspa` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `productorId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `chacras`
--

INSERT INTO `chacras` (`id`, `renspa`, `nombre`, `productorId`, `createdAt`, `updatedAt`) VALUES
(9, '1234qwerty\r\n', 'Cultivos Chacra\r\n', 1, '2018-02-15 14:37:52', '2018-02-15 14:37:53'),
(10, '6789asdf', 'Kora Chacra', 2, '2018-02-19 14:51:13', '2018-02-19 14:51:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuadros`
--

CREATE TABLE `cuadros` (
  `id` int(11) NOT NULL,
  `up` varchar(255) DEFAULT NULL,
  `chacraId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuadros`
--

INSERT INTO `cuadros` (`id`, `up`, `chacraId`, `createdAt`, `updatedAt`) VALUES
(1, 'up1', 9, '2018-02-19 12:02:45', '2018-02-19 12:02:46'),
(2, 'up2', 9, '2018-02-19 14:53:02', '2018-02-19 14:53:02'),
(4, 'up1', 10, '2018-02-19 14:53:40', '2018-02-19 14:53:40'),
(5, 'up2', 10, '2018-02-19 14:53:48', '2018-02-19 14:53:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `nombre`, `direccion`, `telefono`, `createdAt`, `updatedAt`) VALUES
(1, 'Cultivos Patagonicos', 'Alem 238', 12345678, '2018-02-19 14:48:47', '2018-02-19 14:48:47'),
(2, 'Kora', 'Alem 238', 12345678, '2018-02-19 14:50:48', '2018-02-19 14:50:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especies`
--

CREATE TABLE `especies` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `especies`
--

INSERT INTO `especies` (`id`, `tipo`, `createdAt`, `updatedAt`) VALUES
(1, 'Manzana', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Pera', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Durazno', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Nectarin', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Ciruela', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingresos`
--

CREATE TABLE `ingresos` (
  `id` int(11) NOT NULL,
  `nroRemito` varchar(255) DEFAULT NULL,
  `fechaIngreso` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `viajeId` int(11) NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdFor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `institucions`
--

CREATE TABLE `institucions` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `institucions`
--

INSERT INTO `institucions` (`id`, `nombre`, `direccion`, `telefono`, `createdAt`, `updatedAt`) VALUES
(1, 'Frio Cultivos', 'Alem 238', '12345678', '2018-02-21 10:53:43', '2018-02-21 10:53:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lotes`
--

CREATE TABLE `lotes` (
  `id` int(11) NOT NULL,
  `pesoNeto` int(11) DEFAULT NULL,
  `cantBins` int(11) NOT NULL,
  `nroLote` int(11) DEFAULT NULL,
  `ingresoId` int(11) NOT NULL,
  `especieId` int(11) NOT NULL,
  `calidadId` int(11) NOT NULL,
  `variedadId` int(11) NOT NULL,
  `chacraId` int(11) NOT NULL,
  `tratamientoId` int(11) NOT NULL,
  `cuadroId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productors`
--

CREATE TABLE `productors` (
  `id` int(11) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productors`
--

INSERT INTO `productors` (`id`, `dni`, `nombre`, `telefono`, `createdAt`, `updatedAt`) VALUES
(1, 34654593, 'Patricio Sartore', 12345678, '2018-02-15 14:37:35', '2018-02-15 14:37:36'),
(2, 12345678, 'Alejandro Cantera', 12345678, '2018-02-19 14:49:59', '2018-02-19 14:49:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('A20180111133051-create-chacra.js'),
('AA20180112144229-create-especie.js'),
('B20180111141421-create-variedad.js'),
('C20180111141354-create-calidad.js'),
('D20180111140450-create-ingreso.js'),
('E20180111140054-create-institucion.js'),
('F20180111135538-create-camion.js'),
('G20180111135055-create-empresa.js'),
('H20180111134346-create-productor.js'),
('I20180109213208-create-cuadro.js'),
('J20180111140710-create-lote.js'),
('K20180111134645-create-bin.js'),
('L20180111213757-create-camion-empresas.js'),
('M20180111213046-create-chacra-productors.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamientos`
--

CREATE TABLE `tratamientos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tratamientos`
--

INSERT INTO `tratamientos` (`id`, `tipo`) VALUES
(1, 'Sin Tratamiento'),
(2, 'MCP'),
(3, 'Tratamiento'),
(4, 'ATM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variedads`
--

CREATE TABLE `variedads` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `especieId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `variedads`
--

INSERT INTO `variedads` (`id`, `tipo`, `especieId`, `createdAt`, `updatedAt`) VALUES
(1, 'Red Delicious', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Gala', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Golden Delicious', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Granny Smith', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Fuji', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Braeburn', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Rome Beauty', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Cripps Pink', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'Starkrinson', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Ozark Gold', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Tyderman', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'Red Clapps', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'Clapps Favorita', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Coscia/Ercolini', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Forwill', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'Dr. Guyot', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'Beurre Giffard', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'Williams', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'Red Bartlett', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'Red Sensation', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'Red Danjou', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'Abate Fetel', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'Packhams Triumph', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'Beurre Bosc', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'Golden Russet Bosc', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'Conference', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'Comice', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'Rocha', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'Forelle', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'Hosui', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'Nijisseiki', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'Winter Bartlett', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'Winter Nellis', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'Sweet Sensation', 2, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'Flavor Crest', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'Rich Lady', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'Zainobe/Vista Rich', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, '92.5 GF 296', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'Red Globe', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, '42 LD 315', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, '54 LD 331', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 'Zarnega/Andes Black', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 'Trazee', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, '85 GD 20', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 'Lacey', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, '54 LD 325', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 'Snow Giant', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 'September Snow', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 'Cal Red', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 'Fairtime', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 'Summerset', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 'Merril Carnival', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 'Sweet September', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 'Maria Angela', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 'Queencrest', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 'Zee Diamond', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 'Guglielmina', 3, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, '11 LB 33', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 'Honey Kist', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 'Artic Rose', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 'Caldesi 2010', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 'Zee Glo', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 'Artic Queen', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 'Fantasia', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 'Flaming Red', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 'Fairlane', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 'Royal Giant', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 'Flamekist', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 'Artic Pride', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, '18 K 374', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 'Caldesi 2020', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 'Artic Snow', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, 'Maria Dolce', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 'August Red', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 'Maria Elisa', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, '44 GF 151', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 'Laroda', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 'Laetitia', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 'Howard Sun', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 'Red Ram', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 'Catalina', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 'Black Beaut', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 'Royal Zee', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 'Royal Diamond', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 'Songold', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 'Angeleno', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 'Red Beaut', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 'Fortune', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 'Black Amber', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 'Betty Anne', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, '109 GD 221', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 'Flavorich/Pluot', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 'Dapple Dandy', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 'Flavor King', 5, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `costo` int(5) DEFAULT '0',
  `createdFor` varchar(255) NOT NULL,
  `institucionId` int(11) NOT NULL,
  `camionId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`id`, `fecha`, `costo`, `createdFor`, `institucionId`, `camionId`, `createdAt`, `updatedAt`) VALUES
(4, '2018-11-21', 1000, 'patricio.sartore@gmail.com', 1, 1, '2018-02-21 17:13:33', '2018-02-21 17:13:33'),
(5, '2018-11-21', 1000, 'patricio.sartore@gmail.com', 1, 1, '2018-02-21 17:17:42', '2018-02-21 17:17:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calidads`
--
ALTER TABLE `calidads`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `camions`
--
ALTER TABLE `camions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empresa_ibfk_1` (`empresaId`);

--
-- Indices de la tabla `chacras`
--
ALTER TABLE `chacras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chacra_ibfk_1` (`productorId`);

--
-- Indices de la tabla `cuadros`
--
ALTER TABLE `cuadros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuadros_ibfk_1` (`chacraId`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `especies`
--
ALTER TABLE `especies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingreso_ibfk_1` (`viajeId`);

--
-- Indices de la tabla `institucions`
--
ALTER TABLE `institucions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lotes`
--
ALTER TABLE `lotes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingresoId` (`ingresoId`),
  ADD KEY `especieId` (`especieId`),
  ADD KEY `calidadId` (`calidadId`),
  ADD KEY `lotes_ibfk_6` (`variedadId`),
  ADD KEY `lotes_ibfk_7` (`chacraId`),
  ADD KEY `lotes_ibfk_4` (`tratamientoId`),
  ADD KEY `lotes_ibfk_5` (`cuadroId`);

--
-- Indices de la tabla `productors`
--
ALTER TABLE `productors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `SequelizeMeta_name_unique` (`name`);

--
-- Indices de la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `variedads`
--
ALTER TABLE `variedads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `especieId` (`especieId`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `viaje_ibfk_1` (`institucionId`),
  ADD KEY `viaje_ibfk_2` (`camionId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calidads`
--
ALTER TABLE `calidads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `camions`
--
ALTER TABLE `camions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `chacras`
--
ALTER TABLE `chacras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `cuadros`
--
ALTER TABLE `cuadros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `especies`
--
ALTER TABLE `especies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `institucions`
--
ALTER TABLE `institucions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `lotes`
--
ALTER TABLE `lotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `productors`
--
ALTER TABLE `productors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tratamientos`
--
ALTER TABLE `tratamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `variedads`
--
ALTER TABLE `variedads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `camions`
--
ALTER TABLE `camions`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`);

--
-- Filtros para la tabla `chacras`
--
ALTER TABLE `chacras`
  ADD CONSTRAINT `chacra_ibfk_1` FOREIGN KEY (`productorId`) REFERENCES `productors` (`id`);

--
-- Filtros para la tabla `cuadros`
--
ALTER TABLE `cuadros`
  ADD CONSTRAINT `cuadros_ibfk_1` FOREIGN KEY (`chacraId`) REFERENCES `chacras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ingresos`
--
ALTER TABLE `ingresos`
  ADD CONSTRAINT `ingreso_ibfk_1` FOREIGN KEY (`viajeId`) REFERENCES `viajes` (`id`);

--
-- Filtros para la tabla `lotes`
--
ALTER TABLE `lotes`
  ADD CONSTRAINT `lotes_ibfk_1` FOREIGN KEY (`ingresoId`) REFERENCES `ingresos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lotes_ibfk_2` FOREIGN KEY (`especieId`) REFERENCES `especies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lotes_ibfk_3` FOREIGN KEY (`calidadId`) REFERENCES `calidads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lotes_ibfk_4` FOREIGN KEY (`tratamientoId`) REFERENCES `tratamientos` (`id`),
  ADD CONSTRAINT `lotes_ibfk_5` FOREIGN KEY (`cuadroId`) REFERENCES `cuadros` (`id`),
  ADD CONSTRAINT `lotes_ibfk_6` FOREIGN KEY (`variedadId`) REFERENCES `variedads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lotes_ibfk_7` FOREIGN KEY (`chacraId`) REFERENCES `chacras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `variedads`
--
ALTER TABLE `variedads`
  ADD CONSTRAINT `variedads_ibfk_1` FOREIGN KEY (`especieId`) REFERENCES `especies` (`id`);

--
-- Filtros para la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD CONSTRAINT `viaje_ibfk_1` FOREIGN KEY (`institucionId`) REFERENCES `institucions` (`id`),
  ADD CONSTRAINT `viaje_ibfk_2` FOREIGN KEY (`camionId`) REFERENCES `camions` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
