var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("background.jpg")
  //load image for the treasure background
  bg2 = loadImage("bg3.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

if(score === 3) {
    clear()
    background(bg2)
    //fill("cyan")
   // textSize(40);
   // text("TREASURE UNLOCKED",250, 200);
   // text("YOU WIN THE GAME!",275, 250);
  }
if(score<3){
  fill('lime')
  textSize(15)
  text("*Note: If you answer all 3 questions correctly,", 610,450);
  text(" you will gain all 3 points, then you win the game!",650,475);
}
  drawSprites()
}