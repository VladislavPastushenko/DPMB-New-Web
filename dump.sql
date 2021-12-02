-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Дек 01 2021 г., 22:56
-- Версия сервера: 8.0.27-0ubuntu0.20.04.1
-- Версия PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bez_galstuka_bot`
--
CREATE DATABASE IF NOT EXISTS `bez_galstuka_bot` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `bez_galstuka_bot`;

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
  `id` int NOT NULL,
  `sector` varchar(64) NOT NULL,
  `industry` varchar(64) NOT NULL,
  `tg_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `requests`
--

INSERT INTO `requests` (`id`, `sector`, `industry`, `tg_id`) VALUES
(123, 'Basic Materials', 'agricultural inputs', 270063678),
(124, 'Consumer Defensive', 'beverages - non-alcoholic', 410530405),
(125, 'Technology', 'semiconductor equipment & materials', 364566717),
(126, 'Basic Materials', 'agricultural inputs', 364566717),
(127, 'Consumer Defensive', 'beverages - brewers', 364566717),
(128, 'Consumer Cyclical', 'apparel manufacturing', 474227940),
(129, 'Technology', 'communication equipment', 410530405),
(130, 'Utilities', 'utilities - regulated electric', 410530405),
(131, 'Utilities', 'utilities - regulated electric', 410530405),
(132, 'Consumer Cyclical', 'apparel manufacturing', 734488085),
(133, 'Basic Materials', 'agricultural inputs', 270063678),
(134, 'Consumer Cyclical', 'apparel manufacturing', 270063678),
(135, 'Не тот, что прежде', 'biotechnology', 734488085),
(136, 'Technology', 'electronic components', 734488085),
(137, 'Communication Services', 'entertainment', 474227940),
(138, 'Basic Materials', 'aluminum', 410530405),
(139, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(140, 'Utilities', 'utilities - regulated electric', 270063678),
(141, 'Basic Materials', 'agricultural inputs', 270063678),
(142, 'Healthcare', 'biotechnology', 410530405),
(143, 'Healthcare', 'biotechnology', 270063678),
(144, 'Healthcare', 'biotechnology', 270063678),
(145, 'Basic Materials', 'agricultural inputs', 270063678),
(146, 'Healthcare', 'biotechnology', 410530405),
(147, 'Consumer Defensive', 'confectioners', 270063678),
(148, 'Consumer Cyclical', 'apparel manufacturing', 270063678),
(149, 'Communication Services', 'broadcasting', 270063678),
(150, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(151, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(152, 'Technology', 'computer hardware', 410530405),
(153, 'Financial', 'banks - regional', 410530405),
(154, 'Technology', 'consumer electronics', 471528422),
(155, 'Consumer Cyclical', 'apparel retail', 471528422),
(156, 'Energy', 'oil & gas e&p', 471528422),
(157, 'Consumer Defensive', 'beverages - brewers', 802007807),
(158, 'Consumer Defensive', 'beverages - wineries & distilleries', 410530405),
(159, 'Financial', 'banks - regional', 734488085),
(160, 'Consumer Cyclical', 'department stores', 474227940),
(161, 'Financial', 'banks - regional', 474227940),
(162, 'Technology', 'software - application', 270063678),
(163, 'Basic Materials', 'agricultural inputs', 270063678),
(164, 'Energy', 'oil & gas refining & marketing', 474227940),
(165, 'Energy', 'oil & gas e&p', 474227940),
(166, 'Healthcare', 'biotechnology', 474227940),
(167, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(168, 'Communication Services', 'broadcasting', 270063678),
(169, 'Communication Services', 'telecom services', 270063678),
(170, 'Financial', 'biotechnology', 270063678),
(171, 'Financial', 'credit services', 270063678),
(172, 'Financial', 'credit services', 474227940),
(173, 'Industrials', 'biotechnology', 474227940),
(174, 'Basic Materials', 'chemicals', 474227940),
(175, 'Communication Services', 'electronic gaming & multimedia', 270063678),
(176, 'Consumer Cyclical', 'apparel retail', 270063678),
(177, 'Basic Materials', 'biotechnology', 474227940),
(178, 'Healthcare', 'biotechnology', 474227940),
(179, 'Industrials', 'airlines', 474227940),
(180, 'Basic Materials', 'biotechnology', 474227940),
(181, 'Basic Materials', 'agricultural inputs', 270063678),
(182, 'Utilities', 'utilities - diversified', 474227940),
(183, 'Consumer Cyclical', 'apparel retail', 270063678),
(184, 'Basic Materials', 'agricultural inputs', 270063678),
(185, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(186, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(187, 'Real Estate', 'real estate - development', 474227940),
(188, 'Utilities', 'utilities - regulated water', 270063678),
(189, 'Basic Materials', 'steel', 270063678),
(190, 'Financial', 'banks - diversified', 474227940),
(191, 'Communication Services', 'apparel retail', 474227940),
(192, 'Communication Services', 'broadcasting', 270063678),
(193, 'Real Estate', 'real estate - development', 474227940),
(194, 'Technology', 'consumer electronics', 474227940),
(195, 'Technology', 'solar', 474227940),
(196, 'Healthcare', 'biotechnology', 474227940),
(197, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(198, 'Consumer Cyclical', 'auto & truck dealerships', 270063678),
(199, 'Utilities', 'utilities - independent power producers', 474227940),
(200, 'Consumer Cyclical', 'auto & truck dealerships', 474227940),
(201, 'Energy', 'thermal coal', 474227940),
(202, 'Consumer Cyclical', 'auto manufacturers', 270063678),
(203, 'Industrials', 'airlines', 410530405),
(204, 'Technology', 'electronic components', 410530405),
(205, 'Communication Services', 'advertising agencies', 802007807),
(206, 'Basic Materials', 'building materials', 802007807),
(207, 'Basic Materials', 'agricultural inputs', 474227940),
(208, 'Communication Services', 'broadcasting', 410530405),
(209, 'Communication Services', 'internet content & information', 410530405),
(210, 'Consumer Cyclical', 'gambling', 410530405),
(211, 'Financial', 'banks - diversified', 410530405),
(212, 'Basic Materials', 'agricultural inputs', 270063678),
(213, 'Basic Materials', 'agricultural inputs', 270063678),
(214, 'Basic Materials', 'coking coal', 270063678),
(215, 'Energy', 'oil & gas midstream', 270063678),
(216, 'Basic Materials', 'agricultural inputs', 270063678),
(217, 'Technology', 'computer hardware', 410530405),
(218, 'Basic Materials', 'agricultural inputs', 474227940),
(219, 'Communication Services', 'electronic gaming & multimedia', 474227940),
(220, 'Technology', 'solar', 474227940),
(221, 'Technology', 'software infrastructure', 474227940),
(222, 'Industrials', 'conglomerates', 410530405),
(223, 'Basic Materials', 'chemicals', 474227940),
(224, 'Technology', 'consumer electronics', 474227940);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `tg_id` int NOT NULL,
  `username` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `first_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `last_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `attempts` int NOT NULL DEFAULT '3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `tg_id`, `username`, `first_name`, `last_name`, `attempts`) VALUES
(13, 270063678, 'vladislav_pastushenko', 'Владислав', 'Пастушенко', 65),
(14, 410530405, 'maxkhalex', 'Max', 'Kharitonov', 91),
(15, 364566717, NULL, 'Сергей', NULL, 3),
(16, 474227940, 'ALEKSEILUNOCHKIN', 'ALEKSEI', 'LUNOCHKIN', 80),
(17, 734488085, 'lapshova95', 'Ксения', 'Лапшова', 2),
(18, 471528422, 'mirumirumir', 'Natasha', 'Mironov', 6),
(19, 802007807, 'lunochkina_n', 'Анастасия', 'Луночкина', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tg_id` (`tg_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tg_id` (`tg_id`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD KEY `username` (`username`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`tg_id`) REFERENCES `users` (`tg_id`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- База данных: `dpmb`
--
CREATE DATABASE IF NOT EXISTS `dpmb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `dpmb`;

-- --------------------------------------------------------

--
-- Структура таблицы `carriers`
--

CREATE TABLE `carriers` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `carriers`
--

INSERT INTO `carriers` (`id`, `name`) VALUES
(1, 'CD'),
(2, 'RegioJet'),
(3, 'Flixbus');

-- --------------------------------------------------------

--
-- Структура таблицы `cities`
--

CREATE TABLE `cities` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `cities`
--

INSERT INTO `cities` (`id`, `name`) VALUES
(1, 'Brno'),
(2, 'Praha'),
(3, 'Bratislava'),
(4, 'Breclav'),
(5, 'Olomouc'),
(6, 'Vienna'),
(7, 'Dresden'),
(8, 'Budapest'),
(9, 'Liberec'),
(10, 'Plzen'),
(11, 'Zlin'),
(12, 'Most'),
(13, 'Opava'),
(14, 'Jihlava'),
(15, 'Mlada Boleslav'),
(16, 'Berlin'),
(29, 'Zlin');

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `name`, `text`) VALUES
(1, 'post1', 'post 1 text'),
(2, 'post 2', 'post 2 text');

-- --------------------------------------------------------

--
-- Структура таблицы `reservations`
--

CREATE TABLE `reservations` (
  `id` int NOT NULL,
  `trip_id` int NOT NULL,
  `status` set('unpaid','paid','expired','') NOT NULL DEFAULT 'unpaid',
  `user_id` int DEFAULT NULL,
  `number_of_passengers` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `reservations`
--

INSERT INTO `reservations` (`id`, `trip_id`, `status`, `user_id`, `number_of_passengers`) VALUES
(1, 1, 'paid', 8, 1),
(3, 1, 'unpaid', 46, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `route_items`
--

CREATE TABLE `route_items` (
  `id` int NOT NULL,
  `stop_id` int NOT NULL,
  `trip_id` int NOT NULL,
  `position` int NOT NULL,
  `time_from_start` int NOT NULL COMMENT 'The time it takes for the ride to reach a stop after the start of the journey'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `route_items`
--

INSERT INTO `route_items` (`id`, `stop_id`, `trip_id`, `position`, `time_from_start`) VALUES
(9, 2, 1, 0, 10),
(10, 11, 1, 1, 40),
(11, 3, 1, 2, 90),
(12, 2, 2, 0, 10),
(13, 11, 2, 1, 40),
(14, 3, 2, 2, 90),
(15, 4, 2, 3, 100),
(16, 12, 2, 4, 300),
(17, 6, 2, 5, 350),
(18, 2, 5, 0, 10),
(19, 5, 5, 1, 60),
(20, 2, 3, 0, 10),
(21, 11, 3, 1, 40),
(22, 8, 3, 2, 60),
(23, 4, 3, 3, 120),
(24, 3, 3, 4, 130),
(25, 4, 6, 0, 10),
(26, 1, 6, 1, 100),
(27, 2, 6, 2, 110),
(28, 5, 6, 3, 160),
(29, 4, 12, 0, 45),
(30, 3, 12, 1, 55),
(31, 18, 12, 2, 70),
(32, 19, 12, 3, 100),
(33, 1, 11, 0, 40),
(34, 11, 11, 1, 60),
(35, 21, 11, 2, 115),
(36, 3, 11, 3, 160),
(37, 12, 11, 4, 300),
(38, 9, 13, 0, 45),
(39, 5, 13, 1, 90),
(40, 8, 13, 2, 115),
(41, 3, 13, 3, 180);

-- --------------------------------------------------------

--
-- Структура таблицы `stops`
--

CREATE TABLE `stops` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL,
  `city_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `stops`
--

INSERT INTO `stops` (`id`, `name`, `city_id`) VALUES
(1, 'Brno-Hlavni Nadrazi', 1),
(2, 'Brno-Zidenice', 1),
(3, 'Praha-Hlavni Nadrazi', 2),
(4, 'Praha-Florenc ', 2),
(5, 'Vien-Hauptbahnhof ', 6),
(6, 'Dresden-Hauptbahnhof ', 7),
(7, 'Olomouc-Hlavni Nadrazi ', 5),
(8, 'Breclav-Hlavni Nadrazi ', 4),
(9, 'Bratislava-Hlavna Stanica ', 3),
(10, 'Budapest-Keleti ', 8),
(11, 'Jihlava-Nadrazi ', 14),
(12, 'Berlin-Hauptbahnhof ', 16),
(18, 'Nadrazi Opava', 13),
(19, 'Plzen Nadrazi', 10),
(20, 'Nadrazi Liberec', 9),
(21, 'Mlada Boleslav Nadrazi', 15);

-- --------------------------------------------------------

--
-- Структура таблицы `trips`
--

CREATE TABLE `trips` (
  `id` int NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `start_time` timestamp NOT NULL,
  `end_time` timestamp NOT NULL,
  `delay` int NOT NULL,
  `capacity` int NOT NULL,
  `status` set('coming','finished','canceled','') NOT NULL DEFAULT 'coming',
  `carrier_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `trips`
--

INSERT INTO `trips` (`id`, `name`, `start_time`, `end_time`, `delay`, `capacity`, `status`, `carrier_id`) VALUES
(1, 'Brno-Praha', '2021-12-01 15:49:37', '2021-11-01 18:49:37', 0, 60, 'canceled', 1),
(2, 'Brno-Dresden', '2021-12-03 16:51:13', '2021-12-03 20:51:13', 0, 60, 'coming', 2),
(3, 'Brno- Praha ', '2021-12-01 07:18:55', '2021-12-01 08:38:55', 0, 64, 'coming', 2),
(4, 'Brno-Dresden', '2021-11-12 08:15:38', '2021-11-28 14:15:38', 0, 64, 'coming', 2),
(5, 'Brno-Vien', '2021-12-03 22:19:14', '2021-11-28 23:19:14', 0, 64, 'coming', 2),
(6, 'Prague-Vien', '2021-12-14 09:25:52', '2021-11-28 15:25:52', 0, 64, 'coming', 3),
(11, 'Viena - Berlin', '2021-12-12 08:50:19', '2021-12-13 11:50:19', 0, 64, 'coming', 2),
(12, 'Olomouc- Plzen', '2021-11-17 18:51:49', '2021-11-18 18:51:49', 0, 64, 'coming', 3),
(13, 'Budapest- Prague', '2022-01-04 07:19:03', '2022-01-04 10:19:03', 0, 64, 'coming', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `role` set('user','admin','carrier','personnel') NOT NULL DEFAULT 'user',
  `auth_token` text,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `carrier_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `full_name`, `role`, `auth_token`, `is_active`, `carrier_id`) VALUES
(7, 'vlad1023333@gmail.com', '8cb2237d0679ca88db6464eac60da96345513964', 'Vladislav Pastushenko', 'admin', 'f49c177300b3b4e71849a0cfd85fb1e697069be9', 1, NULL),
(8, 'dima@mail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'Dmitriy Koz', 'admin', '96f93dd59943e1fa2afc397c055468f6f62dd1dc', 1, NULL),
(46, 'test@ya.com', 'afc677037be3d92324fa6597d6c1506b534e306b', 'Dimasik 322', 'admin', '31b35e35f2b5fad7a50ca7660bfb491b02889467', 1, NULL),
(48, 'Jegor@mail.ru', 'krasava228', 'Jegor Senichak', 'admin', '990nvvxc', 1, NULL),
(50, 'gomer_simpson@simps.ru', 'donut_is_my_life', 'Gomer Simpson', 'personnel', 'poiuytghn', 1, 2),
(52, 'mongol_mma@gmail.com', 'Uzkie_glaza00', 'Oleg Mongol', 'user', 'erwedwsdxswq', 1, NULL),
(69, 'snezha63@gmail.com', 'afc677037be3d92324fa6597d6c1506b534e306b', 'Snezhana null', 'user', 'bcf494ea9e774f90b8fefd69ebbf7a902ec613ba', 0, NULL),
(70, 'admin@admin.com', '7af2d10b73ab7cd8f603937f7697cb5fe432c7ff', 'Admin null', 'admin', 'f15acc55d315d25ac091385daad6e674cce3ca01', 1, NULL),
(71, 'carrier@carrier.com', '1c8337bc5e269b1e3ece558fb105a4b0b3cf2c07', 'Carrier null', 'carrier', '6db2f880a091a7c692b5ee2b865c0bf28a497863', 1, NULL),
(72, 'personnel@personnel.com', '0abd2804afbc73cb50ef892d26febf2b93a509c8', 'Personnel null', 'personnel', 'b527e2af20d1bb190defb41d830ea1f2d52dbffb', 1, NULL),
(73, 'user@user.com', 'bb70729af79c563675e873ec7d6d3a63cb5dab28', 'User null', 'user', '3513fe4978e2b7c956e9d98e862691bd634ec78b', 1, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `carriers`
--
ALTER TABLE `carriers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trip_id` (`trip_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `route_items`
--
ALTER TABLE `route_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trip_id` (`trip_id`),
  ADD KEY `route_items_ibfk_1` (`stop_id`);

--
-- Индексы таблицы `stops`
--
ALTER TABLE `stops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stops_ibfk_1` (`city_id`);

--
-- Индексы таблицы `trips`
--
ALTER TABLE `trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carrier_id` (`carrier_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `carrier_id` (`carrier_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `carriers`
--
ALTER TABLE `carriers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `route_items`
--
ALTER TABLE `route_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT для таблицы `stops`
--
ALTER TABLE `stops`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `trips`
--
ALTER TABLE `trips`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`trip_id`) REFERENCES `trips` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `route_items`
--
ALTER TABLE `route_items`
  ADD CONSTRAINT `route_items_ibfk_1` FOREIGN KEY (`stop_id`) REFERENCES `stops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `route_items_ibfk_2` FOREIGN KEY (`trip_id`) REFERENCES `trips` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `stops`
--
ALTER TABLE `stops`
  ADD CONSTRAINT `stops_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `trips`
--
ALTER TABLE `trips`
  ADD CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`carrier_id`) REFERENCES `carriers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`carrier_id`) REFERENCES `carriers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
--
-- База данных: `ptransport`
--
CREATE DATABASE IF NOT EXISTS `ptransport` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ptransport`;

-- --------------------------------------------------------

--
-- Структура таблицы `connections`
--

CREATE TABLE `connections` (
  `id` varchar(255) NOT NULL,
  `week_day` int DEFAULT NULL,
  `passengers` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `carrier` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `connections`
--

INSERT INTO `connections` (`id`, `week_day`, `passengers`, `description`, `carrier`, `createdAt`, `updatedAt`) VALUES
('route1', 0, 0, 'station1 -> station2', 'RJ', '2021-11-04 14:13:55', '2021-11-04 14:13:55'),
('route2', 0, 34, 'stantion1 -> station4', 'CD', '2021-11-04 14:13:55', '2021-11-04 14:13:55'),
('route3', 2, 34, 'station4 -> station1', 'CD', '2021-11-04 14:13:55', '2021-11-04 14:13:55');

-- --------------------------------------------------------

--
-- Структура таблицы `rides`
--

CREATE TABLE `rides` (
  `id` int NOT NULL,
  `arrival_time` time DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `current_position` int DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `stationId` int DEFAULT NULL,
  `connectionId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `rides`
--

INSERT INTO `rides` (`id`, `arrival_time`, `order_number`, `current_position`, `createdAt`, `updatedAt`, `stationId`, `connectionId`) VALUES
(1, '18:03:50', 1, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 1, 'route2'),
(2, '18:13:50', 2, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 2, 'route2'),
(3, '21:03:50', 3, 1, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 3, 'route2'),
(4, '23:05:06', 4, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 4, 'route2'),
(5, '20:43:16', 1, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 2, 'route1'),
(6, '23:52:52', 2, 1, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 3, 'route1'),
(7, '23:59:52', 3, 0, '2021-11-04 14:13:55', '2021-11-29 20:49:41', 4, 'route1'),
(8, '09:18:59', 1, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 4, 'route3'),
(9, '09:23:59', 2, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 3, 'route3'),
(10, '10:18:59', 3, 1, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 2, 'route3'),
(11, '11:18:59', 4, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55', 1, 'route3');

-- --------------------------------------------------------

--
-- Структура таблицы `stations`
--

CREATE TABLE `stations` (
  `id` int NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `longtitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `proposed` tinyint(1) DEFAULT '0',
  `approved` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `stations`
--

INSERT INTO `stations` (`id`, `label`, `city`, `longtitude`, `latitude`, `proposed`, `approved`, `createdAt`, `updatedAt`) VALUES
(1, 'station1', 'Brno', '24', '1', 1, 1, '2021-11-04 14:13:55', '2021-11-29 22:05:02'),
(2, 'station2', 'Bratislava', '53', '24', 1, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55'),
(3, 'station3', 'Krakow', '11', '45', 1, 1, '2021-11-04 14:13:55', '2021-11-29 21:39:50'),
(4, 'station4', 'Minsk', '64', '65', 1, 0, '2021-11-04 14:13:55', '2021-11-04 14:13:55'),
(5, 'station5', 'Tokyo', '43.886', '23.4353', 1, 1, '2021-11-29 14:08:57', '2021-11-29 21:21:36');

-- --------------------------------------------------------

--
-- Структура таблицы `tickets`
--

CREATE TABLE `tickets` (
  `id` int NOT NULL,
  `price_category` varchar(255) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `to` varchar(255) DEFAULT NULL,
  `reserved` tinyint(1) DEFAULT '0',
  `paid` tinyint(1) DEFAULT '0',
  `verified` tinyint(1) DEFAULT '0',
  `seat` int NOT NULL,
  `price` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `connectionId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `tickets`
--

INSERT INTO `tickets` (`id`, `price_category`, `from`, `to`, `reserved`, `paid`, `verified`, `seat`, `price`, `email`, `createdAt`, `updatedAt`, `userId`, `connectionId`) VALUES
(1, 'STUDENT', 'station2', 'station4', 0, 0, 0, 1, 123, 'user@proj.com', '2021-11-04 14:13:55', '2021-11-04 14:13:55', 2, 'route2');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `role` varchar(255) DEFAULT 'USER',
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `role`, `email`, `name`, `phone_number`, `password`, `company`, `age`, `createdAt`, `updatedAt`) VALUES
(2, 'USER', 'test@test.com', 'UserUser', '37575335', '$2b$04$Ags2rzcdlFSRvtr/UrTBJuuu9QNjUq7zWKSTsDKhLwGmAvBlMvcxO', NULL, 34, '2021-11-28 23:08:43', '2021-11-28 23:08:43'),
(13, 'ADMIN', 'admin@admin.com', 'AdminAdmin', '88005553535', '$2b$04$4I/vPcNXZRfEQxN3/i2rF.ZTC3ygiToyjiKd0DUAE8c6nxW3Bcw5C', NULL, NULL, '2021-11-29 19:36:35', '2021-11-29 19:36:35'),
(16, 'STAFF', 'test@ddkdi.test', 'mmmb', '12345', '$2b$04$9Jea960t/Ez/Ny2NlKghCORteWYnLCEllS7VAt/MWoP7lCteugzhG', 'CD', NULL, '2021-11-29 21:15:13', '2021-11-29 21:15:13'),
(59, 'CARRIER', 'er@ttt', 'tryy', NULL, '$2b$04$HE9oXNud1WTEyvWMsncPiucQX8Ek/m10P0s8HwD9Pt7EP/2UjBQ1.', 'CD', NULL, '2021-11-29 22:41:46', '2021-11-29 22:41:46'),
(60, 'USER', 'admin@proj.com', 'AdminAdmin', '777777777', '$2b$04$pXgmjuXCi7EZH60CRhhJw.JXhhnJm10V5/H4mzO7JIpJg7wM9xHi.', NULL, NULL, '2021-11-29 23:47:33', '2021-11-29 23:47:33'),
(61, 'USER', 'carrier@proj.com', 'carrier', '666666666', '$2b$04$aI2lm/iOPG0Y1pZnHlzqR.Ep.rhysnDcT31H4StTvc78TBc2bBQCG', NULL, NULL, '2021-11-29 23:48:30', '2021-11-29 23:48:30'),
(62, 'USER', 'staff@proj.com', 'StaffStaff', '888888888', '$2b$04$jIQybsvY3aM30Z9dMPAIl.9KACz6CmZNK/AGXZmPC23a4TDqqjLd6', NULL, NULL, '2021-11-29 23:49:11', '2021-11-29 23:49:11'),
(63, 'USER', 'user@proj.com', 'UserUser', '999999999', '$2b$04$SMcmeSZRxA4kv7PxMStT1ublEm5p2.psZOrm9pi88wmWyp5N7kGqm', NULL, NULL, '2021-11-29 23:49:46', '2021-11-29 23:49:46');

-- --------------------------------------------------------

--
-- Структура таблицы `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int NOT NULL,
  `model` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `license_plate` varchar(255) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `number_of_seats` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `connectionId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `vehicles`
--

INSERT INTO `vehicles` (`id`, `model`, `description`, `license_plate`, `number`, `number_of_seats`, `createdAt`, `updatedAt`, `connectionId`) VALUES
(1, 'tram2', 'tram2, 200hp', 'h798j', 24, 54, '2021-11-04 14:13:55', '2021-11-04 14:13:55', NULL),
(8, 'tram1', 'tram, 100hp, brand new', '1abc3k', 10, 43, '2021-11-29 20:18:19', '2021-11-29 20:18:19', 'route1'),
(9, 'autobus1', 'autobus skoda 345hp', 'с321f', 42, 36, '2021-11-29 20:19:14', '2021-11-29 20:19:14', 'route2');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `connections`
--
ALTER TABLE `connections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `rides`
--
ALTER TABLE `rides`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stationId` (`stationId`),
  ADD KEY `connectionId` (`connectionId`);

--
-- Индексы таблицы `stations`
--
ALTER TABLE `stations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `connectionId` (`connectionId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Индексы таблицы `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `connectionId` (`connectionId`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `rides`
--
ALTER TABLE `rides`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `stations`
--
ALTER TABLE `stations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT для таблицы `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `rides`
--
ALTER TABLE `rides`
  ADD CONSTRAINT `rides_ibfk_1` FOREIGN KEY (`stationId`) REFERENCES `stations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `rides_ibfk_2` FOREIGN KEY (`connectionId`) REFERENCES `connections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`connectionId`) REFERENCES `connections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`connectionId`) REFERENCES `connections` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
