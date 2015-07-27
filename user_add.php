<?php 
	$conn = mysql_connect('127.0.0.1','','');
	mysql_select_db('test');
	mysql_query('set names utf8');
	$sql = 'select * from user_passwd';
	$res = mysql_query($sql,$conn);
	$bBtn = true; 
	while ($row = mysql_fetch_row($res)) {
	 	if ($_POST['username'] == $row[0] && md5($_POST['password']) == $row[1]) {
			echo "登录成功！";
			$bBtn = false;
			return;
	 	}
	}
	if ($bBtn) {
		echo "用户名或密码不正确！";
	}
	mysql_free_result($res);
	mysql_close($conn);
?>