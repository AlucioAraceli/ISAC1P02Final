var cloock=setInterval(function(){blazblueClock()},1000);

function blazblueClock(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("clock").innerHTML=t;
}
var cycleImage = new Array()
var x = 0;
cycleImage[0] = "Bullet1.jpg";
cycleImage[1] = "Makoto1.png";
cycleImage[2] = "Tao1.jpg";
cycleImage[3] = "Bullet2.jpg";
cycleImage[4] = "Makoto2.png";
cycleImage[5] = "Tao2.jpg";
setInterval(function(){imgCycle()}, 5000);


function imgCycle(){
 document.getElementById("img").src=cycleImage[x]
 x++;
 if(x >= cycleImage.length){
        x = 0;
    }
}