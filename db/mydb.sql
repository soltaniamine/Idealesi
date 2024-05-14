


SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- Table `Niveau`

CREATE TABLE IF NOT EXISTS `mydb`.`Niveau` (
  `Nom` VARCHAR(1024) NOT NULL,
  `Niveau_ID` INT NOT NULL AUTO_INCREMENT,
  `Cycle` ENUM("Cycle Preparatoire", "Cycle superieur"),
  UNIQUE INDEX `Nom_UNIQUE` (`Nom` ASC) VISIBLE,
  PRIMARY KEY (`Niveau_ID`),
  UNIQUE INDEX `Niveau_ID_UNIQUE` (`Niveau_ID` ASC) VISIBLE)
ENGINE = InnoDB;


-- Table `Module`

CREATE TABLE IF NOT EXISTS `mydb`.`Module` (
`Module_ID` INT NOT NULL AUTO_INCREMENT,
`Nom` VARCHAR(1024) NOT NULL,
`Niveau_ID` INT NOT NULL,
PRIMARY KEY (`Module_ID`),
CONSTRAINT `Niveau_ID_Module`
FOREIGN KEY (`Niveau_ID`)
REFERENCES `mydb`.`Niveau`(`Niveau_ID`)
ON DELETE CASCADE
)

ENGINE = InnoDB;

-- Table `Prof`

