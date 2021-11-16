var diam1 = 5;
var diam2 = 5;

function setup() {
  // put setup code here
   createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background("#011627");
  fill("#41EAD4");
  noStroke();
  //this ellipse will grow
  ellipse(250,100,diam1,diam1);
  fill("#F71735");
  noStroke();
  ellipse(250,400,diam2,diam2);
  fill("#FF9F1C");
  noStroke();
  rect(3,250,500,20);
  textSize(20);
  textStyle(BOLD);
  text("Click to grow circle, touch the line before blue",width-460,20);
  diam1 = diam1+0.5;
}
function mousePressed(){
 if (diam2>=300){
   diam2=0;
 }else{
   diam2 = diam2+5;
 }
}
