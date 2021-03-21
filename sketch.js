var dog,happyDog,database,foodS,foodStock,dogImg,happyDogImg;

function preload()
{
dogImg=loadImage("Images/dogImg.png");
happyDogImg=loadImage("Images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite();
  dog.addImage(dogImg);
  dog.scale=0.15;
 dogHappy=createSprite();
 dogHappy.addImage(happyDogImg);
 foodStock=database.ref('Food');
 foodStock.on("value",readStock)
 textSize(20);
}


function draw() {  
background(46,149,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key to Feed Dog Milk!", 130,10,300,20);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}


