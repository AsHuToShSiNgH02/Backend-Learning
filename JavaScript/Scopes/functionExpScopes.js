console.log(x);
var x = function gun() {  //x opens its own scope here
    console.log("gun");
}

// gun(); //throws error bcoz gun is not global scoped it is in scope of x
// console.log(x);

function fun(){        //like here fun opens its own scope
    function gun(){

    }
}