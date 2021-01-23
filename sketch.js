var canvas;
var music;
var redBox, blueBox, greenBox, yellowBox, movingBox;
var edge1, edge2, edge3,edge4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edge1 = createSprite(850,300,100,600);
    edge2 = createSprite(1,300,2,600);
    edge3 = createSprite(400,1,800,2);
    edge3 = createSprite(400,799,800,2);


    //create 4 different surfaces
    redBox=createSprite(100,580,200,20);
    blueBox=createSprite(300,580,200,20);
    greenBox=createSprite(500,580,200,20);
    yellowBox=createSprite(700,580,200,20);
    movingBox = createSprite(100,555,50,50);
    redBox.shapeColor="red"
    blueBox.shapeColor="blue"
    greenBox.shapeColor="green"
    yellowBox.shapeColor="yellow"
    movingBox.velocityX=5;
    movingBox.velocityY=5;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
  bounceOff(edge1,movingBox);
    bounceOff(edge2,movingBox);
    bounceOff(edge3,movingBox);
    bounceOff(edge4,movingBox);



    if(objectTouching(movingBox,redBox)){
        movingBox.shapeColor="red"
    }
    if(objectTouching(movingBox,blueBox)){
        movingBox.shapeColor="blue"
    }
    if(objectTouching(movingBox,greenBox)){
        movingBox.shapeColor="green"
    }
    if(objectTouching(movingBox,yellowBox)){
        movingBox.shapeColor="yellow"
    }

    drawSprites()

}




    //add condition to check if box touching surface and make it box