CREATE TABLE IF NOT EXISTS `mydb`.`Prof` (
`Prof_ID` INT NOT NULL AUTO_INCREMENT,
`Nom` VARCHAR(1024) NOT NULL,
`email` VARCHAR(1024) NOT NULL,
PRIMARY KEY (`Prof_ID`),
UNIQUE INDEX `Prof_ID_UNIQUE` (`Prof_ID` ASC) VISIBLE,
UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;

-- Table `ListeProf`

CREATE TABLE IF NOT EXISTS `mydb`.`ListeProf` (
`Prof_ID` INT NOT NULL,
`Module_ID` INT NOT NULL,
PRIMARY KEY (Prof_ID, Module_ID),
CONSTRAINT `Prof_ID_ListeProf`
FOREIGN KEY (`Prof_ID`)
REFERENCES `mydb`.`Prof`(`Prof_ID`)
ON DELETE CASCADE,
CONSTRAINT `Module_ID_ListeProf`
FOREIGN KEY (`Module_ID`)
REFERENCES `mydb`.`Module`(`Module_ID`)
ON DELETE CASCADE
)
ENGINE = InnoDB;

-- Table `Club`

CREATE TABLE IF NOT EXISTS `mydb`.`Club` (
`Club_ID` INT NOT NULL AUTO_INCREMENT,
`Nom` VARCHAR(1024) NOT NULL,
`photo` VARCHAR(1024) null,
PRIMARY KEY (`Club_ID`),
UNIQUE INDEX `Club_ID_UNIQUE` (`Club_ID` ASC) VISIBLE,
UNIQUE INDEX `Nom_UNIQUE` (`Nom` ASC) VISIBLE)
ENGINE = InnoDB
PACK_KEYS = Default;

-- Table `evenements`

CREATE TABLE IF NOT EXISTS `mydb`.`evenements` (
`evenement_ID` INT NOT NULL AUTO_INCREMENT,
`Nom` VARCHAR(1024) NOT NULL,
`photo` VARCHAR(1024) Null ,
`Club_ID` INT ,
PRIMARY KEY (`evenement_ID`),
CONSTRAINT `Club_ID_evenements`
FOREIGN KEY (`Club_ID`)
REFERENCES `mydb`.`Club` (`Club_ID`)
ON DELETE SET NULL
)
ENGINE = InnoDB;

-- Table `ProjetMembers`

CREATE TABLE IF NOT EXISTS `mydb`.`ProjetMembers` (
`User_ID` INT NOT NULL,
`Projet_ID` INT NOT NULL,
`Favori` BOOLEAN DEFAULT FALSE,
`Access` ENUM("Admin", "Guest", "Mod") NOT NULL DEFAULT 'Mod',
PRIMARY KEY (`Projet_ID`, `User_ID`),
CONSTRAINT `Projet_ID_ProjetMembers`
FOREIGN KEY (`Projet_ID`)
REFERENCES `mydb`.`Projet`(`Projet_ID`)
ON DELETE CASCADE,
CONSTRAINT `User_ID_ProjetMembers`
FOREIGN KEY (`User_ID`)
REFERENCES `mydb`.`Utilisateur`(`User_ID`)
ON DELETE CASCADE
)
ENGINE = InnoDB;

-- Table `Projet`

CREATE TABLE IF NOT EXISTS `mydb`.`Projet` (
`Projet_ID` INT NOT NULL AUTO_INCREMENT,
`nom` VARCHAR(512) NOT NULL,
`Niveau_ID` INT,
`Module_ID` INT ,
`Club_ID` INT ,
`Tech_idiation` ENUM("Brainstorming", "Brainwriting") NOT NULL,
`date_creation` DATETIME,
PRIMARY KEY (`Projet_ID`),

UNIQUE INDEX `Projet_ID_UNIQUE` (`Projet_ID` ASC) VISIBLE,
UNIQUE INDEX `nom_UNIQUE` (`nom` ASC) VISIBLE,
INDEX `Niveau_ID_idx` (`Niveau_ID` ASC) VISIBLE,
INDEX `Module_ID_idx` (`Module_ID` ASC) VISIBLE,
INDEX `Club_ID_idx` (`Club_ID` ASC) VISIBLE,

CONSTRAINT `Niveau_ID_projet`
FOREIGN KEY (`Niveau_ID`)
REFERENCES `mydb`.`Niveau` (`Niveau_ID`)
ON DELETE SET NULL,
CONSTRAINT `Module_ID_projet`
FOREIGN KEY (`Module_ID`)
REFERENCES `mydb`.`Module` (`Module_ID`)
ON DELETE SET NULL,
CONSTRAINT `Club_ID_projet`
FOREIGN KEY (`Club_ID`)
REFERENCES `mydb`.`Club` (`Club_ID`)
ON DELETE SET NULL)

ENGINE = InnoDB;

-- Table `Utilisateur`

CREATE TABLE IF NOT EXISTS `mydb`.`Utilisateur` (
`User_ID` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(512) NOT NULL,
`Photo` VARCHAR(1024) Null ,
`email` VARCHAR(1024) NOT NULL,
`Password` VARCHAR(1024) NOT NULL,

`verifycode` INT NULL ,
`verified` BOOLEAN NOT NULL DEFAULT false,
`Type` ENUM("Utilisateur","Prof", "Administrateur") NOT NULL DEFAULT "Utilisateur",
PRIMARY KEY (`User_ID`),
UNIQUE INDEX `User_ID_UNIQUE` (`User_ID` ASC) VISIBLE,
UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)

ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Insérer des niveaux
INSERT INTO `mydb`.`Niveau` (`Nom`, `Cycle`) VALUES 
('1CP', 'Cycle Preparatoire'),
('2CP', 'Cycle Preparatoire'),
('1CS', 'Cycle superieur'),
('2CS', 'Cycle superieur'),
('3CS', 'Cycle superieur');

-- Insérer des modules
INSERT INTO `mydb`.`Module` (`Nom`, `Niveau_ID`) VALUES 
('Algèbre 1', 1),
('Algèbre 2', 1),
('Algorithmique et Structure de données dynamique', 1),
('Algorithmique et Structures de Données Statiques', 1),
('Analyse mathématique 1', 1),
('Analyse 2', 1),
('Anglais 1', 1),
('Architectures des ordinateurs 1', 1),
('Bureautique et Web', 1),
('Électricité', 1),
('Electronique fondamentale 1', 1),
('Mécanique du point', 1),
('Introduction au Système d exploitation 1', 1),
('Introduction aux systèmes d exploitation 2', 1),
('Technique d expression écrite', 1),
('Techniques d expression orale', 1),

('Algèbre 3', 2),
('Analyse 3', 2),
('Analyse 4', 2),
('Anglais 2', 2),
('Anglais 3', 2),
('Architecture des ordinateurs 2', 2),
('Economie', 2),
('Electronique fondamentale 2', 2),
('Logique Mathématique', 2),
('Optique et Ondes électromagnétiques', 2),
('Programmation Orientée Objet', 2),
('Projet Pluridisciplinaire', 2),
('Probabilités et statistiques', 2),
('Probabilités et Statistiques 2', 2),
('Structure Fichiers et Structures de Données', 2),
('Introduction aux systèmes d information', 2),

('Analyse Numérique', 3),
('Architecture', 3),
('Bases de données', 3),
('Conduite de projets', 3),
('Introduction au génie logiciel', 3),
('Langue anglaise 1', 3),
('Langue anglaise 2', 3),
('Méthodologies d analyse et conception de systèmes', 3),
('Analyse des organisations', 3),
('Projet', 3),
('Réseaux 1', 3),
('Réseaux 2', 3),
('Recherche Opérationnelle: graphes et algorithmes', 3),
('Introduction à la sécurité informatique', 3),
('Systèmes d exploitation 1', 3),
('Systèmes d exploitation 2', 3),
('Théorie des langages de programmation et applications', 3);



-- Insert User 1 (Utilisateur)
INSERT INTO Utilisateur (username, email, Password, Type)
VALUES ('user1', 'user1@example.com', 'hashed_password1', 'Utilisateur');

-- Insert User 2 (Prof)
INSERT INTO Utilisateur (username, email, Password, Type)
VALUES ('professor', 'professor@example.com', 'hashed_password2', 'Prof');

-- Insert User 3 (Administrateur)
INSERT INTO Utilisateur (username, email, Password, Type,verified)
VALUES ('admin', 'idealesi@esi.dz', 'scrypt:32768:8:1$dQiWyXLza0BjhZbP$c8ca20508212739b969ab4474c8676010d109c7e2f480fd6356a7db134d7725b1002b82ec7e2881042fc78021e0ef4c63b4efa56b729dcb43ab53f7fa7e7654d', 'Administrateur',True);

