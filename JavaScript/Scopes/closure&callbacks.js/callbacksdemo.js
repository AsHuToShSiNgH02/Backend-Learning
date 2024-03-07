function fun(x, fn){ //consuming the callback
    /**
     * x -> number
     * fn -> callback function
     */

    //some logic
    for(let i = 0; i<x;i++){
        console.log(i);
    }
    fn(); //calling the callback funtion passed
    //some more logic
}

fun(10, function log(){ //callback functionn
    console.log("Custom logger");
});