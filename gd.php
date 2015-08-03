<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-03 09:32:17
 * @version $Id$
 */
header("Content-type: image/png");
$string = $_GET['text'];
//$im     = imagecreatefrompng("D:/wamp/server/Apache24/htdocs/test/images/banner/1.png");
$im     = imagecreatetruecolor(60, 20);

$orange = imagecolorallocate($im, 210, 195, 63);
$px     = (imagesx($im) - 8.5 * strlen($string)) / 2;
//$font   = imageloadfont("arial.ttf");
//imagefilledrectangle($im, 0, 0, 49, 19, $white);
imagestring($im, 5, $px, 0, 'gfhs', $orange);
imagepng($im);
imagedestroy($im);
?>