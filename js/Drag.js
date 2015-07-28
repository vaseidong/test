function Drag(id) {
	//var oWrap = document.getElementById('wrap');
	var _this = this;
	//console.log(this);
	this.disX = 0;
	this.disY = 0;
	//this.oImg = getByClass(oWrap, 'image')[index];
	this.oDiv = document.getElementById(id);
	this.oDiv.onmousedown = function(ev) {
		_this.fnDown(ev);
		//console.log(this);
	}
}

Drag.prototype.fnDown = function(ev) {
	var _this = this;
	var oEvent = ev || event;
	this.disX = oEvent.clientX - this.oDiv.offsetLeft;
	this.disY = oEvent.clientY - this.oDiv.offsetTop;
	document.onmousemove = function(ev) {
		_this.fnMove(ev);
	}
	document.onmouseup = function(ev) {
		_this.fnUp(ev);
	}
};

Drag.prototype.fnMove = function(ev) {
	var oEvent = ev || event;
	this.oDiv.style.left = oEvent.clientX - this.disX + 'px';
	this.oDiv.style.top = oEvent.clientY - this.disY + 'px';
}
Drag.prototype.fnUp = function() {
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