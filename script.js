

function hover()
{
	
	
	var images = document.getElementsByClassName("pic");
	
	var img = images[0];
	
	img.className = "picOver";
	
	
	var title = document.getElementsByClassName("title01");
	
	var t01 = title[0];
	
	t01.innerHTML = "Click To Hear KittenMan";
}

function off()
{
	var title = document.getElementsByClassName("title01");
	
	var t01 = title[0];
	
	var images = document.getElementsByClassName("picOver");
	
	var img = images[0];
	
	t01.innerHTML = "Hover to see picture";
	
	img.className="pic";
}

function playAudio ()
{
	var am = document.getElementById ("iAM");
	
	am.play();
	
	
	
	
}

var vid01 = document.getElementById ("vid01"); 
var vid02 = document.getElementById ("vid02");

function plyVID01() 
{
	var vid01 = document.getElementById ("vid01");
	vid01.play();
	vid01.className = "vdON";
	
}

function plyVID02()
{
	var vid02 = document.getElementById ("vid02");
	vid02.play();
	vid02.className = "vdON";
}

function stopVD()
{
	var vid1 = document.getElementById ("vid01");
	var vid2 = document.getElementById ("vid02");
	vid1.pause();
	vid1.className = "vdOFF";
	vid2.pause();
	vid2.className = "vdOFF";
}

/** failed attampt to move eyes with mouse 

var element = document.getElementById("lEYE");
document.addEventListener("mousemove", function lookL(event){
	var x = event.pageX;
	var y = event.pageY;
	var offsets = eye.lens.getBoundingClientRect();
	var left = (offets.left - x)
	var top = (offets.top - y)
	var rad = Math.atan2(top, left);
	element.style.webkitTransform = "rotate(" + rad + "rad);
}

**/
