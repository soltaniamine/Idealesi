DROP DATABASE IF EXISTS `test`;
CREATE DATABASE `test`; 
USE `test`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;
CREATE TABLE `projet` (
  `projet_id` int NOT NULL auto_increment,
  `nom` varchar(512) NOT NULL,
  `niveau_id` int NOT NULL,
  `module_id` int,
  `club_id` int ,
  `Tech_idiation` ENUM("Brainstorming", "Brainwriting") NOT NULL,
  `Favori` BOOlEAN  Default FALSE,
 
  PRIMARY KEY (`projet_id`)
) ENGINE=InnoDB;


CREATE TABLE `ProjetMembers` (
  `projetmembers_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `projet_id` INT NULL,
  `access` ENUM("Admin", "Guest", "Mod") NOT NULL DEFAULT 'Mod',
  PRIMARY KEY (`projetmembers_id`)
  )
ENGINE = InnoDB;


