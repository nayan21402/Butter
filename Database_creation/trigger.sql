USE ButterMeUp;

delimiter //
CREATE DEFINER=`root`@`%` TRIGGER `stores1_BEFORE_INSERT` BEFORE INSERT ON `stores1` FOR EACH ROW BEGIN
	IF new.stock < 0 THEN
               SET new.stock = 0;
	ELSEIF new.stock > 1000 THEN
               SET new.stock = 1000;
	END IF;
END
delimiter //
CREATE DEFINER=`root`@`%` TRIGGER `stores1_BEFORE_UPDATE` BEFORE UPDATE ON `stores1` FOR EACH ROW BEGIN
	IF new.stock < 0 THEN
               SET new.stock = 0;
	ELSEIF new.stock > 1000 THEN
               SET new.stock = 1000;
	END IF;
END