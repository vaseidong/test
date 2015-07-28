window.onload = function() {
	// for (var i = 0; i < 9; i++) {
	// 	new dragImg('image', i);
	// };
	new dragImg('img1');
}

function dragImg(id) {
	//var oWrap = document.getElementById('wrap');
	var _this = this;
	this.disX = 0;
	this.disY = 0;
	//this.oImg = getByClass(oWrap, 'image')[index];
	this.oImg = document.getElementById(id);
	alert(this.oImg);
	this.oImg.onmousedown = function() {
		_this.fnDown();
	}
}

dragImg.prototype.fnDown = function(e) {
	var _this = this;
	var oEvent = e || event;
	this.disX = oEvent.clientX - this.oImg.offsetLeft;
	this.disY = oEvent.clientY - this.oImg.offsetTop;
	//alert(this.disX);
	document.onmousemove = function() {
		_this.fnMove();
	}
	document.onmouseup = function() {
		_this.fnUp();
	}
};

dragImg.prototype.fnMove = function(e) {
	var oEvent = e || event;
	this.oImg.style.left = oEvent.clientX - this.disX + 'px';
	this.oImg.style.top = oEvent.clientY - this.disY + 'px';
}
dragImg.prototype.fnUp = function() {
	document.onmousemove = null;
	document.onmouseup = null;
}

function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName('*');
	var aRes = [];
	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			aRes.push(aEle[i]);
		};
	};
	return aRes;
}