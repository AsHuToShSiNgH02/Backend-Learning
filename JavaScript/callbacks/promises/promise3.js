function demo2(val){
    return new Promise(function(resolve, reject){
        console.log("started");
        setTimeout(function process(){
            if(val%2 == 0){
                resolve("Even");
            }else{
                reject("Odd");
            }
        }, 10000);
        console.log("Ended");
    })
}