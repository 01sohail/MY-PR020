var canvas,bg;
//var together;
var tom, tom1,tom2,tom3;
var jerry, jerry1,jerry2,jerry3;

function preload() {
    bg = loadImage("garden.png");
    tom1= loadAnimation("cat1.png");
    tom2=loadAnimation("cat2.png","cat3.png");
    tom3= loadAnimation("cat4.png");
    jerry1=loadAnimation("mouse1.png");
    jerry2= loadAnimation("mouse2.png","mouse3.png");
    jerry3=loadAnimation("mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tom1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerry1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tom3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerry3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tom2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerry2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}