
# Date: 2021-05-12 14:43:36


#
# Structure for table "student"
#

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `gender` int(2) unsigned NOT NULL DEFAULT '0',
  `age` varchar(255) DEFAULT NULL,
  `hobbies` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "student"
#

INSERT INTO `student` VALUES (1,'钟万顺',0,'18','吃鸡'),(2,'高宇锦',1,'18','炉石，王者'),(3,'杨有福',0,'19','GTA5'),(4,'余维鹏',1,'19','约妹子');
