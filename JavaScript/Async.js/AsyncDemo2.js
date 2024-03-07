function fun(){
    console.log("fun called");                    //1
    setTimeout(function exec(){
        console.log("Inside the 5s timeout")      // 3
    },5000);
    setTimeout(function process(){
        console.log("Inside the 3s timeout");     // 2
    },3000);

}
fun();
setTimeout(function last(){                       //4
    console.log("Last timeout of 7s");
},7000);