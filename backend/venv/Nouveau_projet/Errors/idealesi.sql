SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DROP DATABASE IF EXISTS `mydb`;
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- Table `Niveau`

CREATE TABLE IF NOT EXISTS `mydb`.`Niveau` (
  `Nom` VARCHAR(1024) NOT NULL,
  `Niveau_ID` INT NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `Nom_UNIQUE` (`Nom` ASC) VISIBLE,
  PRIMARY KEY (`Niveau_ID`),
  UNIQUE INDEX `Niveau_ID_UNIQUE` (`Niveau_ID` ASC) VISIBLE)
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
  `ListeProf_ID` INT NOT NULL AUTO_INCREMENT,
  `Prof_ID` INT NULL,
  PRIMARY KEY (`ListeProf_ID`),
  UNIQUE INDEX `ListeProf_ID_UNIQUE` (`ListeProf_ID` ASC) VISIBLE,
  INDEX `Prof_ID_idx` (`Prof_ID` ASC) VISIBLE,
  CONSTRAINT `Prof_ID`
    FOREIGN KEY (`Prof_ID`)
    REFERENCES `mydb`.`Prof` (`Prof_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Table `Module`

CREATE TABLE IF NOT EXISTS `mydb`.`Module` (
  `Module_ID` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(1024) NOT NULL,
  `listeProf_ID` INT NOT NULL,
  PRIMARY KEY (`Module_ID`),
  UNIQUE INDEX `Module_ID_UNIQUE` (`Module_ID` ASC) VISIBLE,
  UNIQUE INDEX `Nom_UNIQUE` (`Nom` ASC) VISIBLE,
  INDEX `ListeProf_ID_idx` (`listeProf_ID` ASC) VISIBLE,
  CONSTRAINT `ListeProf_ID`
    FOREIGN KEY (`listeProf_ID`)
    REFERENCES `mydb`.`ListeProf` (`ListeProf_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Table `Club`

CREATE TABLE IF NOT EXISTS `mydb`.`Club` (
  `Club_ID` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`Club_ID`),
  UNIQUE INDEX `Club_ID_UNIQUE` (`Club_ID` ASC) VISIBLE,
  UNIQUE INDEX `Nom_UNIQUE` (`Nom` ASC) VISIBLE)
ENGINE = InnoDB
PACK_KEYS = Default;

-- Table `ListeProjet`

CREATE TABLE IF NOT EXISTS `mydb`.`ListeProjet` (
  `ListeProjet_ID` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(1024) NOT NULL,
  PRIMARY KEY (`ListeProjet_ID`),
  UNIQUE INDEX `ListeProjet_ID_UNIQUE` (`ListeProjet_ID` ASC) VISIBLE,
  UNIQUE INDEX `Nom_UNIQUE` (`Nom` ASC) VISIBLE)
ENGINE = InnoDB;

-- Table `ProjetMembers`

