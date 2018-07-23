/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : data_info

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2018-07-23 10:35:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_plat_rank_thirdparty`
-- ----------------------------
DROP TABLE IF EXISTS `t_plat_rank_thirdparty`;
CREATE TABLE `t_plat_rank_thirdparty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `question` varchar(3000) DEFAULT NULL,
  `author` varchar(10) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_plat_rank_thirdparty
-- ----------------------------
INSERT INTO `t_plat_rank_thirdparty` VALUES ('1', '网贷之家', '2018-06-15 推荐的投之家暴雷**2018-07-15 合时代出问题**2018-07-15 多多理财出问题**2018-07-15 合力贷出问题**2018-07-16 永利宝出问题**2018-07-16 可溯金融出问题**2018-07-23 爱钱帮出问题**2018-07-23 银豆网出问题**2018-07-23 礼德财富出问题', null, 'https://www.wdzj.com/');
INSERT INTO `t_plat_rank_thirdparty` VALUES ('2', '网贷天眼', '2018-07-16 永利宝出问题**2018-07-16 可溯金融出问题**2018-07-23 爱钱帮出问题', null, 'https://www.p2peye.com/rating/');
INSERT INTO `t_plat_rank_thirdparty` VALUES ('3', '融360', '2018-07-15 钱爸爸出问题**2018-07-15 合力贷出问题**2018-07-16 永利宝出问题**2018-07-23 爱钱帮出问题**2018-07-23 银豆网出问题', null, 'https://www.rong360.com/licai-p2p/');
INSERT INTO `t_plat_rank_thirdparty` VALUES ('4', '跟投', '2018-07-15 投之家出问题**2018-07-15 合时代出问题**2018-07-16 永利宝出问题**2018-07-23 爱钱帮出问题', null, 'http://www.51hjgt.com/p2p/');
INSERT INTO `t_plat_rank_thirdparty` VALUES ('5', '贷罗盘', '2018-07-15 合时代出问题**2018-07-15 小微时贷出问题**2018-07-16 永利宝出问题**2018-07-16 可溯金融出问题**2018-07-23 爱钱帮出问题**2018-07-23 银豆网出问题**2018-07-23 礼德财富出问题', null, 'http://www.dailuopan.com/pingji/all');
