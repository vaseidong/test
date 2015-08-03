<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-03 11:51:15
 * @version $Id$
 */
session_start();
header('Content-Type=image/png;charset=utf-8');
//随机字符生成函数
function randomStr($len){
	$oldStr='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	$newStr='';
	for ($i=0; $i < $len; $i++) { 
		$newStr.=$oldStr[mt_rand(0,61)];
	}
	return $newStr;
}
$a=randomStr(4);
//echo $a;
//设置图像宽高
$height=25;
$width=50;
//生成图像
$img=imagecreatetruecolor($width,$height);
//设置图像背景颜色
$imgcolor=imagecolorallocate($img, 255, 255, 255);
//设置像素点颜色
$pixels=imagecolorallocate($img, 255, 0, 0);
//设置字符颜色
$font=imagecolorallocate($img, 41, 163, 238);
//绘制像素点
for ($i=0; $i < 500; $i++) { 
	imagesetpixel($img, mt_rand(0,$width), mt_rand(0,$height), $pixels);
}
//设置验证码内容及颜色
imagestring($img, 5, 7, 5, $a, $font);
imagepng($img);
imagedestroy($img);
//var_dump($img);
//加密
$a=md5($a);
$_SESSION['verification']=$a;

?>