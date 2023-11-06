-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 06 Lis 2023, 12:38
-- Wersja serwera: 10.4.25-MariaDB
-- Wersja PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `node`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `form_data`
--

CREATE TABLE `form_data` (
  `id` int(11) NOT NULL,
  `name` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subject` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `form_data`
--

INSERT INTO `form_data` (`id`, `name`, `email`, `subject`, `content`) VALUES
(1, 'Imię', 'wp@wp.pl', 'sub2', 'Pole pole łyse pole'),
(2, 'Jan', 'jan@wp.pl', 'Temat 1', 'v54h5h54nhe45snw');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `surname` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `email`) VALUES
(1, 'Jan', 'Kowalski', 'jan.kowalski@example.com'),
(2, 'Anna', 'Nowak', 'anna.nowak@example.com'),
(3, 'Piotr', 'Dąbrowski', 'piotr.dabrowski@example.com'),
(4, 'Maria', 'Wójcik', 'maria.wojcik@example.com'),
(5, 'Krzysztof', 'Kowalczyk', 'krzysztof.kowalczyk@example.com'),
(6, 'Magdalena', 'Kamińska', 'magdalena.kaminska@example.com'),
(7, 'Andrzej', 'Lewandowski', 'andrzej.lewandowski@example.com'),
(8, 'Alicja', 'Zielińska', 'alicja.zielinska@example.com'),
(9, 'Tomasz', 'Szymański', 'tomasz.szymanski@example.com'),
(10, 'Katarzyna', 'Woźniak', 'katarzyna.wozniak@example.com');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(70) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hoursAWeek` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `hoursAWeek`) VALUES
(1, 'Matematyka', 4),
(2, 'Język polski', 5),
(3, 'Historia', 3),
(4, 'Chemia', 4),
(5, 'Fizyka', 4),
(6, 'Biologia', 3),
(7, 'Informatyka', 2),
(8, 'Geografia', 3),
(9, 'Wychowanie fizyczne', 2),
(10, 'Angielski', 4);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `form_data`
--
ALTER TABLE `form_data`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `form_data`
--
ALTER TABLE `form_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT dla tabeli `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
