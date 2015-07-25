/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-25 14:51:00
 * @version $Id$
 */
var oBtn = document.getElementById('input1');
var oDiv = document.getElementById('div1');
oBtn.onclick = function() {
	oDiv.innerHTML = randomNum(35, 7);
	window.location.hash = oDiv.innerHTML;
}

window.onhashchange = function() {
	var number = window.location.hash.substring(1);
	oDiv.innerHTML = number;
}

function randomNum(alls, res) {
	var arr = [];
	var newArr = [];
	for (var i = 1; i <= alls; i++) {
		arr.push(i);
	}
	for (var i = 1; i <= res; i++) {
		newArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1));
	}
	return newArr;
}