function fun(){
    console.log("fun called");                    
    setTimeout(function exec(){
        console.log("Inside the 5s timeout")      
    },7000);
    setTimeout(function process(){
        console.log("Inside the 3s timeout");     
    },3000);

}
fun();
for( let i = 0; i< 10000000000; i++){
    //some case
}
setTimeout(function last(){                       
    console.log("Last timeout of 7s");
},0);