CREATE TABLE IF NOT EXISTS `mydb`.`ProjetMembers` (
  `ProjetMembers_ID` INT NOT NULL AUTO_INCREMENT,
  `User_ID` INT NOT NULL,
  `Projet_ID` INT NULL,
  `Access` ENUM("Admin", "Guest", "Mod") NOT NULL DEFAULT 'Mod',
  `Favori` BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`ProjetMembers_ID`),
  UNIQUE INDEX `ProjetMembers_ID_UNIQUE` (`ProjetMembers_ID` ASC) VISIBLE,
  INDEX `Projet_ID_idx` (`Projet_ID` ASC) VISIBLE,
  CONSTRAINT `Projet_ID`
    FOREIGN KEY (`Projet_ID`)
    REFERENCES `mydb`.`Projet` (`Projet_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- Table `Projet`

CREATE TABLE IF NOT EXISTS `mydb`.`Projet` (
  `Projet_ID` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(512) NOT NULL,
  `Niveau_ID` INT NOT NULL,
  `Module_ID` INT ,
  `Club_ID` INT ,
  `ListeProjet_ID` INT ,
  `Tech_idiation` ENUM("Brainstorming", "Brainwriting") NOT NULL,
  `ProjetMembers_ID` INT NOT NULL,
  PRIMARY KEY (`Projet_ID`),
  UNIQUE INDEX `Projet_ID_UNIQUE` (`Projet_ID` ASC) VISIBLE,
  UNIQUE INDEX `nom_UNIQUE` (`nom` ASC) VISIBLE,
  INDEX `Niveau_ID_idx` (`Niveau_ID` ASC) VISIBLE,
  INDEX `Module_ID_idx` (`Module_ID` ASC) VISIBLE,
  INDEX `Club_ID_idx` (`Club_ID` ASC) VISIBLE,
  INDEX `ListeProjet_ID_idx` (`ListeProjet_ID` ASC) VISIBLE,
  INDEX `ProjetMembers_ID_idx` (`ProjetMembers_ID` ASC) VISIBLE,
  CONSTRAINT `Niveau_ID`
    FOREIGN KEY (`Niveau_ID`)
    REFERENCES `mydb`.`Niveau` (`Niveau_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Module_ID`
    FOREIGN KEY (`Module_ID`)
    REFERENCES `mydb`.`Module` (`Module_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Club_ID`
    FOREIGN KEY (`Club_ID`)
    REFERENCES `mydb`.`Club` (`Club_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ListeProjet_ID`
    FOREIGN KEY (`ListeProjet_ID`)
    REFERENCES `mydb`.`ListeProjet` (`ListeProjet_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ProjetMembers_ID`
    FOREIGN KEY (`ProjetMembers_ID`)
    REFERENCES `mydb`.`ProjetMembers` (`ProjetMembers_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;







-- Table `Utilisateur`

CREATE TABLE IF NOT EXISTS `mydb`.`Utilisateur` (
  `User_ID` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(512) NOT NULL,
  `Prenom` VARCHAR(512) NOT NULL,
  `Photo` BLOB NULL,
  `email` VARCHAR(1024) NOT NULL,
  `Password` VARCHAR(1024) NOT NULL,
  `Type` ENUM("Utilisateur", "Prof", "Administrateur") NOT NULL DEFAULT 'Utilisateur',
  PRIMARY KEY (`User_ID`),
  UNIQUE INDEX `User_ID_UNIQUE` (`User_ID` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;

-- Table `Reaction`

CREATE TABLE IF NOT EXISTS `mydb`.`Reaction` (
  `Reaction_ID` INT NOT NULL AUTO_INCREMENT,
  `User_ID` INT NOT NULL,
  `Nom` VARCHAR(1024) NULL,
  `Idee_ID` INT NOT NULL,
  PRIMARY KEY (`Reaction_ID`),
  UNIQUE INDEX `Reaction_ID_UNIQUE` (`Reaction_ID` ASC) VISIBLE,
  INDEX `User_ID_idx` (`User_ID` ASC) VISIBLE,
  INDEX `Idee_ID_idx` (`Idee_ID` ASC) VISIBLE,
  CONSTRAINT `User_ID`
    FOREIGN KEY (`User_ID`)
    REFERENCES `mydb`.`Utilisateur` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Idee_ID`
    FOREIGN KEY (`Idee_ID`)
    REFERENCES `mydb`.`Idee` (`Idee_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Table `Idee`

CREATE TABLE IF NOT EXISTS `mydb`.`Idee` (
  `Idee_ID` INT NOT NULL AUTO_INCREMENT,
  `User_ID` INT NOT NULL,
  `Contenu` VARCHAR(2048) NULL,
  `X` VARCHAR(256) NULL,
  `Y` VARCHAR(256) NULL,
  `Type` ENUM("StickyNote", "Rectangle") NOT NULL DEFAULT 'StickyNote',
  `Vote` INT NULL,
  `Feedback` VARCHAR(2048) NULL,
  `Reaction_ID` INT NULL,
  `Projet_ID` INT NOT NULL,
  PRIMARY KEY (`Idee_ID`),
  UNIQUE INDEX `Idee_ID_UNIQUE` (`Idee_ID` ASC) VISIBLE,
  UNIQUE INDEX `X_UNIQUE` (`X` ASC) VISIBLE,
  UNIQUE INDEX `Y_UNIQUE` (`Y` ASC) VISIBLE,
  INDEX `User_ID_idx` (`User_ID` ASC) VISIBLE,
  INDEX `Projet_ID_idx` (`Projet_ID` ASC) VISIBLE,
  INDEX `Reaction_ID_idx` (`Reaction_ID` ASC) VISIBLE,
  CONSTRAINT `User_ID`
    FOREIGN KEY (`User_ID`)
    REFERENCES `mydb`.`Utilisateur` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Projet_ID`
    FOREIGN KEY (`Projet_ID`)
    REFERENCES `mydb`.`Projet` (`Projet_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Reaction_ID`
    FOREIGN KEY (`Reaction_ID`)
    REFERENCES `mydb`.`Reaction` (`Reaction_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- Table `Commentaire`

CREATE TABLE IF NOT EXISTS `mydb`.`Commentaire` (
  `Commentaire_ID` INT NOT NULL AUTO_INCREMENT,
  `User_ID` INT NOT NULL,
  `Contenu` VARCHAR(2048) NULL,
  `X` VARCHAR(256) NULL,
  `Y` VARCHAR(256) NULL,
  `Reaction_ID` INT NULL,
  PRIMARY KEY (`Commentaire_ID`),
  UNIQUE INDEX `Commentaire_ID_UNIQUE` (`Commentaire_ID` ASC) VISIBLE,
  UNIQUE INDEX `X_UNIQUE` (`X` ASC) VISIBLE,
  UNIQUE INDEX `Y_UNIQUE` (`Y` ASC) VISIBLE,
  INDEX `User_ID_idx` (`User_ID` ASC) VISIBLE,
  INDEX `Reaction_ID_idx` (`Reaction_ID` ASC) VISIBLE,
  CONSTRAINT `User_ID`
    FOREIGN KEY (`User_ID`)
    REFERENCES `mydb`.`Utilisateur` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Reaction_ID`
    FOREIGN KEY (`Reaction_ID`)
    REFERENCES `mydb`.`Reaction` (`Reaction_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- Table `Chat`

CREATE TABLE IF NOT EXISTS `mydb`.`Chat` (
  `User_ID` INT NOT NULL,
  `Contenu` VARCHAR(2048) NULL,
  `Reaction_ID` INT NULL,
  INDEX `User_ID_idx` (`User_ID` ASC) VISIBLE,
  INDEX `Reaction_ID_idx` (`Reaction_ID` ASC) VISIBLE,
  CONSTRAINT `User_ID`
    FOREIGN KEY (`User_ID`)
    REFERENCES `mydb`.`Utilisateur` (`User_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Reaction_ID`
    FOREIGN KEY (`Reaction_ID`)
    REFERENCES `mydb`.`Reaction` (`Reaction_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)



ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
