<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-03 14:17:34
 * @version $Id$
 */
//require_once("demo3.php");
header("charset=utf-8");
session_start();
if (md5($_POST["verification"])==$_SESSION["verification"]) {
	echo "验证成功";
}
else{
	echo "验证失败";
}
?>