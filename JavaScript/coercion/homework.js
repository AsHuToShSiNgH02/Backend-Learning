let val = 0;
checkDirection(val);

function checkDirection(val){
    //val will be always a number, and val wont be NaN
    //tell us wheather val is a negative value or a positive value
    //if val is negative return 'left' otherwise if val is positive return 'right'
    if(val < 0){
        console.log("left");
    }else{
        console.log("right");
    }
}