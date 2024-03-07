function process(){
    console.log("start");                 //1
    for(var i = 1;i<3;i++){
        setTimeout(function exec(){
            console.log("executed after some time");   // 6 7
        },3000);
        console.log("inside for loop");   // 2  3
    }
    for(var j = 0;j<10000000000;j++){
        //some task 
    } 
    console.log("end");                   // 4                   
}

process();
console.log("global code");               // 5