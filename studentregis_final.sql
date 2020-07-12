-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.30-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for studentregis
CREATE DATABASE IF NOT EXISTS `studentregis` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `studentregis`;

-- Dumping structure for table studentregis.address
CREATE TABLE IF NOT EXISTS `address` (
  `addressID` varchar(45) NOT NULL,
  `homeNO` varchar(10) NOT NULL,
  `building` varchar(20) DEFAULT NULL,
  `village` varchar(20) DEFAULT NULL,
  `moo` varchar(3) DEFAULT NULL,
  `roomNO` varchar(5) DEFAULT NULL,
  `alley` varchar(20) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  `subdistrict` varchar(20) NOT NULL,
  `district` varchar(20) NOT NULL,
  `provience` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `postcode` varchar(10) NOT NULL,
  PRIMARY KEY (`addressID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.address: ~13 rows (approximately)
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`addressID`, `homeNO`, `building`, `village`, `moo`, `roomNO`, `alley`, `street`, `subdistrict`, `district`, `provience`, `country`, `postcode`) VALUES
	('001', '44/4', NULL, NULL, '2', NULL, NULL, NULL, 'ตรอกนอง', 'ขลุง', 'จันทบุรี', 'ไทย', '22110'),
	('002', '57', 'สุขวัฒน์อพาร์ทเมนท์ ', NULL, NULL, 'C-211', 'ประชาอุทิศ45', 'ประชาอุทิศ', 'บางมด', 'ทุ่งครุ', 'กรุงเทพฯ', 'ไทย', '10140'),
	('003', '42', NULL, NULL, '5', NULL, NULL, NULL, 'มะขาม', 'มะขาม', 'จันทบุรี', 'ไทย', '22110'),
	('4be73a8197c3615b823ce9383f40d638b95beb64', '5555', 'NULL', 'NULL', 'NUL', 'NULL', '-', '126 Pracha Uthit Rd.', 'ฟหก', 'ฟหกฟ', 'ไไไๆ', 'NULL', '10140'),
	('5817457d0b6826171a1d8cb31e8ad24beee57a0f', '45645', 'NULL', 'NULL', 'NUL', 'NULL', '-', '-', 'ตน', 'ขล', 'จันทบุรี', 'NULL', '22000'),
	('6f90ca9b442205582d59883f71db98beaccd7bdd', '5555', 'NULL', 'NULL', 'NUL', 'NULL', '-', '126 Pracha Uthit Rd.', 'ฟหก', 'ฟหกฟ', 'ไไไๆ', 'NULL', '10140'),
	('7f9e80e55402398b8a117b338be288577cfa999c', '5555', 'NULL', 'NULL', 'NUL', 'NULL', '-', '126 Pracha Uthit Rd.', 'ฟหก', 'ฟหกฟ', 'ไไไๆ', 'NULL', '10140'),
	('91469cb69d6fe7d33655119378f12c29de31e60c', '45645', 'NULL', 'NULL', 'NUL', 'NULL', '-', '-', 'ตน', 'ขล', 'จันทบุรี', 'NULL', '22000'),
	('ae85f9c5b98de72bfe7d2c649f4274193cb72bb3', '45645', 'NULL', 'NULL', 'NUL', 'NULL', '-', '-', 'ตน', 'ขล', 'จันทบุรี', 'NULL', '22000'),
	('b515fc9db53a8f35e096de0dc8dde7558baebbed', '45645', 'NULL', 'NULL', 'NUL', 'NULL', '-', '-', 'ตน', 'ขล', 'จันทบุรี', 'NULL', '22000'),
	('c293044b957b973f1118b67f7827bb29769bb744', '5555', 'NULL', 'NULL', 'NUL', 'NULL', '-', '126 Pracha Uthit Rd.', 'ฟหก', 'ฟหกฟ', 'ไไไๆ', 'NULL', '10140'),
	('c988e3acb123e1c9f72de8af3fce7a8e88681726', '45645', 'NULL', 'NULL', 'NUL', 'NULL', '-', '-', 'ตน', 'ขล', 'จันทบุรี', 'NULL', '22000'),
	('ca17d113671063d9cf2c47b0fa05f6caa80f469c', '5555', 'NULL', 'NULL', 'NUL', 'NULL', '-', '126 Pracha Uthit Rd.', 'ฟหก', 'ฟหกฟ', 'ไไไๆ', 'NULL', '10140');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- Dumping structure for table studentregis.allergy
CREATE TABLE IF NOT EXISTS `allergy` (
  `stdID` varchar(13) NOT NULL,
  `allergy` varchar(20) NOT NULL,
  PRIMARY KEY (`stdID`,`allergy`),
  CONSTRAINT `allergy_ibfk_1` FOREIGN KEY (`stdID`) REFERENCES `student` (`stdID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.allergy: ~2 rows (approximately)
DELETE FROM `allergy`;
/*!40000 ALTER TABLE `allergy` DISABLE KEYS */;
INSERT INTO `allergy` (`stdID`, `allergy`) VALUES
	('59070501037', '-'),
	('59070501099', '-'),
	('59070505477', '-');
/*!40000 ALTER TABLE `allergy` ENABLE KEYS */;

-- Dumping structure for table studentregis.congenitaldisease
CREATE TABLE IF NOT EXISTS `congenitaldisease` (
  `stdID` varchar(13) NOT NULL,
  `disease` varchar(20) NOT NULL,
  PRIMARY KEY (`stdID`,`disease`),
  CONSTRAINT `congenitaldisease_ibfk_1` FOREIGN KEY (`stdID`) REFERENCES `student` (`stdID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.congenitaldisease: ~2 rows (approximately)
DELETE FROM `congenitaldisease`;
/*!40000 ALTER TABLE `congenitaldisease` DISABLE KEYS */;
INSERT INTO `congenitaldisease` (`stdID`, `disease`) VALUES
	('59070501037', 'หวัด'),
	('59070501099', '-'),
	('59070505477', '-');
/*!40000 ALTER TABLE `congenitaldisease` ENABLE KEYS */;

-- Dumping structure for table studentregis.curriculum
CREATE TABLE IF NOT EXISTS `curriculum` (
  `section` varchar(3) NOT NULL,
  `department` varchar(30) NOT NULL,
  `name` varchar(20) NOT NULL,
  `package` varchar(10) NOT NULL,
  `packagePrice` varchar(10) NOT NULL,
  `year` year(4) NOT NULL,
  `advisor1` varchar(13) DEFAULT NULL,
  `advisor2` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`section`,`department`,`year`),
  KEY `FK_curriculum_department` (`department`),
  KEY `FK_curriculum_teacher` (`advisor1`),
  KEY `FK_curriculum_teacher_2` (`advisor2`),
  CONSTRAINT `FK_curriculum_department` FOREIGN KEY (`department`) REFERENCES `department` (`departmentID`),
  CONSTRAINT `FK_curriculum_teacher` FOREIGN KEY (`advisor1`) REFERENCES `teacher` (`teacherID`),
  CONSTRAINT `FK_curriculum_teacher_2` FOREIGN KEY (`advisor2`) REFERENCES `teacher` (`teacherID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.curriculum: ~12 rows (approximately)
DELETE FROM `curriculum`;
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` (`section`, `department`, `name`, `package`, `packagePrice`, `year`, `advisor1`, `advisor2`) VALUES
	('A', 'CHME', 'ปกติ', 'เหมา', '75000', '2018', 't011', 't010'),
	('A', 'CPE', 'ปกติ', 'เหมา', '21000', '2018', 't009', 't005'),
	('A', 'MATH', 'ปกติ', 'เหมา', '50000', '2018', 't008', 't012'),
	('A', 'MIC', 'ปกติ', 'เหมา', '55000', '2018', 't005', 't006'),
	('A', 'PHY', 'ปกติ', 'เหมา', '55000', '2018', 't003', 't004'),
	('B', 'CHME', 'ปกติ', 'เหมา', '75000', '2018', 't011', 't010'),
	('B', 'CPE', 'ปกติ', 'เหมา', '21000', '2018', 't009', 't005'),
	('B', 'MATH', 'ปกติ', 'เหมา', '50000', '2018', 't008', 't012'),
	('B', 'MIC', 'ปกติ', 'เหมา', '55000', '2018', 't005', 't006'),
	('B', 'PHY', 'ปกติ', 'เหมา', '55000', '2018', 't003', 't004'),
	('C', 'CPE', 'นานาชาติ', 'เหมา', '76000', '2018', 't001', 't002'),
	('D', 'CPE', 'นานาชาติ', 'เหมา', '76000', '2018', 't001', 't002');
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;

-- Dumping structure for table studentregis.curriculumsubject
CREATE TABLE IF NOT EXISTS `curriculumsubject` (
  `section` varchar(3) NOT NULL,
  `department` varchar(30) NOT NULL,
  `secSubject` varchar(5) NOT NULL,
  `subject` varchar(10) NOT NULL,
  `year` year(4) NOT NULL,
  PRIMARY KEY (`section`,`department`,`subject`),
  KEY `FK_curriculumsubject_curriculum` (`section`,`department`,`year`),
  KEY `FK_curriculumsubject_section` (`secSubject`,`subject`),
  CONSTRAINT `FK_curriculumsubject_curriculum` FOREIGN KEY (`section`, `department`, `year`) REFERENCES `curriculum` (`section`, `department`, `year`) ON UPDATE CASCADE,
  CONSTRAINT `FK_curriculumsubject_section` FOREIGN KEY (`secSubject`, `subject`) REFERENCES `section` (`section`, `subject`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.curriculumsubject: ~9 rows (approximately)
DELETE FROM `curriculumsubject`;
/*!40000 ALTER TABLE `curriculumsubject` DISABLE KEYS */;
INSERT INTO `curriculumsubject` (`section`, `department`, `secSubject`, `subject`, `year`) VALUES
	('A', 'CPE', '1', 'CPE224', '2018'),
	('A', 'CPE', '2', 'GEN353', '2018'),
	('A', 'MIC', '2', 'LNG101', '2018'),
	('A', 'MIC', '2', 'MTH101', '2018'),
	('B', 'CPE', '2', 'CPE224', '2018'),
	('B', 'CPE', '1', 'GEN353', '2018'),
	('B', 'MIC', '1', 'LNG101', '2018'),
	('B', 'MIC', '2', 'MTH101', '2018'),
	('D', 'CPE', 'A2', 'GEN111', '2018');
/*!40000 ALTER TABLE `curriculumsubject` ENABLE KEYS */;

-- Dumping structure for table studentregis.dad
CREATE TABLE IF NOT EXISTS `dad` (
  `citizenID` varchar(13) NOT NULL,
  `titlename` varchar(10) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `DOB` date NOT NULL,
  `religion` varchar(10) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `tel` varchar(10) NOT NULL,
  `salary` varchar(20) DEFAULT NULL,
  `nationality` varchar(10) NOT NULL,
  `race` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `career` varchar(20) DEFAULT NULL,
  `careerPos` varchar(20) DEFAULT NULL,
  `workplaceName` varchar(30) DEFAULT NULL,
  `workplaceTel` varchar(10) DEFAULT NULL,
  `address` varchar(45) NOT NULL,
  PRIMARY KEY (`citizenID`),
  KEY `dad_ibfk_1` (`address`),
  CONSTRAINT `dad_ibfk_1` FOREIGN KEY (`address`) REFERENCES `address` (`addressID`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.dad: ~6 rows (approximately)
DELETE FROM `dad`;
/*!40000 ALTER TABLE `dad` DISABLE KEYS */;
INSERT INTO `dad` (`citizenID`, `titlename`, `firstname`, `lastname`, `DOB`, `religion`, `email`, `tel`, `salary`, `nationality`, `race`, `status`, `career`, `careerPos`, `workplaceName`, `workplaceTel`, `address`) VALUES
	('1021544878945', 'นาย', 'พพพพ', 'ที่หนึ่งวอซี', '1856-12-02', 'พุทธ', NULL, '0831475795', NULL, 'ไทย', 'ไทย', 'มีชีวิต', NULL, NULL, NULL, NULL, '002'),
	('1224455878955', 'นาย', 'สุเทพ', 'เทือก', '1946-11-09', 'อิสลาม', NULL, '0831445798', NULL, 'ไทย', 'ไทย', 'เสียชีวิต', NULL, NULL, NULL, NULL, '002'),
	('1555444587945', 'นาย', 'หหหห', 'กกกก', '1946-11-15', 'พุทธ', NULL, '0831455798', NULL, 'ไทย', 'ไทย', 'มีชีวิต', 'ดดำพ', 'ำพดพด', 'หกแหแ', 'หกแห', '003'),
	('453453453', 'นาย', 'ฟหก', 'ฟหก', '0000-00-00', 'ท', 'super.chok@hotmail.com', '0850485758', '-', 'ท', 'ท', 'มีชีวิต', '-', '-', '-', '-', 'ca17d113671063d9cf2c47b0fa05f6caa80f469c'),
	('51651544651', 'นาย', 'ฟหกฟหก', 'ฟหดกฟหกด', '0000-00-00', 'พ', 'super@ho.sldkc', '0850850477', '-', 'ไทย', 'ไทย', 'มีชีวิต', '-', '-', '-', '-', 'b515fc9db53a8f35e096de0dc8dde7558baebbed'),
	('8874531793429', 'นาย', 'มาลี', 'ที่หนึ่งวอซี', '1946-12-02', 'พุทธ', NULL, '0831445795', NULL, 'ไทย', 'ไทย', 'เสียชีวิต', NULL, NULL, NULL, NULL, '002');
/*!40000 ALTER TABLE `dad` ENABLE KEYS */;

-- Dumping structure for table studentregis.department
CREATE TABLE IF NOT EXISTS `department` (
  `departmentID` varchar(10) NOT NULL,
  `fullname` varchar(30) NOT NULL,
  `facultyID` varchar(10) NOT NULL,
  PRIMARY KEY (`departmentID`),
  KEY `facultyID` (`facultyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.department: ~8 rows (approximately)
DELETE FROM `department`;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`departmentID`, `fullname`, `facultyID`) VALUES
	('CE', 'วิศวกรรมโยธา', 'ENG'),
	('CHM', 'เคมี', 'SCI'),
	('CHME', 'วิศวกรรมเคมี', 'ENG'),
	('CPE', 'วิศวกรรมคอมพิวเตอร์', 'ENG'),
	('MATH', 'คณิตศาสตร์', 'SCI'),
	('ME', 'วิศวกรรมเครื่องกล', 'ENG'),
	('MIC', 'จุลชีววิทยา', 'SCI'),
	('PHY', 'ฟิสิกส์', 'SCI');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table studentregis.disability
CREATE TABLE IF NOT EXISTS `disability` (
  `stdID` varchar(13) NOT NULL,
  `disability` varchar(20) NOT NULL,
  PRIMARY KEY (`stdID`,`disability`),
  CONSTRAINT `disability_ibfk_1` FOREIGN KEY (`stdID`) REFERENCES `student` (`stdID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.disability: ~3 rows (approximately)
DELETE FROM `disability`;
/*!40000 ALTER TABLE `disability` DISABLE KEYS */;
INSERT INTO `disability` (`stdID`, `disability`) VALUES
	('59070501037', '-'),
	('59070501099', '-'),
	('59070505477', '-');
/*!40000 ALTER TABLE `disability` ENABLE KEYS */;

-- Dumping structure for table studentregis.enrollment
CREATE TABLE IF NOT EXISTS `enrollment` (
  `stdID` varchar(13) NOT NULL,
  `subjectID` varchar(10) NOT NULL,
  `datetime` datetime NOT NULL,
  `subjectSec` varchar(3) NOT NULL,
  `paymentDate` datetime DEFAULT NULL,
  `dropStatus` tinyint(1) NOT NULL,
  `grade` decimal(3,2) DEFAULT NULL,
  `point` decimal(3,0) DEFAULT NULL,
  `seatExamMid` decimal(2,0) DEFAULT NULL,
  `seatExamFinal` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`stdID`,`subjectID`,`datetime`),
  KEY `subjectSec` (`subjectSec`,`subjectID`),
  CONSTRAINT `enrollment_ibfk_1` FOREIGN KEY (`stdID`) REFERENCES `student` (`stdID`),
  CONSTRAINT `enrollment_ibfk_2` FOREIGN KEY (`subjectSec`, `subjectID`) REFERENCES `section` (`section`, `subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.enrollment: ~28 rows (approximately)
DELETE FROM `enrollment`;
/*!40000 ALTER TABLE `enrollment` DISABLE KEYS */;
INSERT INTO `enrollment` (`stdID`, `subjectID`, `datetime`, `subjectSec`, `paymentDate`, `dropStatus`, `grade`, `point`, `seatExamMid`, `seatExamFinal`) VALUES
	('59070501001', 'CPE008', '2018-05-29 07:03:47', '1', '2018-05-27 19:27:36', 0, NULL, NULL, 44, 24),
	('59070501001', 'CPE121', '2018-05-29 07:03:00', '2', '2018-05-27 19:27:36', 1, NULL, NULL, 72, 27),
	('59070501001', 'CPE224', '2018-05-29 07:02:40', '1', '2018-05-27 19:27:36', 0, NULL, NULL, 77, 21),
	('59070501001', 'CPE231', '2018-05-29 02:39:45', '1', '2018-05-27 19:27:36', 1, NULL, NULL, 55, 44),
	('59070501033', 'CPE224', '2018-05-29 07:04:18', '2', '2018-05-29 06:05:02', 0, NULL, NULL, 65, 78),
	('59070501033', 'CPE231', '2018-05-29 02:40:28', '1', '2018-05-27 19:27:36', 1, NULL, NULL, 56, 57),
	('59070501033', 'GEN111', '2018-05-29 07:02:09', 'A3', '2018-05-29 06:05:02', 0, NULL, NULL, 78, NULL),
	('59070501033', 'MTH101', '2018-05-29 07:01:26', '2', '2018-05-29 06:05:02', 0, NULL, NULL, 45, 88),
	('59070501037', 'CPE100', '2018-05-29 22:15:26', '1', NULL, 1, NULL, NULL, 74, 58),
	('59070501037', 'CPE212', '2017-05-28 16:13:56', '1', '2018-05-29 12:23:37', 0, 4.00, 90, 91, 33),
	('59070501037', 'CPE224', '2018-05-29 13:02:11', '1', NULL, 0, NULL, NULL, 98, 82),
	('59070501037', 'CPE231', '2018-05-27 19:27:14', '1', '2018-05-29 12:23:37', 0, 4.00, 100, 25, 13),
	('59070501037', 'GEN353', '2017-05-28 16:12:56', '1', '2018-05-29 12:23:37', 0, 3.50, 76, NULL, 2),
	('59070501037', 'LNG101', '2017-05-28 16:11:58', '2', '2018-05-29 12:23:37', 0, 4.00, 85, 11, 45),
	('59070501037', 'MTH101', '2018-05-27 19:28:41', '3', '2018-05-29 12:23:37', 0, NULL, NULL, 10, 53),
	('59070501085', 'CHM103', '2018-05-27 03:10:27', '2', '2018-05-27 03:10:33', 0, NULL, NULL, 18, 22),
	('59070501085', 'CPE100', '2018-05-26 18:24:59', '2', '2018-05-26 18:26:32', 0, NULL, NULL, 8, 6),
	('59070501085', 'CPE212', '2018-05-27 16:48:43', '2', '2018-05-27 16:48:45', 0, NULL, NULL, 13, 85),
	('59070501085', 'CPE231', '2018-05-28 16:17:37', '2', '2018-05-28 16:17:44', 0, 2.50, 68, 12, 45),
	('59070501085', 'GEN111', '2018-05-26 18:25:52', 'A1', '2018-05-26 18:26:35', 1, NULL, NULL, 24, NULL),
	('59070501085', 'GEN353', '2018-05-29 04:42:19', '1', '2018-05-27 19:27:36', 1, NULL, NULL, 11, 48),
	('59070501085', 'MTH101', '2018-05-27 03:10:43', '3', '2018-05-27 03:12:32', 1, NULL, NULL, 23, 44),
	('59070501099', 'CPE100', '2018-05-29 22:16:17', '1', NULL, 0, NULL, NULL, 53, 1),
	('59070501099', 'CPE224', '2018-05-29 13:23:22', '1', NULL, 0, NULL, NULL, 91, 47),
	('59070501099', 'LNG101', '2018-05-29 13:23:05', '1', NULL, 0, NULL, NULL, 2, 55),
	('59070515448', 'CHM103', '2018-05-29 07:00:22', '1', '2018-05-29 06:05:02', 0, NULL, NULL, 8, 88),
	('59070515448', 'CPE224', '2018-05-29 06:59:44', '1', '2018-05-29 06:05:02', 0, NULL, NULL, 5, 44),
	('59070515448', 'GEN111', '2018-05-29 07:00:44', 'A3', '2018-05-29 06:05:02', 0, NULL, NULL, 45, NULL),
	('59070515448', 'LNG101', '2018-05-29 06:04:44', '1', '2018-05-29 06:05:02', 0, 4.00, 100, 68, 2),
	('59070515448', 'MTH101', '2018-05-29 06:07:34', '1', '2018-05-29 06:05:02', 0, 4.00, 100, 1, 48);
/*!40000 ALTER TABLE `enrollment` ENABLE KEYS */;

-- Dumping structure for table studentregis.faculty
CREATE TABLE IF NOT EXISTS `faculty` (
  `facultyID` varchar(10) NOT NULL,
  `fullname` varchar(20) NOT NULL,
  PRIMARY KEY (`facultyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.faculty: ~8 rows (approximately)
DELETE FROM `faculty`;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` (`facultyID`, `fullname`) VALUES
	('ARCH', 'สถาปัตยกรรมศาสตร์'),
	('COMART', 'นิเทศศาสตร์'),
	('DENT', 'ทันตเเพทยศาสตร์'),
	('EDU', 'ครุศาสตร์'),
	('ENG', 'วิศวกรรมศาสตร์'),
	('MED', 'แพทยศาสตร์'),
	('PHAR', 'เภสัชศาสตร์'),
	('SCI', 'วิทยาศาสตร์');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;

-- Dumping structure for table studentregis.mom
CREATE TABLE IF NOT EXISTS `mom` (
  `citizenID` varchar(13) NOT NULL,
  `titlename` varchar(10) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `DOB` date NOT NULL,
  `religion` varchar(10) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `tel` varchar(10) NOT NULL,
  `salary` varchar(20) DEFAULT NULL,
  `nationality` varchar(10) NOT NULL,
  `race` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `career` varchar(20) DEFAULT NULL,
  `careerPos` varchar(20) DEFAULT NULL,
  `workplaceName` varchar(30) DEFAULT NULL,
  `workplaceTel` varchar(10) DEFAULT NULL,
  `address` varchar(45) NOT NULL,
  PRIMARY KEY (`citizenID`),
  KEY `address` (`address`),
  CONSTRAINT `mom_ibfk_1` FOREIGN KEY (`address`) REFERENCES `address` (`addressID`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.mom: ~5 rows (approximately)
DELETE FROM `mom`;
/*!40000 ALTER TABLE `mom` DISABLE KEYS */;
INSERT INTO `mom` (`citizenID`, `titlename`, `firstname`, `lastname`, `DOB`, `religion`, `email`, `tel`, `salary`, `nationality`, `race`, `status`, `career`, `careerPos`, `workplaceName`, `workplaceTel`, `address`) VALUES
	('1113324564857', 'นาง', 'ปันปัน', 'ฟหก', '1977-05-07', 'คริสต์', NULL, '0886554781', NULL, 'ไทย', 'ไทย', 'มีชีวิต', 'แม่บ้าน', NULL, 'บ้าน', NULL, '003'),
	('124578558745', 'นาง', 'ดเิด', 'ดเ้ดเ', '0000-00-00', 'ท', 'super.chok@hotmail.com', '0850850457', '-', 'ท', 'ท', 'มีชีวิต', '-', '-', '-', '-', '6f90ca9b442205582d59883f71db98beaccd7bdd'),
	('1615451651', 'นางสาว', 'สวสวงสว', 'สวงสวงสวง', '0000-00-00', 'อิส', 'lashd@asd.asd', '0256448754', '-', 'ไทย', 'ไทย', 'มีชีวิต', '-', '-', '-', '-', 'ae85f9c5b98de72bfe7d2c649f4274193cb72bb3'),
	('4418047989439', 'นาง', 'มิวสิค', 'กาจู', '1999-09-09', 'พุทธ', NULL, '0886597881', NULL, 'ไทย', 'ไทย', 'มีชีวิต', NULL, NULL, NULL, NULL, '001'),
	('4487785412548', 'นางสาว', 'สวสวสว', 'กาจู', '1988-08-08', 'พุทธ', NULL, '0886597781', NULL, 'ไทย', 'ไทย', 'มีชีวิต', 'แม่บ้าน', NULL, 'บ้าน', NULL, '003');
/*!40000 ALTER TABLE `mom` ENABLE KEYS */;

-- Dumping structure for table studentregis.parent
CREATE TABLE IF NOT EXISTS `parent` (
  `citizenID` varchar(13) NOT NULL,
  `titlename` varchar(10) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `DOB` date NOT NULL,
  `religion` varchar(10) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `tel` varchar(10) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `salary` varchar(20) DEFAULT NULL,
  `nationality` varchar(10) NOT NULL,
  `race` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `career` varchar(20) DEFAULT NULL,
  `careerPos` varchar(20) DEFAULT NULL,
  `workplaceName` varchar(30) DEFAULT NULL,
  `workplaceTel` varchar(10) DEFAULT NULL,
  `address` varchar(45) NOT NULL,
  PRIMARY KEY (`citizenID`),
  KEY `address` (`address`),
  CONSTRAINT `parent_ibfk_1` FOREIGN KEY (`address`) REFERENCES `address` (`addressID`) ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.parent: ~3 rows (approximately)
DELETE FROM `parent`;
/*!40000 ALTER TABLE `parent` DISABLE KEYS */;
INSERT INTO `parent` (`citizenID`, `titlename`, `firstname`, `lastname`, `DOB`, `religion`, `email`, `tel`, `gender`, `salary`, `nationality`, `race`, `status`, `career`, `careerPos`, `workplaceName`, `workplaceTel`, `address`) VALUES
	('1222554654', 'นาย', 'หกดหด', 'หกดหกดหกด', '0000-00-00', 'หหหห', 'akshdkhasd@hot.com', '0855468745', 'NULL', '-', 'หห', 'หหห', 'มีชีวิต', '-', '-', '-', '-', '5817457d0b6826171a1d8cb31e8ad24beee57a0f'),
	('12345345585', 'นาง', 'หกไฟหก', 'ๆไกฟหกไ', '0000-00-00', 'ท', 'super.chok@hotmail.com', '0855468745', 'NULL', '-', 'ท', 'ท', 'มีชีวิต', '-', '-', '-', '-', 'c293044b957b973f1118b67f7827bb29769bb744'),
	('7962564413365', 'นาย', 'ทักษิณ', 'ชิณวุฒิ', '1939-07-12', 'พุทธ', 'tak007"hotmail.com', '0884513546', 'ชาย', '25000', 'ไทย', 'ไทย', 'มีชีวิต', 'ค้าขาย', 'ประธานบริษัท', 'CP ALL', '1112', '002');
/*!40000 ALTER TABLE `parent` ENABLE KEYS */;

-- Dumping structure for table studentregis.schedule
CREATE TABLE IF NOT EXISTS `schedule` (
  `ID` int(4) NOT NULL AUTO_INCREMENT,
  `section` varchar(3) NOT NULL,
  `subject` varchar(10) NOT NULL,
  `room` varchar(10) NOT NULL,
  `day` varchar(10) NOT NULL,
  `timeStart` time NOT NULL,
  `timeEnd` time NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `section` (`section`,`subject`),
  CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`section`, `subject`) REFERENCES `section` (`section`, `subject`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.schedule: ~28 rows (approximately)
DELETE FROM `schedule`;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` (`ID`, `section`, `subject`, `room`, `day`, `timeStart`, `timeEnd`) VALUES
	(1, 'A3', 'GEN111', 'cb2403', 'Wednesday', '10:30:00', '13:30:00'),
	(2, '1', 'CPE100', '1121', 'Friday', '13:30:00', '15:30:00'),
	(3, 'A1', 'GEN111', 'cb2403', 'Monday', '10:30:00', '13:30:00'),
	(4, '2', 'CPE100', '1121', 'Friday', '13:30:00', '15:30:00'),
	(5, '2', 'CHM103', 'cb1403', 'Tuesday', '08:30:00', '10:30:00'),
	(6, '3', 'MTH101', 'sc2201', 'Thursday', '08:30:00', '10:30:00'),
	(7, '2', 'CPE212', 'scl600', 'Monday', '13:30:00', '16:30:00'),
	(8, '1', 'MTH101', 'sc1307', 'Tuesday', '13:30:00', '15:30:00'),
	(9, '1', 'CHM103', 'cb1101', 'Friday', '13:30:00', '14:30:00'),
	(10, 'A2', 'GEN111', 'scl700', 'Thursday', '13:30:00', '16:30:00'),
	(11, '1', 'LNG101', 'cb1303', 'Monday', '09:30:00', '12:30:00'),
	(12, '2', 'LNG101', 'cb1202', 'Monday', '09:30:00', '12:30:00'),
	(13, '3', 'LNG101', 'cb1405', 'Monday', '09:30:00', '12:30:00'),
	(14, '2', 'MTH101', 'cb2507', 'Friday', '08:30:00', '10:30:00'),
	(15, '1', 'CPE212', '1115', 'Monday', '13:30:00', '16:30:00'),
	(16, '1', 'CPE231', '1121', 'Monday', '10:30:00', '12:30:00'),
	(17, '2', 'CPE231', '1121', 'Monday', '10:30:00', '12:30:00'),
	(18, '3', 'CPE231', '1121', 'Friday', '13:30:00', '15:30:00'),
	(19, '4', 'CPE231', '1121', 'Friday', '13:30:00', '15:30:00'),
	(20, '1', 'CPE121', '1121', 'Friday', '13:30:00', '15:30:00'),
	(21, '2', 'CPE121', '1121', 'Friday', '13:30:00', '15:30:00'),
	(23, '1', 'GEN353', 'cb2403', 'Tuesday', '08:30:00', '11:30:00'),
	(24, '2', 'GEN353', 'cb2405', 'Tuesday', '13:30:00', '16:30:00'),
	(25, '3', 'GEN353', 'cb1403', 'Thursday', '13:30:00', '16:30:00'),
	(26, '1', 'CPE008', '1116', 'Monday', '08:30:00', '10:30:00'),
	(27, '2', 'CPE008', '1116', 'Monday', '08:30:00', '08:30:00'),
	(28, '1', 'CPE224', '1115', 'Wednesday', '13:30:00', '17:30:00'),
	(29, '2', 'CPE224', '1115', 'Wednesday', '13:30:00', '17:30:00');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;

-- Dumping structure for table studentregis.section
CREATE TABLE IF NOT EXISTS `section` (
  `section` varchar(5) NOT NULL,
  `subject` varchar(10) NOT NULL,
  `numberStd` varchar(3) NOT NULL,
  PRIMARY KEY (`section`,`subject`),
  KEY `subject` (`subject`),
  CONSTRAINT `section_ibfk_1` FOREIGN KEY (`subject`) REFERENCES `subject` (`subjectCode`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.section: ~28 rows (approximately)
DELETE FROM `section`;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` (`section`, `subject`, `numberStd`) VALUES
	('1', 'CHM103', '100'),
	('1', 'CPE008', '50'),
	('1', 'CPE100', '40'),
	('1', 'CPE121', '80'),
	('1', 'CPE212', '25'),
	('1', 'CPE224', '80'),
	('1', 'CPE231', '80'),
	('1', 'GEN353', '40'),
	('1', 'LNG101', '22'),
	('1', 'MTH101', '190'),
	('2', 'CHM103', '98'),
	('2', 'CPE008', '50'),
	('2', 'CPE100', '40'),
	('2', 'CPE121', '80'),
	('2', 'CPE212', '30'),
	('2', 'CPE224', '80'),
	('2', 'CPE231', '80'),
	('2', 'GEN353', '40'),
	('2', 'LNG101', '28'),
	('2', 'MTH101', '181'),
	('3', 'CPE231', '80'),
	('3', 'GEN353', '40'),
	('3', 'LNG101', '25'),
	('3', 'MTH101', '188'),
	('4', 'CPE231', '80'),
	('A1', 'GEN111', '40'),
	('A2', 'GEN111', '40'),
	('A3', 'GEN111', '40');
/*!40000 ALTER TABLE `section` ENABLE KEYS */;

-- Dumping structure for table studentregis.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.sessions: ~2 rows (approximately)
DELETE FROM `sessions`;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
	('KFM_SkHXnklH_IKpP5T6sWsTDvfj_QAf', 1594628254, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"flash":{},"passport":{"user":"t009"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Dumping structure for table studentregis.student
CREATE TABLE IF NOT EXISTS `student` (
  `stdID` varchar(13) NOT NULL,
  `dadID` varchar(13) NOT NULL,
  `momID` varchar(13) NOT NULL,
  `addressCurrent` varchar(45) NOT NULL,
  `addressRegis` varchar(45) NOT NULL,
  `parentID` varchar(13) NOT NULL,
  `advisor1` varchar(13) DEFAULT NULL,
  `advisor2` varchar(13) DEFAULT NULL,
  `curriculumSec` varchar(3) NOT NULL,
  `department` varchar(30) NOT NULL,
  `parentRelation` varchar(10) NOT NULL,
  `titlenameTH` varchar(10) NOT NULL,
  `titlenameEN` varchar(10) NOT NULL,
  `firstnameTH` varchar(30) NOT NULL,
  `lastnameTH` varchar(30) NOT NULL,
  `firstnameEN` varchar(30) NOT NULL,
  `lastnameEN` varchar(30) NOT NULL,
  `DOB` date NOT NULL,
  `bloodtype` varchar(5) NOT NULL,
  `marital` varchar(20) NOT NULL,
  `religion` varchar(10) NOT NULL,
  `nationality` varchar(10) NOT NULL,
  `race` varchar(10) NOT NULL,
  `NoSiblings` varchar(3) NOT NULL DEFAULT '0',
  `sonNo` varchar(3) NOT NULL,
  `citizenID` varchar(13) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `dateFirstenroll` date NOT NULL,
  `habitat` varchar(10) NOT NULL,
  `maritalStatofMD` varchar(30) NOT NULL,
  `soldier` varchar(10) DEFAULT NULL,
  `stdStatus` varchar(10) NOT NULL,
  `recentAcademy` varchar(30) NOT NULL,
  `recentGraduate` varchar(20) NOT NULL,
  `recentGPAX` decimal(3,2) NOT NULL,
  `picPhoto` varchar(100) NOT NULL,
  `picRegishome` varchar(100) NOT NULL,
  `picIDcard` varchar(100) NOT NULL,
  `picStdrecord` varchar(100) NOT NULL,
  `program` varchar(20) NOT NULL,
  PRIMARY KEY (`stdID`),
  KEY `dadID` (`dadID`),
  KEY `momID` (`momID`),
  KEY `addressCurrrent` (`addressCurrent`),
  KEY `addressRegis` (`addressRegis`),
  KEY `parentID` (`parentID`),
  KEY `curriculumSec` (`curriculumSec`,`department`),
  KEY `FK_student_teacher` (`advisor1`),
  KEY `FK_student_teacher_2` (`advisor2`),
  CONSTRAINT `FK_student_teacher` FOREIGN KEY (`advisor1`) REFERENCES `teacher` (`teacherID`),
  CONSTRAINT `FK_student_teacher_2` FOREIGN KEY (`advisor2`) REFERENCES `teacher` (`teacherID`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dadID`) REFERENCES `dad` (`citizenID`),
  CONSTRAINT `student_ibfk_2` FOREIGN KEY (`momID`) REFERENCES `mom` (`citizenID`),
  CONSTRAINT `student_ibfk_3` FOREIGN KEY (`addressCurrent`) REFERENCES `address` (`addressID`),
  CONSTRAINT `student_ibfk_4` FOREIGN KEY (`addressRegis`) REFERENCES `address` (`addressID`),
  CONSTRAINT `student_ibfk_5` FOREIGN KEY (`parentID`) REFERENCES `parent` (`citizenID`),
  CONSTRAINT `student_ibfk_8` FOREIGN KEY (`curriculumSec`, `department`) REFERENCES `curriculum` (`section`, `department`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.student: ~7 rows (approximately)
DELETE FROM `student`;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` (`stdID`, `dadID`, `momID`, `addressCurrent`, `addressRegis`, `parentID`, `advisor1`, `advisor2`, `curriculumSec`, `department`, `parentRelation`, `titlenameTH`, `titlenameEN`, `firstnameTH`, `lastnameTH`, `firstnameEN`, `lastnameEN`, `DOB`, `bloodtype`, `marital`, `religion`, `nationality`, `race`, `NoSiblings`, `sonNo`, `citizenID`, `email`, `tel`, `gender`, `dateFirstenroll`, `habitat`, `maritalStatofMD`, `soldier`, `stdStatus`, `recentAcademy`, `recentGraduate`, `recentGPAX`, `picPhoto`, `picRegishome`, `picIDcard`, `picStdrecord`, `program`) VALUES
	('59070501001', '8874531793429', '4418047989439', '001', '001', '7962564413365', 't009', 't005', 'A', 'CPE', 'บิดา', 'นาย', 'Mr.', 'เม้ง', 'ชอบกินเล้ง', 'Meng', 'Chopkinleang', '2018-05-26', 'โอ', 'โสด', 'พุทธ', 'ไทย', 'ไทย', '0', '1', '1229900857126', 'lnwza009@hotmail.com', '0811963284', 'ชาย', '2018-05-26', 'หอพัก', 'อาศัยอยู่ด้วยกัน', 'ไม่เคย', 'ปกติ', 'บจ', 'ม.6', 3.55, '', '', '', '', 'AR'),
	('59070501033', '8874531793429', '4418047989439', '001', '001', '7962564413365', 't009', 't005', 'B', 'CPE', 'บิดา', 'นาย', 'Mr.', 'เม้ง', 'ชอบกินเล้ง', 'Meng', 'Chopkinleang', '2018-05-26', 'โอ', 'โสด', 'พุทธ', 'ไทย', 'ไทย', '0', '1', '1229905857125', 'lnwza0089@hotmail.com', '0811963288', 'ชาย', '2018-05-26', 'หอพัก', 'อาศัยอยู่ด้วยกัน', 'ไม่เคย', 'ปกติ', 'บจ', 'ม.6', 3.33, '', '', '', '', 'แอดมิชชั่น'),
	('59070501037', '8874531793429', '4418047989439', '002', '002', '7962564413365', 't009', 't005', 'A', 'CPE', 'ญาติ', 'นาย', 'Mr.', 'สมชาย', 'ขายไก่', 'Somchai', 'Kaigai', '1998-05-27', 'เอ', 'แต่งงานแล้ว', 'อิสลาม', 'ไทย', 'ไทย', '2', '2', '1228800412345', '12345a@gmail.com', '0899375546', 'ชาย', '2018-05-26', 'บ้าน', 'แยกกันอยู่', NULL, 'ปกติ', 'สก', 'ม.6', 3.21, './uploads/tttt.jpg', '', '', '', 'เรียนดี'),
	('59070501085', '8874531793429', '4418047989439', '001', '003', '7962564413365', 't009', 't005', 'B', 'CPE', 'บิดา', 'นาย', 'Mr.', 'เม้ง', 'ชอบกินเล้ง', 'Meng', 'Chopkinleang', '2018-05-26', 'โอ', 'โสด', 'พุทธ', 'ไทย', 'ไทย', '0', '1', '1229900857125', 'lnwza008@hotmail.com', '0811963288', 'ชาย', '2018-05-26', 'หอพัก', 'อาศัยอยู่ด้วยกัน', 'ไม่เคย', 'ปกติ', 'บจ', 'ม.6', 3.55, '', '', '', '', 'แอดมิชชั่น'),
	('59070501099', '453453453', '124578558745', '4be73a8197c3615b823ce9383f40d638b95beb64', '7f9e80e55402398b8a117b338be288577cfa999c', '12345345585', 't009', 't005', 'B', 'CPE', 'ญาติ', 'นาย', 'Mr.', 'ฟหกหฟหก', 'ฟหกฟหก', 'adadasd', 'asdadad', '2018-05-24', 'O', 'โสด', 'พ', 'ท', 'ท', '0', '1', '1222990080950', 'super.chok@hotmail.com', '0850805547', 'ชาย', '2018-05-29', 'ฟหกฟหก', 'ฟหก', 'ไม่เคย', 'มีชีวิตอยู', 'ฟหกฟ', 'มัธยมปลาย', 0.00, './uploads/a8dd6ffbb9d9ea4c149b60ba7fa648e2ccdc0eac.jpg', './public/uploads/fb4c991d2a31e0a09f3911e96ad99db3ee8c39d7.jpg', './public/uploads/4bc2f7da273103bcbaca64b2e1c7a2cdefb92a5d.jpg', './public/uploads/15eaf4a5cf4d0f900fbeca914acdb6d71ae815e9.jpg', 'เรียนดี'),
	('59070505477', '51651544651', '1615451651', '91469cb69d6fe7d33655119378f12c29de31e60c', 'c988e3acb123e1c9f72de8af3fce7a8e88681726', '1222554654', 't009', 't005', 'B', 'CPE', 'ญาติ', 'นาย', 'Mr.', 'จ้อบ', 'หิวข้าว', 'Job', 'Hiwkaew', '1990-08-16', 'AB', 'โสด', 'พุทธ', 'ไทย', 'ไทย', '2', '2', '1225544645877', 'cvhkj@hotmail.com', '0850850854', 'ชาย', '2018-05-29', 'อพาร์ทเมนท', 'อยู่ร่วมกัน', 'ไม่เคย', 'มีชีวิตอยู', 'บจม', 'มัธยมปลาย', 2.22, './uploads/2b6bb9157f15e6ff5d766ddc235496e72b76f4e1.jpg', './public/uploads/8b8564c6f3c2135f593905f1296e8a1bddd4933d.jpg', './public/uploads/7be7190bbf1bf73f52872e517a9cfdee3049ad63.jpg', './public/uploads/be42c31e446924ccb46d0a8347afcd57168fba3f.jpg', 'เรียนดี'),
	('59070515448', '8874531793429', '4418047989439', '003', '003', '7962564413365', 't018', 't017', 'A', 'MIC', 'บิดา', 'นางสาว', 'Ms.', 'ยย', 'บบ', 'yy', 'bb', '1997-05-29', 'เอบี', 'โสด', 'คริสต์', 'ไทย', 'ไทย', '0', '1', '1229900564521', 'askjdh@gmail.com', '0888888888', 'หญิง', '2018-05-29', 'บ้าน', 'อาศัยอยู่ด้วยกัน', NULL, 'ปกติ', 'ฟฟ', 'ม.6', 4.00, '', '', '', '', 'เรียนดี');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;

-- Dumping structure for table studentregis.subject
CREATE TABLE IF NOT EXISTS `subject` (
  `subjectCode` varchar(10) NOT NULL,
  `subjectName` varchar(50) NOT NULL,
  `credit` varchar(2) NOT NULL,
  `price` varchar(6) NOT NULL,
  `dateMid` date DEFAULT NULL,
  `dateFinal` date DEFAULT NULL,
  `starttimeMid` time DEFAULT NULL,
  `endtimeMid` time DEFAULT NULL,
  `starttimeFinal` time DEFAULT NULL,
  `endtimeFinal` time DEFAULT NULL,
  `roomMid` varchar(10) DEFAULT NULL,
  `roomFinal` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`subjectCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.subject: ~11 rows (approximately)
DELETE FROM `subject`;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` (`subjectCode`, `subjectName`, `credit`, `price`, `dateMid`, `dateFinal`, `starttimeMid`, `endtimeMid`, `starttimeFinal`, `endtimeFinal`, `roomMid`, `roomFinal`) VALUES
	('CHM103', 'Fundamental Chemistry', '3', '2000', '2018-10-12', '2018-12-07', '09:00:00', '12:00:00', '09:00:00', '12:00:00', 'cb1201', 'cb1207'),
	('CPE008', 'Gamepomon', '1', '1000', '2018-10-15', '2018-12-14', '09:00:00', '11:00:00', '09:00:00', '11:00:00', 'cb2201', 'cb2401'),
	('CPE100', 'Computer Programming', '3', '2000', '2018-10-08', '2018-12-03', '09:00:00', '12:00:00', '09:00:00', '12:00:00', 'cb2501', 'cb2504'),
	('CPE121', 'Discrete Math', '3', '2000', '2018-10-09', '2018-12-04', '09:00:00', '12:00:00', '09:00:00', '12:00:00', 'cb2205', 'cb2306'),
	('CPE212', 'Algorithm Design', '3', '2000', '2018-10-08', '2018-12-03', '13:00:00', '16:00:00', '13:00:00', '16:00:00', 'cb2403', 'cb2403'),
	('CPE224', 'ComArch', '3', '2000', '2018-10-09', '2018-12-04', '13:00:00', '16:00:00', '13:00:00', '16:00:00', 'cb2507', 'cb2503'),
	('CPE231', 'Database system', '3', '2000', '2018-10-08', '2018-12-03', '09:00:00', '12:00:00', '09:00:00', '12:00:00', 'cb30451', 'cb2505'),
	('GEN111', 'Ethics man living ', '3', '2000', '2018-10-16', NULL, '13:00:00', '15:00:00', NULL, NULL, 'cb2502', NULL),
	('GEN353', 'Managerial Psychology', '3', '2000', NULL, '2018-12-17', NULL, NULL, '13:00:00', '15:00:00', NULL, 'cb1204'),
	('LNG101', 'English 1', '3', '2000', '2018-10-08', '2018-12-03', '13:00:00', '16:00:00', '13:00:00', '16:00:00', 'cb2306', 'cb2306'),
	('MTH101', 'Calculus 1', '3', '2000', '2018-10-09', '2018-12-04', '09:00:00', '12:00:00', '09:00:00', '12:00:00', 'cb2501', 'cb2404');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;

-- Dumping structure for table studentregis.tateach
CREATE TABLE IF NOT EXISTS `tateach` (
  `ID` varchar(13) NOT NULL,
  `subject` varchar(10) NOT NULL,
  `section` varchar(3) NOT NULL,
  PRIMARY KEY (`ID`,`subject`,`section`),
  KEY `section` (`section`,`subject`),
  CONSTRAINT `FK_tateach_teacherassistant` FOREIGN KEY (`ID`) REFERENCES `teacherassistant` (`ID`),
  CONSTRAINT `tateach_ibfk_2` FOREIGN KEY (`section`, `subject`) REFERENCES `section` (`section`, `subject`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.tateach: ~7 rows (approximately)
DELETE FROM `tateach`;
/*!40000 ALTER TABLE `tateach` DISABLE KEYS */;
INSERT INTO `tateach` (`ID`, `subject`, `section`) VALUES
	('ta001', 'CPE121', '1'),
	('ta001', 'CPE121', '2'),
	('ta001', 'CPE231', '1'),
	('ta001', 'CPE231', '2'),
	('ta001', 'GEN353', '2'),
	('ta001', 'MTH101', '1'),
	('ta002', 'CPE100', '2');
/*!40000 ALTER TABLE `tateach` ENABLE KEYS */;

-- Dumping structure for table studentregis.teacher
CREATE TABLE IF NOT EXISTS `teacher` (
  `teacherID` varchar(13) NOT NULL,
  `titlename` varchar(10) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tel` varchar(10) DEFAULT NULL,
  `gender` varchar(8) NOT NULL,
  PRIMARY KEY (`teacherID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.teacher: ~18 rows (approximately)
DELETE FROM `teacher`;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` (`teacherID`, `titlename`, `firstname`, `lastname`, `email`, `tel`, `gender`) VALUES
	('t001', 'รศ.ดร.', 'วรพจน์', 'สุนทรสุข', 'worapot.sun@kmutt.ac.th', '024708890', 'ชาย'),
	('t002', 'ดร.', 'สเตรนจ์', 'ลี', 'strange@hotmail.com', '0885556969', 'ชาย'),
	('t003', 'นางสาว', 'จอนอ', 'น่ายัก', 'jornor@hotmail.co.th', '0886541287', 'หญิง'),
	('t004', 'นางสาว', 'อร', 'อุ๋งอุ๋งอุ๋ง', 'orn.ongong@hotmail.com', '0984453258', 'หญิง'),
	('t005', 'ผศ.ดร.', 'สุดชาย', 'บุญโต', 'sudchai.boo@kmutt.ac.th ', '024709096', 'ชาย'),
	('t006', 'ดร.', 'พร', 'พันธุ์จงหาญ', 'phond.p@mail.kmutt.ac.th', '024709257', 'หญิง'),
	('t007', 'ผศ.', 'สนั่น', 'สระแก้ว', 'sanan@cpe.kmutt.ac.th', '024709254', 'ชาย'),
	('t008', 'ดร.', 'ไออ้อน', 'แมน', 'iamironman@avengers.com', '191', 'ชาย'),
	('t009', 'ดร.', 'ขจรพงษ์', 'อัครจิตสกุล', 'khajonpong.akk@mail.kmutt.ac.t', '024709086', 'ชาย'),
	('t010', 'รศ.ดร.', 'อาภรณ์', 'วงษ์วิจารณ์', 'aporn.won@kmutt.ac.th', '024708884', 'หญิง'),
	('t011', 'นาย', 'กัปตัน', 'หนวด', 'givemeashield@avergers.com', '191', 'ชาย'),
	('t012', 'นาย', 'ธนสนธิ์', 'เอี่ยมยิ่งสกุล', 'thanason.e@mail.kmutt.ac.th', '0876819990', 'ชาย'),
	('t013', 'ผศ.', 'ศุภลักษณ์', 'อ่างแก้ว', 'suppalak.ang@kmutt.ac.th', NULL, 'ชาย'),
	('t014', 'ผศ.', 'สุรพนธ์', 'ตุ้มนาค', 'surapont@cpe.kmutt.ac.th', '024709263', 'ชาย'),
	('t015', 'ผศ.', 'กอไก่', 'เกิดก่อน', 'korkai@hotmail.com', '0864479858', 'ชาย'),
	('t016', 'ผศ.', 'ขอไข่', 'เกิดก่อน', 'eggegg@hotmail.com', '0850850885', 'หญิง'),
	('t017', 'นางสาว', 'อรอุ๋ง', 'สุโก้ย', 'orn.cute@hotmail.com', '0856697485', 'หญิง'),
	('t018', 'นางสาว', 'ลูกพี่', 'ลูกชิ้น', 'jn.cute@hotmail.com', '0812245688', 'หญิง');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;

-- Dumping structure for table studentregis.teacherassistant
CREATE TABLE IF NOT EXISTS `teacherassistant` (
  `ID` varchar(13) NOT NULL,
  `titlename` varchar(10) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `gender` varchar(8) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.teacherassistant: ~2 rows (approximately)
DELETE FROM `teacherassistant`;
/*!40000 ALTER TABLE `teacherassistant` DISABLE KEYS */;
INSERT INTO `teacherassistant` (`ID`, `titlename`, `firstname`, `lastname`, `email`, `tel`, `gender`) VALUES
	('ta001', 'นาย', 'นพชัย', 'สวยมาก', 'noppachai.teepu@mail.kmutt.ac.', '0853713535', 'ชาย'),
	('ta002', 'นาย', 'วัชรินทร์', 'ศิริเนาวกุล', 'watcharin.anaunz@mail.kmutt.ac', '0992867533', 'ชาย');
/*!40000 ALTER TABLE `teacherassistant` ENABLE KEYS */;

-- Dumping structure for table studentregis.teacherteach
CREATE TABLE IF NOT EXISTS `teacherteach` (
  `teacherID` varchar(13) NOT NULL,
  `scheduleID` int(4) NOT NULL,
  PRIMARY KEY (`teacherID`,`scheduleID`),
  KEY `FK_teacherteach_schedule` (`scheduleID`),
  CONSTRAINT `FK_teacherteach_schedule` FOREIGN KEY (`scheduleID`) REFERENCES `schedule` (`ID`) ON UPDATE CASCADE,
  CONSTRAINT `FK_teacherteach_teacher` FOREIGN KEY (`teacherID`) REFERENCES `teacher` (`teacherID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table studentregis.teacherteach: ~15 rows (approximately)
DELETE FROM `teacherteach`;
/*!40000 ALTER TABLE `teacherteach` DISABLE KEYS */;
INSERT INTO `teacherteach` (`teacherID`, `scheduleID`) VALUES
	('t001', 3),
	('t002', 5),
	('t002', 7),
	('t002', 8),
	('t003', 4),
	('t003', 6),
	('t004', 1),
	('t004', 2),
	('t009', 16),
	('t009', 17),
	('t009', 18),
	('t009', 19),
	('t009', 23),
	('t009', 26),
	('t009', 27);
/*!40000 ALTER TABLE `teacherteach` ENABLE KEYS */;

-- Dumping structure for table studentregis.users
CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(70) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='keep username and password and role';

-- Dumping data for table studentregis.users: ~11 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`username`, `password`, `role`) VALUES
	('59070501000', '$2b$10$l9dNMB/LioCSc0pxKJC0Ye6nHiVMg93RsRo7DfJtSHIN24xpj1Eya', 'student'),
	('59070501037', '$2b$10$9ux9RYpyljlnfVXx3Sald.J4QlVwf/3SSV96BXe6RcNfUCbuecFgu', 'student'),
	('59070501038', '$2b$10$89FpDJtA4js8X/gF0iwsWuEBRMHWJO5xV2R6/vS2c.8.cZFFcr6pS', 'student'),
	('59070501081', '$2b$10$c1grsGbxxlfxWOIjru2ScOkUi6Jnibs1b6Remacul9Slj.z5n6hT2', 'student'),
	('59070501085', '$2b$10$OI/JYJ2DTWfp.EdUc58MLuK4s4ho1s5XqKE95URocduaZn3vK3J/K', 'student'),
	('59070501099', '$2b$10$TRKTODw88aYdrLuFIF6VweDIhQIanG6iz//4dW7j4qzjnf53IIfnG', 'student'),
	('a111', '$2b$10$9kneL.9EBl.586HsycH1LOocVVGmwem9KfTVY.VC.G93xjm7fDR3u', 'admin'),
	('admin_1', '$2b$10$9qP/v1E69wr4oJtqCCq/0uwQclpBVWabnksRPVGCaHyUkfsQRiKFS', 'admin'),
	('t009', '$2b$10$TtMk.ucpxRtLHTzSm9UCpOjtsrj5SeUlq/zQqhRdZmLJxZkP24Fim', 'teacher'),
	('t222', '$2b$10$FF/Mx5jyNVumTz5wTIoqYOxTh0OqIb8VWtpgVXW7H39QGE.UjVkH6', 'teacher'),
	('ta001', '$2b$10$oeGZs/s92kKcnMXMP7xvBOy0bNzRgharvEpzM/lDRLmHez8Ugg2jy', 'ta');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
