CREATE DATABASE ButterMeUp;
USE ButterMeUp;

#
# TABLE STRUCTURE FOR: category
#

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `cat_ID` int(11) NOT NULL,
  `catName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`cat_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;






#
# TABLE STRUCTURE FOR: customer
#

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `CID` int(11) NOT NULL,
  `First_Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Last_Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



#
# TABLE STRUCTURE FOR: cus_review
#

DROP TABLE IF EXISTS `cus_review`;

CREATE TABLE `cus_review` (
  `cusID` int(11) NOT NULL,
  `Creview` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Creview`,`cusID`),
  KEY `cusID` (`cusID`),
  CONSTRAINT `cus_review_ibfk_1` FOREIGN KEY (`cusID`) REFERENCES `customer` (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#
# TABLE STRUCTURE FOR: customer_phone
#

DROP TABLE IF EXISTS `customer_phone`;

CREATE TABLE `customer_phone` (
  `Phone_Number` double NOT NULL,
  `Cu_ID` int(11) NOT NULL,
  PRIMARY KEY (`Phone_Number`,`Cu_ID`),
  KEY `Cu_ID` (`Cu_ID`),
  CONSTRAINT `customer_phone_ibfk_1` FOREIGN KEY (`Cu_ID`) REFERENCES `customer` (`CID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;





#
# TABLE STRUCTURE FOR: employee
#

DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `EID` int(11) NOT NULL,
  `First_Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Last_Name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Gender` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `StoreID` int(11)  NOT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



#
# TABLE STRUCTURE FOR: employee_phone
#

DROP TABLE IF EXISTS `employee_phone`;

CREATE TABLE `employee_phone` (
  `Phone_Number` double NOT NULL,
  `Emp_ID` int(11) NOT NULL,
  PRIMARY KEY (`Phone_Number`,`Emp_ID`),
  KEY `Emp_ID` (`Emp_ID`),
  CONSTRAINT `employee_phone_ibfk_1` FOREIGN KEY (`Emp_ID`) REFERENCES `employee` (`EID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



#
# TABLE STRUCTURE FOR: product
#

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `PID` int(11) NOT NULL,
  `Pname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`PID`),
  KEY `categoryID` (`categoryID`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `category` (`cat_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;









#
# TABLE STRUCTURE FOR: store
#

DROP TABLE IF EXISTS `store`;

CREATE TABLE `store` (
  `ST_ID` int(11) NOT NULL,
  `Sname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `WarehouseID` int(11) NOT NULL,
  PRIMARY KEY (`ST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;






#
# TABLE STRUCTURE FOR: st_phone
#

DROP TABLE IF EXISTS `st_phone`;

CREATE TABLE `st_phone` (
  `Sto_ID` int(11) NOT NULL,
  `SPh` double NOT NULL,
  PRIMARY KEY (`SPh`,`Sto_ID`),
  KEY `Sto_ID` (`Sto_ID`),
  CONSTRAINT `st_phone_ibfk_1` FOREIGN KEY (`Sto_ID`) REFERENCES `store` (`ST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#
# TABLE STRUCTURE FOR: sells_to
#

DROP TABLE IF EXISTS `sells_to`;

CREATE TABLE `sells_to` (
  `Order_Total` decimal(10,2) NOT NULL,
  `Cus_ID` int(11) NOT NULL,
  `Str_ID` int(11) NOT NULL,
  `MOP` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  KEY `Cus_ID` (`Cus_ID`),
  KEY `Str_ID` (`Str_ID`),
  CONSTRAINT `sells_to_ibfk_1` FOREIGN KEY (`Cus_ID`) REFERENCES `customer` (`CID`),
  CONSTRAINT `sells_to_ibfk_2` FOREIGN KEY (`Str_ID`) REFERENCES `store` (`ST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;







#
# TABLE STRUCTURE FOR: supplier
#

DROP TABLE IF EXISTS `supplier`;

CREATE TABLE `supplier` (
  `SID` int(11) NOT NULL,
  `Sname` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Address` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ProductID` int(11) NOT NULL,
  PRIMARY KEY (`SID`),
  UNIQUE KEY `Address_UNIQUE` (`Address`),
  UNIQUE KEY `ProductID_UNIQUE` (`ProductID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



#
# TABLE STRUCTURE FOR: supplier_ph
#

DROP TABLE IF EXISTS `supplier_ph`;

CREATE TABLE `supplier_ph` (
  `supID` int(11) NOT NULL,
  `supPh` double NOT NULL,
  PRIMARY KEY (`supID`,`supPh`),
  CONSTRAINT `supplier_ph_ibfk_1` FOREIGN KEY (`supID`) REFERENCES `supplier` (`SID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;









#
# TABLE STRUCTURE FOR: warehouse
#

DROP TABLE IF EXISTS `warehouse`;

CREATE TABLE `warehouse` (
  `WID` int(11) NOT NULL,
  `Wname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`WID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `delivers_to` (
  `D_ID` int(11) unique NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Delivery Status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `storeID` int(11) NOT NULL,
  `wareID` int(11) NOT NULL,
  `prodID` int(11) NOT NULL,
  KEY `storeID` (`storeID`),
  KEY `wareID` (`wareID`),
  KEY `prodID` (`prodID`),
  CONSTRAINT `delivers_to_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `store` (`ST_ID`),
  CONSTRAINT `delivers_to_ibfk_2` FOREIGN KEY (`wareID`) REFERENCES `warehouse` (`WID`),
  CONSTRAINT `delivers_to_ibfk_3` FOREIGN KEY (`prodID`) REFERENCES `product` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#
# TABLE STRUCTURE FOR: stores1
#

DROP TABLE IF EXISTS `stores1`;

CREATE TABLE `stores1` (
  `Stock` int(11) NOT NULL,
  `Prd_ID` int(11) NOT NULL,
  `Wh_ID` int(11) NOT NULL,
   KEY `Prd_ID` (`Prd_ID`),
   KEY `Wh_ID` (`Wh_ID`),
   primary key(`Prd_ID`,`Wh_ID`),
  CONSTRAINT `stores1_ibfk_1` FOREIGN KEY (`Prd_ID`) REFERENCES `product` (`PID`),
  CONSTRAINT `stores1_ibfk_2` FOREIGN KEY (`Wh_ID`) REFERENCES `warehouse` (`WID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#
# TABLE STRUCTURE FOR: w_phone
#

DROP TABLE IF EXISTS `w_phone`;

CREATE TABLE `w_phone` (
  `Whr_ID` int(11) NOT NULL,
  `WPh` double NOT NULL,
  PRIMARY KEY (`WPh`,`Whr_ID`),
  KEY `Whr_ID` (`Whr_ID`),
  CONSTRAINT `w_phone_ibfk_1` FOREIGN KEY (`Whr_ID`) REFERENCES `warehouse` (`WID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#
# TABLE STRUCTURE FOR: stores2
#

DROP TABLE IF EXISTS `stores2`;

CREATE TABLE `stores2` (
  `Stock` int(11) NOT NULL,
  `Store_ID` int(11) NOT NULL,
  `Prd_ID` int(11) NOT NULL,
  KEY `Store_ID` (`Store_ID`),
  KEY `Prd_ID` (`Prd_ID`),
  primary key(`Store_ID`,`Prd_ID`),
  CONSTRAINT `stores2_ibfk_1` FOREIGN KEY (`Store_ID`) REFERENCES `store` (`ST_ID`),
  CONSTRAINT `stores2_ibfk_2` FOREIGN KEY (`Prd_ID`) REFERENCES `product` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


#
# TABLE STRUCTURE FOR: supplies
#

DROP TABLE IF EXISTS `supplies`;

CREATE TABLE `supplies` (
  `quantity` int(11) NOT NULL,
  `supplierID` int(11) NOT NULL,
  `warehouseID` int(11) NOT NULL,
  KEY `supplierID` (`supplierID`),
  KEY `warehouseID` (`warehouseID`),
  CONSTRAINT `supplies_ibfk_1` FOREIGN KEY (`supplierID`) REFERENCES `supplier` (`SID`),
  CONSTRAINT `supplies_ibfk_2` FOREIGN KEY (`warehouseID`) REFERENCES `warehouse` (`WID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `delivers_to`;
CREATE TABLE `delivers_to` (
  `D_ID` int(11) NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `Delivery_Status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `storeID` int(11) NOT NULL,
  `wareID` int(11) NOT NULL,
  `prodID` int(11) NOT NULL,
  KEY `storeID` (`storeID`),
  KEY `wareID` (`wareID`),
  KEY `prodID` (`prodID`),
  CONSTRAINT `delivers_to_ibfk_1` FOREIGN KEY (`storeID`) REFERENCES `store` (`ST_ID`),
  CONSTRAINT `delivers_to_ibfk_2` FOREIGN KEY (`wareID`) REFERENCES `warehouse` (`WID`),
  CONSTRAINT `delivers_to_ibfk_3` FOREIGN KEY (`prodID`) REFERENCES `product` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



