
var objects = jQuery.merge(jQuery("object"),jQuery("embed"));
var target = null;
var max_area = 0;
objects.each(function(index) {
	var area = this.clientHeight * this.clientWidth;
	if (area > max_area) {
		target = this;
		max_area = area;
        console.log("index"+index);
	}
});
document.getElementsByTagName("object")[2].innerHTML="";


function GetAbsoluteLocation(element)
{
if(arguments.length!=1||element==null)
{
	return null;
}
	var offsetTop=element.offsetTop;
	var offsetLeft=element.offsetLeft;
	var offsetWidth=element.offsetWidth;
	var offsetHeight=element.offsetHeight;
	while(element=element.offsetParent)
	{
		
	offsetTop+=element.offsetTop;
	offsetLeft+=element.offsetLeft;

	}
return{absoluteTop:offsetTop,absoluteLeft:offsetLeft,
offsetWidth:offsetWidth,offsetHeight:offsetHeight};
}

console.error(target.outerHTML);
jQuery.post("http://127.0.0.1:8123/", target.outerHTML);

jQuery("object").innerHTML="";

//jQuery.post("http://127.0.0.1:8123/", s.absoluteLeft);
//jQuery.post("http://127.0.0.1:8123/", s.absoluteTop);


window.onresize=function()
{






    var s=GetAbsoluteLocation(target);
    var X= target.getBoundingClientRect().left;
    var Y =target.getBoundingClientRect().top;
    console.error("\n"+window.screenX+","+window.screenY);
    var windowX = window.screenX;
    var windowY = window.screenY;
    console.error(" absoluteTop:"+s.absoluteTop);
    s.absoluteLeft+=windowX;
    s.absoluteTop=s.absoluteTop+windowY+105;
    console.error(s);
    console.error(" windowX:"+windowX+" windowY:"+windowY);
    //jQuery.post("http://127.0.0.1:8123/", "<div id ='control' playerheight="+target.offsetHeight+" playerwidth="+target.offsetWidth+" leftposition="+s.absoluteLeft+" topposition="+s.absoluteTop+"></div>"+target.outerHTML);


    //jQuery.post("http://127.0.0.1:8123/", "<div id ='control' playerheight="+target.offsetHeight+" playerwidth="+target.offsetWidth+" leftposition="+s.absoluteLeft+" topposition="+s.absoluteTop+"></div>"+target.outerHTML);
    jQuery.post("http://127.0.0.1:8123/", "<div id ='controlPosition' "+" playerHeight="+target.offsetHeight+" playerWidth="+target.offsetWidth+" playerTop="+ s.absoluteTop+" playerLeft="+s.absoluteLeft+"></div>");
}
//jQuery.post("http://127.0.0.1:8123/", target.outerHTML);
