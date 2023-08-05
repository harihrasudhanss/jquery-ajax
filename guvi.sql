-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2023 at 10:26 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guvi`
--

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `qualification` varchar(15) NOT NULL,
  `specification` varchar(20) NOT NULL,
  `college` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `look` varchar(15) NOT NULL,
  `role` varchar(50) NOT NULL,
  `experience` varchar(10) NOT NULL,
  `relocation` varchar(10) NOT NULL,
  `place` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`id`, `email`, `qualification`, `specification`, `college`, `date`, `look`, `role`, `experience`, `relocation`, `place`) VALUES
(1, 'gsmedia@gmail.com', '', '', '', '0000-00-00', '', '', '', '', ''),
(2, 'athesh@gmail.com', '', '', '', '0000-00-00', '', '', '', '', ''),
(3, 'suriya@gmail.com', 'vcrd', 'hguygvgjv', 'mhbh', '2023-06-29', 'intership', 'android app development', 'Junior', 'yes', 'coimbatore');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `FirstName`, `LastName`, `phone`, `email`, `password`) VALUES
(1, 'hariharasudhan', 's', '2147483647', 'hari@gmail.com', '8778370145'),
(2, 'hariharasudhan', 's', '2147483647', 'hari@gmail.com', '8778370145'),
(3, 'hariharasudhan', 's', '2147483647', 'hari@gmail.com', '8778370145'),
(4, 'hariharasudhan', 's', '2147483647', 'hari@gmail.com', '8778370145'),
(5, 'hariharasudhan', 's', '2147483647', 'hari@gmail.com', '8778370145'),
(6, 'hariharasudhan', 's', '2147483647', 'hari@gmail.com', '8778370145'),
(7, 'senthil', 'kumar', '8778370145', 'senthil@gmail.com', '8778370145'),
(8, 'selvinayakam', 's', '9688821181', 'selva@gmail.com', '9688821181'),
(9, 'sagi', 's', '8778370145', 'sagu@gmail.com', '8778370145'),
(10, 'mango', 'lsg', '9524052065', 'mango@gmail.com', '8778370145'),
(11, 'mango', 's', '8778370145', 'hari@gmail.cp', '8778370145'),
(12, 'mango', 's', '9524052065', 'hari@gmail.com', '8778370145'),
(13, 'hariharasudhan', 's', '8778370145', 'hari@gmail.com', '8778370145'),
(14, 'hariharasudhan', 'NJN', '8778370145', 'hari@gmail.com', '8778370145'),
(15, 'gs', 'media', '8778370145', 'gsmedia@gmail.com', '9524052065'),
(16, 'athesh', 'nataraj', '7894561230', 'athesh@gmail.com', 'atheshathesh'),
(17, 'jaya', 'surihya', '9524052065', 'suriya@gmail.com', '8778370145');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `details`
--
ALTER TABLE `details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
