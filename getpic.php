<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-30 10:53:12
 * @version $Id$
 */
function GrabImage($url, $filename = "") {
	if ($url == "")
		return false;
	if ($filename == "") {

		$ext = strrchr($url, ".");

		if ($ext != ".jpg" && $ext != ".gif" && $ext != ".png" && $ext != ".bmp" && $ext != ".swf")

			return false;
		date_default_timezone_set('UTC');
		$filename = date("dMYHis").$ext;
	}
	ob_start();
	readfile($url);
	$img = ob_get_contents();
	ob_end_clean();
	$fp = @fopen($filename, "a");
	fwrite($fp, $img);
	fclose($fp);
	return $filename;
}

if (isset($_POST['download']) && $_POST['download'] != NULL) {
	$img = GrabImage($_POST["url"]);
	if ($img)
		echo'<pre><img src="'.$img.'"/></pre>';
	else
		echo "download fail!";
}
?>