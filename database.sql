CREATE DATABASE  IF NOT EXISTS `gonzagagrubguides` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gonzagagrubguides`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gonzagagrubguides
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `name` varchar(255) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `food_type` varchar(15) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES ('Dominos','532 N Hamilton ','509-484-8641','Pizza','Better Pizza better ingredients pappa johns','Dominos.jpg'),('FroYo Earth','829 E Boone Ave','509-315-5034','Frozen Yogurt','Spokane\'s premier frozen yogurt destination!','FroYo Earth.jpg'),('Frugals','1229 N Hamilton St, Spokane, WA 99202','509-242-3669','Burgers','We make goood food for all Gonzaga students to enjoy!','5YO7ry6u0f.png'),('Jimmy John\'s','105 E Mission Ave, Spokane WA 99202','509-327-3278','Sandwiches','We are here for Gonzaga students to come if they want','jimmy-johns-menu.png'),('McDonalds','1617 N Hamilton St','509-484-8641','American','I\'m Lovin it!','McDonalds.jpg'),('Pita Pit','818 E Sharp Ave, Spokane WA 99202','509-483-7482','Veggies','We provide a healthy alternative for Gonzaga Students to eat!','Pita_Pit_restaurant.jpg'),('Pizza Pipeline','1403 N Division St, Spokane WA 99202','509-326-6412','Pizza','We make the best food for all Gonzaga students to devour!','ls.jpg'),('Qdoba','1117 N Dakota, Spokane WA 99206','509-313-7216','Burrito','We provide close food for all Gonzaga Studnets to swallow!','OIP.jpg');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  KEY `name` (`name`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`name`) REFERENCES `restaurant` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'Pita Pit',1,'Bad','Pita_Pit_restaurant'),(2,'Pita Pit',2,'Not Good','Pita_Pit_restaurant.jpg'),(3,'Pita Pit',3,'Mid','Pita_Pit_restaurant.jpg'),(4,'Pita Pit',4,'Good','Pita_Pit_restaurant.jpg'),(5,'Pita Pit',5,'This is the most immaculate food I have ever tasted, swallowed, and dissolved in my life','Pita_Pit_restaurant.jpg'),(6,'Frugals',4,'Great burgers',''),(7,'Jimmy John\'s',5,'Super fast service!',''),(8,'Pizza Pipeline',3,'Great pizza, pasta wasnt good',''),(9,'Qdoba',4,'Burrito was fine perfectly folded.',''),(11,'Dominos',5,'Geat food.',''),(12,'McDonalds',NULL,NULL,NULL),(13,'FroYo Earth',NULL,NULL,NULL);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-14 21:46:24
