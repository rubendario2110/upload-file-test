-- MySQL Script generated by MySQL Workbench
-- mar 17 nov 2020 21:24:02 -05
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema postcodes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema postcodes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `postcodes` ;
USE `postcodes` ;

-- -----------------------------------------------------
-- Table `postcodes`.`postcodes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `postcodes`.`postcodes` (
  `idpostcodes` INT NOT NULL AUTO_INCREMENT,
  `lat` VARCHAR(45) NULL,
  `log` VARCHAR(45) NULL,
  `code` VARCHAR(45) NULL,
  PRIMARY KEY (`idpostcodes`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
