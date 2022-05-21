var button1
var button2
var button3
var button4
var button5
var button6
var alphabutton
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

 button1=createButton("1 sec")
 button1.size(100,50)
 button1.position(225,50)
 
 button2=createButton("5 sec")
 button2.size(100,50)
 button2.position(425,50)

 button3=createButton("10 sec")
 button3.size(100,50)
 button3.position(625,50)

 button4=createButton("15 sec")
 button4.size(100,50)
 button4.position(825,50)

 button5=createButton("30 sec")
 button5.size(100,50)
 button5.position(1025,50)

 button6=createButton("1 min")
 button6.size(100,50)
 button6.position(1225,50)

 alphabutton=createButton("Click Here !")
 alphabutton.size(600,500)
 alphabutton.position(505,200)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(width)
  drawSprites();
 
}



