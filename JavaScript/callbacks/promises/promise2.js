function demo1(){
    return new Promise(function(resolve, reject){
        console.log("hi");
        setTimeout(function process(){
            console.log("wohoo task is done");
            resolve("stduent are best");
        },10000);
        console.log("bye");
    })
}