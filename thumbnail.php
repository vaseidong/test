<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-30 13:48:06
 * @version $Id$
 */
$browser = new COM("InternetExplorer.Application");
$handle = $browser->HWND;
$browser->Visible = true;
$browser->FullScreen = true;
$browser->Navigate("http://www.okbase.net");
 
/* 仍旧在运行? */
while ($browser->Busy) {
    com_message_pump(4000);
}
 
/* 抓屏 */
$im = imagegrabwindow($handle, 0);
$browser->Quit();
 
/* 保存为png */
imagepng($im, "okbase.png");
?>