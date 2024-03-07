function fun(){
    console.log("fun called");
}
function gun(fn){
    console.log("inside gun");
    fn();
    console.log("leaving gun");
    // console.trace();
}

gun(function (){
    console.trace();
    console.log("new function passed");  //fucntion as an argument
});

// gun(fun);