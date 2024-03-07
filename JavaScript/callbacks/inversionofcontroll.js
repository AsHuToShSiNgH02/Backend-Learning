function fun(inputString, fn){

    let output = inputString.split(',');
    for(let i = 0;i<output.length;i++){
        fn(output[i]);
    }
}

fun("name:sanket, subject:cse", function process(ip){
    let arr = ip.split(":");
    console.log("{", arr[0], " => ", arr[1], "}");
});