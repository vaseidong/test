window.onload = function() {
	var oWrap = document.getElementById('wrap');
	var aImg = getByClass(oWrap, 'image');
	for (var i = 0; i < aImg.length; i++) {
		aImg[i].onmousedown = (function(i) {
			return function(e,i) {
				var oEvent=e||event;
				var x=oEvent.clientX;
				var y=oEvent.clientY;
				aImg[i].onmousemove=function(e){
					var oEvent=e||event;
					document.title=oEvent.clientX+"and"+oEvent.clientY;
				}
			}
		})(i)
	};
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