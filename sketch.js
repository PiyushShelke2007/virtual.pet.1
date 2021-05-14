//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	dogIMG = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,20,20);
  dog.addImage(dogIMG);
  dog.scale=0.2;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background (46, 139, 87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
}

function readStock(){
 foodS= data.val();
 console.log(foodS)
}
function writeStock(x){
  if(x<=0){
  x=0;
  }else{
  x=x+1;
  }
  
  database=ref('/').update({
    Food:x
  });
}




