CREATE DATABASE  IF NOT EXISTS `pj.aw` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8 */;
USE `pj.aw`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: pj.aw
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(30) DEFAULT NULL,
  `usuario` varchar(16) DEFAULT NULL,
  `accion` text,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (1,'::1','7512648','salió del sistema','2019-02-03 00:09:39'),(2,'::1','7512648','salió del sistema','2019-02-03 00:14:33'),(3,'::1','7512648','salió del sistema','2019-02-03 00:20:14'),(4,'::1','7512648','salió del sistema','2019-02-03 00:21:08'),(5,'::1','7512648','salió del sistema','2019-02-03 00:21:32'),(6,'::1','7512648','salió del sistema','2019-02-03 00:22:14'),(7,'::1','7512648','salió del sistema','2019-02-03 00:23:33'),(8,'::1','7512648','salió del sistema','2019-02-03 04:45:24'),(9,'::1','7512648','salió del sistema','2019-02-03 05:09:59'),(10,'::1','7512648','salió del sistema','2019-02-03 15:54:24'),(11,'::1','7512648','salió del sistema','2019-02-03 16:01:41'),(12,'::1','7512648','salió del sistema','2019-02-03 16:11:18'),(13,'::1','7512648','salió del sistema','2019-02-03 16:15:37'),(14,'::1','7512648','salió del sistema','2019-02-03 23:21:07'),(15,'::1','7512648','Imprimió Logs','2019-02-04 08:45:40'),(16,'::1','7512648','Imprimió Logs','2019-02-04 08:48:33'),(17,'::1','7512648','Imprimió Logs','2019-02-04 08:49:43'),(18,'::1','7512648','Imprimió Logs','2019-02-04 08:50:16'),(19,'::1','7512648','Imprimió Logs','2019-02-04 08:50:56'),(20,'::1','7512648','Imprimió Logs','2019-02-04 08:51:47'),(21,'::1','7512648','salió del sistema','2019-02-04 08:52:31'),(22,'::1','7512648','salió del sistema','2019-02-04 08:53:31'),(23,'::1','7512648','INGRESÓ AL SISTEMA','2019-02-04 08:53:37'),(24,'::1','7512648','Observó los muncipios de undefined','2019-02-04 08:59:43'),(25,'::1','7512648','Observó los muncipios de undefined','2019-02-04 08:59:45'),(26,'::1','7512648','Imprimió Logs','2019-02-04 09:02:11'),(27,'::1','7512648','Observó los muncipios de CULPINA','2019-02-04 09:02:18'),(28,'::1','7512648','Observó todoso los muncipios y registros de la region NORTE','2019-02-04 09:02:20'),(29,'::1','7512648','salió del sistema','2019-02-04 09:03:26');
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipios`
--

DROP TABLE IF EXISTS `municipios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `municipios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(500) DEFAULT NULL,
  `region` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipios`
--

LOCK TABLES `municipios` WRITE;
/*!40000 ALTER TABLE `municipios` DISABLE KEYS */;
INSERT INTO `municipios` VALUES (1,'PADILLA','CENTRO'),(2,'TOMINA','CENTRO'),(3,'SOPACHUY','CENTRO'),(4,'ALCALA','CENTRO'),(5,'TARVITA','CENTRO'),(6,'VILLA SERRANO','CENTRO'),(7,'AZURDUY','CENTRO'),(8,'EL VILLAR','CENTRO'),(9,'MACHARETI','CHACO'),(10,'MONTEAGUDO','CHACO'),(11,'HUACAYA','CHACO'),(12,'HUACARETA','CHACO'),(13,'MUYUPAMPA(VACA GUSMAN)','CHACO'),(15,'SUCRE','NORTE'),(16,'TARABUCO','NORTE'),(17,'YOTALA','NORTE'),(18,'ZUDAÑEZ','NORTE'),(19,'YAMPAREZ','NORTE'),(20,'ICLA','NORTE'),(21,'PRESTO','NORTE'),(22,'POROMA','NORTE'),(23,'MOJOCOYA','NORTE'),(24,'CULPINA','CINTIS'),(25,'HINCA HUASI','CINTIS'),(26,'VILLA AVECIA','CINTIS'),(27,'VILLA CHARCAS','CINTIS'),(28,'CAMARGO','CINTIS'),(29,'SAN LUCAS','CINTIS'),(30,'LAS CARRERAS','CINTIS');
/*!40000 ALTER TABLE `municipios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `observaciones`
--

DROP TABLE IF EXISTS `observaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `observaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observaciones` varchar(500) DEFAULT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  `registro_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `observaciones`
--

LOCK TABLES `observaciones` WRITE;
/*!40000 ALTER TABLE `observaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `observaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registros`
--

DROP TABLE IF EXISTS `registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `registros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ruos` varchar(7) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `comunidad` varchar(500) DEFAULT NULL,
  `fecha_acta` datetime DEFAULT NULL,
  `responsable` varchar(500) DEFAULT NULL,
  `municipio_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (5,'sfdsf','JUNTA VECINAL','sdfsdfsdf','2017-12-30 00:00:00','sdfdsfsddf',28),(9,'333333','JUNTA VECINAL','daslkdsakj','2016-11-28 00:00:00','asmsakdasdlkasdlasd',-1),(10,'5436','CENTRALÍA','asddsfs','2019-02-03 15:33:03','dfdsfdsdsfds',8),(11,'8889','CENTRALÍA','hhhhhhh','2019-02-15 00:00:00','hhhhjlklklklñklñkkñl',24);
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8 ;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'7512648','erlinda','ROOT',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pj.aw'
--

--
-- Dumping routines for database 'pj.aw'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-04  9:38:14
