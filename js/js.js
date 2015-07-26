// JavaScript Document
window.onload=function(){
	var oText1=document.getElementById("text1");	
	var oText2=document.getElementById("text2");	
	vsd.app.changeValue(oText1,"Search Website");
	vsd.app.changeValue(oText2,"Search Website");
	
	vsd.app.toShow();
	vsd.app.toMenu();
}

var vsd={};

vsd.tools={};
vsd.tools.getByClass=function(oParent, sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var re=new RegExp('\\b'+sClass+'\\b', 'i');
	var i=0;
 
	for(i=0;i<aEle.length;i++)
	{
		//if(aEle[i].className==sClass)
		//if(aEle[i].className.search(sClass)!=-1)
		if(re.test(aEle[i].className))
		{
			aResult.push(aEle[i]);
		}
	 }
 	return aResult;
}

vsd.ui={};

vsd.app={};

vsd.app.changeValue=function(obj,str){
	
	obj.onfocus=function()
	{
		if(obj.value==str)
		obj.value="";
	}
	obj.onblur=function()
	{
		if(obj.value=="")
		obj.value=str;
	}	
}


vsd.app.toShow=function(){
	var oBanner=document.getElementById("bannershow");
	var aLi=oBanner.getElementsByTagName("li");
	var iNow=0;
	var timer=null;

	oBanner.onmouseout=function(){
		timer=setInterval(function(){
			if(iNow==(aLi.length-1)){
				iNow=0;
			}
			else{
				iNow++;
			}
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";		
			}
			aLi[iNow].className="active";
		},2000)	
	}
	oBanner.onmouseover=function(){
		clearInterval(timer);	
	}
}	

vsd.app.toMenu=function(){
	var oDiv=document.getElementById("wrap");
	var oSort=vsd.tools.getByClass(oDiv,"sort")[0];
	var aUl=oSort.getElementsByTagName("ul");
	var aA=oSort.getElementsByTagName("a");
	var oH=oSort.getElementsByTagName("h1");
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;
		aA[i].onclick=function(e){
			var This=this;
			var oEvent=e||event;
			var aLi=aUl[this.index].getElementsByTagName("li");
			for(var i=0;i<aUl.length;i++){
				aUl[i].style.display="none";	
			}
			aUl[this.index].style.display="block";	
			
			for(var i=0;i<aLi.length;i++){
				aLi[i].onclick=function(){
					oH[This.index].innerHTML=this.innerHTML;
				}
				aLi[i].onmouseover=function(){
					for(var i=0;i<aLi.length;i++){
						aLi[i].style.background="";
					}
					this.style.background="blue";	
				}
			}
			
			document.onclick=function(){
				aUl[This.index].style.display="none";	
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.background="";
				}
			}
			oEvent.cancelBubble=true;
		}
	}
}







