// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
   
    return  Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks){

    return  Math.abs(blocks - 42)*264
}

function distanceTravelledInFeet(block1,block2){
    return Math.abs(block1-block2)*264
}

function calculatesFarePrice(start,destination){
    let price, distance;
    distance = Math.abs(start-destination)*264;

if (distance < 400){
    return price = 0;
    } else if (distance >400 && distance < 2000){
    return price = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
    return price = 25;
    }
    else{
      return  price ='cannot travel that far'  
    }

}

