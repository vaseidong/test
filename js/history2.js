/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-07-25 17:01:46
 * @version $Id$
 */

var oBtn = document.getElementById('input1');
var oDiv = document.getElementById('div1');
oBtn.onclick = function() {
	var number = randomNum(35, 7);
	oDiv.innerHTML = number;
	history.pushState(number, '');
}

window.onpopstate = function(ev) {
	var number = ev.state;
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