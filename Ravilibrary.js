function objectTouching(object1, object2){
  if(abs(object1.x-object2.x)<=object1.width/2+object2.width/2&&  abs(object2.y-object1.y)<=object1.height/2+object2.height/2)
    {

    //always return a value in a function while using if statment.
      return true;
  }else{

    return false;
  } 
  
}
function bounceOff(object1, object2){
  if(abs(object1.x-object2.x)<=object1.width/2+object2.width/2){
    object1.velocityX=object1.velocityX *(-1)
    object2.velocityX=object1.velocityX *(-1)

  }
  if(abs(object2.y-object1.y)<=object1.height/2+object2.height/2){
    object1.velocityY=object1.velocityY *(-1)
    object2.velocityY=object1.velocityY *(-1)

  }


}
