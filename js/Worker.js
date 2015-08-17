/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-17 19:49:41
 * @version $Id$
 */
 function randomArr(iAll, iNow) {
 	var allArr = [];
 	var newArr = [];
 	for (var i = 0; i < iAll; i++) {
 		allArr.push(i);
 	}
 	for (var i = 0; i < iNow; i++) {
 		newArr.push(allArr.splice(Math.floor(Math.random() * allArr.length), 1));
 	}
 	return newArr;
 }
 self.onmessage = function(e) {
 	var arr = randomArr(e.data, e.data / 10);
 	//data数组存放像素集合数据，每四个为一组，存放rgba值
 	self.postMessage(arr);
 }
 