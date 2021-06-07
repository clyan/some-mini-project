/*
Navicat MySQL Data Transfer

Source Server         : ebuy
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : ebuy

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2019-02-13 00:14:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `a_name` varchar(30) DEFAULT NULL,
  `a_pass` varchar(30) DEFAULT NULL,
  `a_header` varchar(30) DEFAULT NULL,
  `a_phone` char(15) DEFAULT NULL,
  `a_email` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('liuzc518', 'liuzc518', 'images\\face\\Image25.gif', '8208290', 'liuzc518@163.com');
INSERT INTO `admin` VALUES ('tangzy', 'nihao', 'images\\face\\Image25.gif', '123232', 'tangzy111@sohu.com');
INSERT INTO `admin` VALUES ('admin', '123456', null, null, null);

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `c_name` varchar(30) NOT NULL,
  `c_pass` varchar(30) NOT NULL,
  `c_header` varchar(225) NOT NULL,
  `c_phone` varchar(15) NOT NULL,
  `c_question` varchar(30) NOT NULL,
  `c_answer` varchar(30) NOT NULL,
  `c_address` varchar(50) DEFAULT NULL,
  `c_email` varchar(50) NOT NULL,
  PRIMARY KEY (`c_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customer
-- ----------------------------
INSERT INTO `customer` VALUES ('13142189031', '99', 'resources/img/header.jpg\r\n', '18890052317', '您的生日是?', '991119', '999', '99');
INSERT INTO `customer` VALUES ('18890052317', '123456', 'resources/img/u=144388917,3393541021&fm=26&gp=0.jpg\r\n', '18890052317', '您的生日是?', '991119', '湖南商务职业技术学院', '1570555124@qq.com');
INSERT INTO `customer` VALUES ('admin', '123456', 'resources/img/4e488bad48fe43fc8afa36f02e41ec6c.jpg\r\n', '18890052317', '您的生日是?', '2019-2-9', '湖南商务职业技术学院', '18890052317');
INSERT INTO `customer` VALUES ('ebuytest', 'ebuytest', 'images\\face\\Image1.gif', '07338208290', '你最喜欢的人是?', '刘津', '湖南株洲', 'ebuy@163.com');
INSERT INTO `customer` VALUES ('liujin0414', '990414', 'images\\face\\Image23.gif', '07336188290', '你最喜欢的人是?', '老爸', '湖南株洲', 'liujin@163.com');
INSERT INTO `customer` VALUES ('liuzc518', 'liuzc518', 'images\\face\\Image1.gif', '8208290', '你最喜欢的人是?', '刘津', '湖南株洲', 'liuzc518@163.com');
INSERT INTO `customer` VALUES ('null', '', 'images\\face\\Image1.gif', '18890052317', '', '', '湖南商务职业技术学院', '2429335889@qq.com');
INSERT INTO `customer` VALUES ('tangzy', 'nihao', 'images\\face\\Image37.gif', '8888888', '你最喜欢的人是?', '爸爸', '湖南株洲', 'tangzy@sohu.com');
INSERT INTO `customer` VALUES ('wuhaibo', 'wuhaibo', 'images\\face\\Image26.gif', '13246579845', '你最喜欢的一部电影是?', '真实的谎言', '湖南湘潭', 'wu2bo@sina.com');
INSERT INTO `customer` VALUES ('模式', '991119', 'resources/img/header.jpg\r\n', '18890052317', '您的生日是?', '991119', '湖南商务职业技术学院', '1570555124@qq.com');

-- ----------------------------
-- Table structure for demo
-- ----------------------------
DROP TABLE IF EXISTS `demo`;
CREATE TABLE `demo` (
  `name` varchar(30) DEFAULT NULL,
  `pass` varchar(30) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `phone` char(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of demo
-- ----------------------------
INSERT INTO `demo` VALUES ('demo', 'demo', 'demo@163.com', '8888888');
INSERT INTO `demo` VALUES ('liuzc', 'liuzc', 'liuzc@163.com', '8208290');

-- ----------------------------
-- Table structure for idea
-- ----------------------------
DROP TABLE IF EXISTS `idea`;
CREATE TABLE `idea` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(30) NOT NULL,
  `c_header` varchar(225) NOT NULL,
  `new_message` varchar(255) NOT NULL,
  `re_message` varchar(255) DEFAULT NULL,
  `new_time` char(20) NOT NULL,
  `re_time` char(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=659 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of idea
-- ----------------------------
INSERT INTO `idea` VALUES ('326', 'tangzy', 'images\\face\\Image37.gif', '快来买啊', '好啊', '7:40 3-28-2008', '7:43 3-28-2008');
INSERT INTO `idea` VALUES ('447', 'tangzy', 'images\\face\\Image5.gif', '海尔商品很好', '感谢支持', '7:14 3-28-2008', '7:43 3-28-2008');
INSERT INTO `idea` VALUES ('644', 'liuzc', 'images\\face\\Image19.gif', '服务很好', '谢谢!', '10:15 3-27-2008', '7:43 3-28-2008');
INSERT INTO `idea` VALUES ('654', '18890052317', 'resources/img/u=144388917,3393541021&fm=26&gp=0.jpg\r\n', '其实没什么道理', '感谢支持', '08:00 05-57-2019', '2019-01-06 20:00:25');
INSERT INTO `idea` VALUES ('656', '18890052317', 'resources/img/u=144388917,3393541021&fm=26&gp=0.jpg\r\n', '商品太垃圾了，都不用付钱，就支付成功', '即日起，免费送', '08:08 06-02-2019', '2019-01-06 20:02:42');
INSERT INTO `idea` VALUES ('657', 'admin', 'resources/img/4e488bad48fe43fc8afa36f02e41ec6c.jpg\r\n', '管理员表示很好', null, '08:42 06-08-2019', null);
INSERT INTO `idea` VALUES ('658', 'admin', 'resources/img/4e488bad48fe43fc8afa36f02e41ec6c.jpg\r\n', '好', null, '10:34 07-28-2019', null);

-- ----------------------------
-- Table structure for main_type
-- ----------------------------
DROP TABLE IF EXISTS `main_type`;
CREATE TABLE `main_type` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_type` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=374 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of main_type
-- ----------------------------
INSERT INTO `main_type` VALUES ('290', '电脑专区');
INSERT INTO `main_type` VALUES ('341', '洗衣机系列');
INSERT INTO `main_type` VALUES ('368', '厨卫系列');
INSERT INTO `main_type` VALUES ('370', '电视机系列');
INSERT INTO `main_type` VALUES ('373', '水果系列');

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `n_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_message` varchar(1000) NOT NULL,
  `n_admin` varchar(30) NOT NULL,
  `n_header` varchar(50) DEFAULT NULL,
  `n_time` char(225) DEFAULT NULL,
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB AUTO_INCREMENT=888 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES ('181', '迎新年,数码产品特惠!~', 'tangzy', 'images\\face\\Image28.gif', '8-17-2008');
INSERT INTO `notice` VALUES ('489', '各种家电超低价销售!!!', 'tangzy', 'images\\face\\Image28.gif', '3-17-2008');
INSERT INTO `notice` VALUES ('528', '祝各位会员牛年大吉,牛气冲天!', 'tangzy', 'images\\face\\Image28.gif', '1-17-2009');
INSERT INTO `notice` VALUES ('884', '圣诞团队活动,优惠多多...', 'tangzy', 'images\\face\\Image28.gif', '12-16-2008');
INSERT INTO `notice` VALUES ('887', '冬季上新', 'admin', null, '2019-01-06 20:03:07');

-- ----------------------------
-- Table structure for orderdetails
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(225) NOT NULL,
  `p_id` int(10) NOT NULL,
  `p_price` float NOT NULL,
  `p_number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------
INSERT INTO `orderdetails` VALUES ('1', '0117483494', '0', '4928', '1');
INSERT INTO `orderdetails` VALUES ('2', '0117483494', '0', '2390', '1');
INSERT INTO `orderdetails` VALUES ('3', '0117483494', '0', '1985', '1');
INSERT INTO `orderdetails` VALUES ('4', '0117483494', '0', '3058', '1');
INSERT INTO `orderdetails` VALUES ('5', '0117483494', '0', '1142', '1');
INSERT INTO `orderdetails` VALUES ('6', '9996374742', '0', '5998', '2');
INSERT INTO `orderdetails` VALUES ('7', '9996374742', '0', '5478', '1');
INSERT INTO `orderdetails` VALUES ('8', '9996374742', '0', '1890', '1');
INSERT INTO `orderdetails` VALUES ('9', '7083902532', '0', '7000', '10');
INSERT INTO `orderdetails` VALUES ('10', '7350963892', '0', '4899', '1');
INSERT INTO `orderdetails` VALUES ('11', '7350963892', '0', '2728', '2');
INSERT INTO `orderdetails` VALUES ('12', '7350963892', '0', '4928', '1');
INSERT INTO `orderdetails` VALUES ('13', 'O20190103112451', '1', '5998', '1');
INSERT INTO `orderdetails` VALUES ('33', 'O20190105225731', '23', '1142', '1');
INSERT INTO `orderdetails` VALUES ('65', 'O20190106142800', '23', '1142', '1');
INSERT INTO `orderdetails` VALUES ('66', 'O20190106174512', '22', '8999', '1');
INSERT INTO `orderdetails` VALUES ('67', 'O20190106174930', '26', '5478', '2');
INSERT INTO `orderdetails` VALUES ('76', 'O20190106175226', '23', '1142', '1');
INSERT INTO `orderdetails` VALUES ('78', 'O20190106175226', '20', '13500', '1');
INSERT INTO `orderdetails` VALUES ('80', 'O20190106185716', '23', '1142', '1');
INSERT INTO `orderdetails` VALUES ('82', 'O20190106204018', '24', '1086', '1');
INSERT INTO `orderdetails` VALUES ('88', 'O20190106211112', '24', '1086', '1');
INSERT INTO `orderdetails` VALUES ('96', 'O20190106212541', '28', '20', '1');
INSERT INTO `orderdetails` VALUES ('97', 'O20190107090840', '23', '1142', '1');
INSERT INTO `orderdetails` VALUES ('98', 'O20190107090915', '24', '1086', '1');
INSERT INTO `orderdetails` VALUES ('108', 'O20190107093204', '28', '20', '1');
INSERT INTO `orderdetails` VALUES ('109', 'O20190107093204', '3', '8998', '1');
INSERT INTO `orderdetails` VALUES ('110', 'O20190106191028', '18', '2728', '1');
INSERT INTO `orderdetails` VALUES ('112', 'O190211200547', '24', '1086', '1');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` varchar(225) NOT NULL,
  `order_payment` varchar(100) DEFAULT NULL,
  `order_address` varchar(200) NOT NULL,
  `order_email` varchar(50) NOT NULL,
  `order_user` varchar(30) NOT NULL,
  `order_time` varchar(30) NOT NULL,
  `order_sum` float(8,0) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('0117483494', '银行付款', '湖南株洲', 'tangzy@sohu.com', 'tangzy', '3-20-2005', '13503', '1');
INSERT INTO `orders` VALUES ('7083902532', '在线支付', '湖南株洲', 'tangzy@.com', 'tangzy', '3-28-2005', '70000', '1');
INSERT INTO `orders` VALUES ('7350963892', '银行支付', '湖南铁道职业技术学院信息工程系', 'liuzc518@163.com', 'liujin0414', '1-20-2009', '15283', '1');
INSERT INTO `orders` VALUES ('9996374742', '银行支付', '湖南株洲', 'ebuy@163.com', 'ebuytest', '1-20-2009', '19364', '2');
INSERT INTO `orders` VALUES ('O190211200547', null, '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-02-11 20:05:47', '1086', '-1');
INSERT INTO `orders` VALUES ('O20190103112451', '在线支付', '湖南商务职业技术学院', '湖南商务职业技术学院', '18890052317', '2019-01-03 11:24:51', '17994', '0');
INSERT INTO `orders` VALUES ('O20190105225731', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '模式', '2019-01-05 22:57:31', '1142', '0');
INSERT INTO `orders` VALUES ('O20190106142800', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-01-06 14:28:00', '1142', '0');
INSERT INTO `orders` VALUES ('O20190106174512', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-01-06 17:45:12', '8999', '0');
INSERT INTO `orders` VALUES ('O20190106174930', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-01-06 17:49:30', '10956', '0');
INSERT INTO `orders` VALUES ('O20190106175226', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-01-06 17:52:26', '14642', '0');
INSERT INTO `orders` VALUES ('O20190106185716', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-01-06 18:57:16', '1142', '0');
INSERT INTO `orders` VALUES ('O20190106191028', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '18890052317', '2019-01-06 19:10:28', '2728', '0');
INSERT INTO `orders` VALUES ('O20190106204018', '在线支付', '湖南商务职业技术学院', '18890052317', 'admin', '2019-01-06 20:40:18', '1086', '0');
INSERT INTO `orders` VALUES ('O20190106211112', '在线支付', '湖南商务职业技术学院', '18890052317', 'admin', '2019-01-06 21:11:12', '4900', '0');
INSERT INTO `orders` VALUES ('O20190106212541', '在线支付', '湖南商务职业技术学院', '18890052317', 'admin', '2019-01-06 21:25:41', '20', '0');
INSERT INTO `orders` VALUES ('O20190107090840', '在线支付', '湖南商务职业技术学院', '18890052317', 'admin', '2019-01-07 09:08:40', '1142', '0');
INSERT INTO `orders` VALUES ('O20190107090915', '在线支付', '湖南商务职业技术学院', '18890052317', 'admin', '2019-01-07 09:09:15', '1086', '0');
INSERT INTO `orders` VALUES ('O20190107093204', '在线支付', '湖南商务职业技术学院', '1570555124@qq.com', '模式', '2019-01-07 09:32:04', '9018', '0');

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `pay_id` int(11) NOT NULL AUTO_INCREMENT,
  `pay_payment` varchar(50) NOT NULL,
  `pay_msg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pay_id`)
) ENGINE=InnoDB AUTO_INCREMENT=453 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of payment
-- ----------------------------
INSERT INTO `payment` VALUES ('91', '在线支付', 'www.easybuyonline.com\r\n');
INSERT INTO `payment` VALUES ('439', '银行支付', '请记住帐号：1324659831221656');
INSERT INTO `payment` VALUES ('441', '在线支付', '123');
INSERT INTO `payment` VALUES ('442', '银联支付', '465+4');
INSERT INTO `payment` VALUES ('443', '在线支付', '最后两台');
INSERT INTO `payment` VALUES ('444', '在线支付', '12');
INSERT INTO `payment` VALUES ('445', '在线支付', '');
INSERT INTO `payment` VALUES ('446', '银联支付', '3213');
INSERT INTO `payment` VALUES ('447', '在线支付', '');
INSERT INTO `payment` VALUES ('448', '在线支付', '好吃的apple');
INSERT INTO `payment` VALUES ('449', '在线支付', 'nice啊');
INSERT INTO `payment` VALUES ('450', '在线支付', '风格');
INSERT INTO `payment` VALUES ('451', '在线支付', '好的');
INSERT INTO `payment` VALUES ('452', '在线支付', '');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_type` varchar(30) NOT NULL,
  `p_name` varchar(40) NOT NULL,
  `p_price` float NOT NULL,
  `p_quantity` int(11) NOT NULL,
  `p_image` varchar(100) DEFAULT NULL,
  `p_description` varchar(2000) NOT NULL,
  `p_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('2', '电脑专区', '海尔H3000-G002 ', '7899', '20', 'images\\computer\\7.jpg', '人性化设计：静音设计，让您拥有安静的工作环境；多功能设计，多媒体、上网、游戏、工作等，从视觉和听觉上获得更佳的享受；人性化设计的前置高速USB2.0和音效接口，方便易用前置常用接口，让你无需为外设转接而烦恼，让你的生活与工作更轻松、更灵活、更方便；单键记忆恢复功能，系统崩溃无烦恼，让系统运行更稳定、数据更安全。', '2019-01-06 20:19:11');
INSERT INTO `product` VALUES ('3', '电脑专区', '海尔W12-T225', '8998', '19', 'images\\computer\\8.jpg', '产品分类：笔记本电脑 \r\n产品型号：W12-T22512080BaWN \r\n屏幕大小：12.1寸宽屏液晶 \r\nCPU类型：酷睿双核T2250 \r\n硬盘容量：80G ', '3-17-2005');
INSERT INTO `product` VALUES ('4', '电脑专区', '海尔W36-T22', '8598', '20', 'images\\computer\\9.jpg', '产品分类：笔记本电脑 \r\n产品型号：W36-T22512080BaWG \r\n屏幕大小：13.3寸宽屏 \r\nCPU类型：酷睿双核T2250 \r\n硬盘容量：80G ', '3-18-2005');
INSERT INTO `product` VALUES ('5', '电脑专区', '海尔H32笔记本电脑', '7298', '20', 'images\\computer\\10.jpg', '润清独显,极速魅力 \r\n极速双核动力,整体性能提高68%（较上代平台） \r\n独立显卡X300 \r\n高清200万像素摄像头 \r\n不凡配色，时尚造型 \r\n造型独特的立体声音响 \r\n低噪低功耗硬盘，贴心保护数据安全 \r\n动感触控板，独立方向键 \r\n超大散热空间加智能线性风扇 ', '3-16-2005');
INSERT INTO `product` VALUES ('6', '电脑专区', '海尔W18笔记本电脑 ', '6798', '20', 'images\\computer\\11.jpg', '12.1英寸润清宽屏 惊艳亮丽画质 \r\n双核强动力 系统整体性能跃升68％ \r\n隐藏式转轴设计,开合自如 \r\n易读指示灯设计，主要部件运行状态一目了然 \r\n易拉式网卡插口，使用方便 \r\n金属质感触控板，采用防磨损设计 \r\n内置一体式四合一读卡器，防尘美观 \r\n特设无线网络开关，一键切换 ', '3-16-2005');
INSERT INTO `product` VALUES ('7', '电脑专区', '海尔H8台式电脑', '29999', '20', 'images\\computer\\12.jpg', 'CPU类型：英特尔 QX6700 四核处理器 \r\n硬盘容量：250 \r\n内存：2G ', '3-16-2005');
INSERT INTO `product` VALUES ('8', '电脑专区', '海尔H30笔记本电脑', '5998', '17', 'images\\computer\\13.jpg', '奔腾芯+独显 \r\n经典游戏机型 \r\nATI超极独立显卡 \r\n高清200万像素摄像头 \r\nMTBF4万小时认证测试 \r\n大键程键盘，长期使用不疲劳 \r\n磨砂耐磨表面，不怕硬物划伤 \r\n易用性触控板，操控得心应手 \r\n专业铰链式转轴，阻尼设计工艺 ', '3-16-2005');
INSERT INTO `product` VALUES ('9', '电脑专区', 'NEC笔记本电脑', '5999', '20', 'images\\computer\\14.jpg', '可选颜色：银灰色  \r\nCPU:AMD 3100+\r\n内存:256M DDRII\r\n硬盘:80G\r\n屏幕:15.4寸炫丽屏', '3-16-2005');
INSERT INTO `product` VALUES ('10', '厨卫系列', '爱德SC电热水煲', '118', '19', 'images\\other\\13.jpg', '产品型号：SC135B \r\n材质：食品级塑料 \r\n容量：1.0 \r\n功率：1350 ', '3-18-2005');
INSERT INTO `product` VALUES ('11', '厨卫系列', '爱德LD豆浆机', '220', '20', 'images\\other\\14.jpg', '可选颜色：黄色  \r\n全自动煮豆浆，具有保温功能\r\n可免泡豆（一杯干豆100克）', '3-16-2005');
INSERT INTO `product` VALUES ('12', '厨卫系列', '爱德ZZ18A榨汁机', '135', '19', 'images\\other\\15.jpg', '产品型号：ZZ18A \r\n最大功率（w） ：220 \r\n容量：750ml \r\n材质：金属滤网', '3-16-2005');
INSERT INTO `product` VALUES ('13', '厨卫系列', '电烤箱', '240', '20', 'images\\other\\16.jpg', '可选颜色：银灰色  \r\n可调式温控器，温度可自由调节\r\n60分钟内自由调节时间长短\r\n带烧烤盘，烧烤架\r\n烧烤，烘培功能\r\n耐热玻璃门\r\n容易清洗\r\n可拆卸式清洁盘\r\n加热方式独特，可选择上管加热、下管加热、上下管同时', '3-16-2005');
INSERT INTO `product` VALUES ('14', '厨卫系列', '电压力锅', '440', '20', 'images\\other\\17.jpg', '智能型电气锅(全塑盖不锈钢) ●容量5L,功率900W\r\n●10重安全保护装置，使用更放心\r\n●煮、煲、炖、焖，烹饪功能更齐全\r\n●磨砂不锈钢外壳，时尚大方\r\n●电脑型按键菜单烹饪功能，更直观，方便，高档\r\n●超厚黑晶不粘内胆，导热更好，清洗方便\r\n●自动加压保压，无需人工干预\r\n●工作过程不冒热气，热效率极高，非常省电\r\n●24小时预约定时功能，使用更省心\r\n●具有防烫功能', '3-16-2005');
INSERT INTO `product` VALUES ('15', '厨卫系列', '万和ZLD46-5消毒柜', '699', '20', 'images\\other\\18.jpg', '★先进的数码控制，充分发挥数字控制更快速、更精确的优势，消毒更彻底。\r\n\r\n★大屏幕VFD动态显示屏，工作状态清清楚楚。\r\n\r\n★强力臭氧与高效紫外线二种杀菌方式，消毒效果达国标星级要求。\r\n\r\n★PTC循环热风烘干，保证消毒室内处于干燥无菌状态。\r\n\r\n★高密度聚氨脂整体发泡，行业独有，保温效果好，节能省电。\r\n\r\n★全不锈钢内胆及层架，永保消毒室的纯净品质。\r\n\r\n★具有过热、超载、风机故障等多重安全保护装置，使用无忧。\r\n\r\n产品参数：\r\n    系列名称：数码屏显系列消毒柜', '3-16-2005');
INSERT INTO `product` VALUES ('16', '厨卫系列', '电火锅', '139', '19', 'images\\other\\19.jpg', '可选颜色：银灰色  \r\nA120T3 \r\n豪华电热不粘火锅 \r\n\r\n容量:2.5L,功率1300W\r\n分体式底部发热,热效率更高\r\n体积小,容量大\r\n无级调温模式\r\n装有超温保护装置,安全可靠\r\n造型美观新颖,高雅大方\r\n分体结构,清洗方便\r\n', '3-16-2005');
INSERT INTO `product` VALUES ('17', '厨卫系列', '万和超薄电热水器', '1520', '20', 'images\\other\\20.jpg', '产品参数： \r\n    系列名称：H型超薄系列\r\n    产品型号：DSZF50-H\r\n    外型尺寸（mm）：855*376*260\r\n    额定功率(W)：1500\r\n    容积(L)：50\r\n    水温调节范围：30℃-75℃', '3-16-2005');
INSERT INTO `product` VALUES ('18', '厨卫系列', '海尔XQG52', '2728', '2', 'images\\washing\\19.jpg', '极限设计 减薄不减量 \r\n自选挡功能：不同洗涤情况，可以设置不同洗涤档位，通过优化洗涤程序，缩短洗衣时间，减少用水量 \r\n40公分超薄，5.2公斤大容量。极限超薄设计，符合家居简约格调，为你的居所节省更多写意空间，整体嵌入设计为生活省出更多空间 \r\n各种面料智能洗涤,强大功能软件优化各项洗涤参数，全面料洗涤程序, 为现代家庭提供更多选择 ', '3-21-2005');
INSERT INTO `product` VALUES ('19', '电视机系列', '创维TFT32L16SW', '5999', '20', 'images\\TV\\1.jpg', '可选颜色：浅绿色  \r\n六基色图像处理技术\r\nV12数字引擎\r\nBlue wave无线蓝波\r\n超稳USB流媒体技术\r\n画中画、双视窗\r\n高亮度600cd/m2\r\n超高动态对比度3000:1\r\n超快响应时间6ms\r\n超宽可视角度178°\r\n物理分辨率1366x768\r\n超高支持分辨率1920x1200\r\nHDMI高清晰多媒体端口 ', '3-18-2005');
INSERT INTO `product` VALUES ('20', '电视机系列', 'LG42LC2RR', '13500', '19', 'images\\TV\\6.jpg', '暂无说明', '3-17-2005');
INSERT INTO `product` VALUES ('21', '电视机系列', 'LG50PC1R', '21900', '20', 'images\\TV\\7.jpg', '产品分类：等离子 \r\n产品型号：50PC1R \r\n显示器尺寸：50英寸 \r\n屏幕比例：16:9 \r\n扫描方式：逐行', '3-17-2005');
INSERT INTO `product` VALUES ('22', '电视机系列', '夏新LC-37M1', '8999', '19', 'images\\TV\\8.jpg', '产品分类：液晶 \r\n产品型号：LC-37M1 \r\n显示器尺寸：37寸 \r\n屏幕比例：16:9 \r\n分辨率：1366*768 ', '3-17-2005');
INSERT INTO `product` VALUES ('23', '洗衣机系列', '海尔X小小神童', '1142', '4', 'images\\washing\\6.jpg', '内衣外衣分开洗 小件衣物及时洗 \r\n透明上盖，洗涤过程一目了然 \r\n不怕水，永不生锈 \r\n如同手搓衣物，带来手洗效果 \r\n手搓式技术，波轮与内桶反向旋转，产生的水流形状就如同手搓衣物 \r\n进口材料，经久耐用 \r\n两遍洗程序，全面瓦解污渍，提高洗净度 \r\n特设羊毛洗程序，可以洗涤毛制品或内衣 \r\n音乐提醒功能，增加洗衣乐趣 \r\n ', '3-19-2005');
INSERT INTO `product` VALUES ('24', '洗衣机系列', '海尔XQB50', '1086', '17', 'images\\washing\\8.jpg', '进口材料 经济耐用 \r\n性价比高，经济实惠 \r\n不怕水，防生锈 \r\n十分钟速洗，节水节能 \r\n智能控制技术：满足多种衣物洗涤要求，能自动感知衣料及衣物重量，智能编程，自动为您要洗的衣物选择洗衣时间、用水量及用电量等 \r\n数码管显示，显示剩余时间和预约时间 \r\n排水电机静音设计，全过程享受安静 \r\n十分钟速洗是指少量轻污衣物可以在十分钟内完成洗涤、漂洗、脱水全过程，最大限度的加快洗衣速度，提高效率 \r\n预约功能，方便实用 ', '3-19-2005');
INSERT INTO `product` VALUES ('25', '洗衣机系列', '海尔XQB50-18', '1725', '7', 'images\\washing\\9.jpg', '海尔手搓式洗衣机 洗得净又磨损低 \r\n透明上盖，洗涤过程一目了然 \r\n不怕水，防生锈 \r\n如同手搓衣物，带来手洗效果 \r\n手搓式技术，波轮与内桶反向旋转，产生的水流形状就如同手搓衣物 \r\n盆型大波轮专利结构，大波轮对水的带动力更强，同时凹进的盆型，减少衣物和波轮直接接触，降低了磨损率 \r\n智能控制，可根据衣物的重量及质量自动选择一种合适的程序 \r\n“自编程”洗衣机，用户可根据需要自行设定漂、脱次数，浸泡、洗涤、脱水时间 \r\n预约功能，方便实用 ', '3-19-2005');
INSERT INTO `product` VALUES ('26', '洗衣机系列', '海尔XQSB55', '5478', '0', 'images\\washing\\10.jpg', '暂无说明', '3-21-2005');

-- ----------------------------
-- Table structure for sub_type
-- ----------------------------
DROP TABLE IF EXISTS `sub_type`;
CREATE TABLE `sub_type` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_supertype` int(11) NOT NULL,
  `s_name` varchar(30) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sub_type
-- ----------------------------
INSERT INTO `sub_type` VALUES ('1', '187', '海尔');
INSERT INTO `sub_type` VALUES ('2', '187', '松下');
INSERT INTO `sub_type` VALUES ('3', '187', '长虹');
INSERT INTO `sub_type` VALUES ('4', '187', '康佳');
INSERT INTO `sub_type` VALUES ('5', '187', '海信');
INSERT INTO `sub_type` VALUES ('6', '368', '好太太');
INSERT INTO `sub_type` VALUES ('7', '368', '爱妻');
INSERT INTO `sub_type` VALUES ('8', '368', '欧派');
INSERT INTO `sub_type` VALUES ('9', '368', '海尔');

-- ----------------------------
-- Table structure for sysdiagrams
-- ----------------------------
DROP TABLE IF EXISTS `sysdiagrams`;
CREATE TABLE `sysdiagrams` (
  `name` varchar(128) DEFAULT NULL,
  `principal_id` int(11) DEFAULT NULL,
  `diagram_id` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `definition` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sysdiagrams
-- ----------------------------
