let id1 = setTimeout(function execute1(){
    console.log("task completed 1");
},10000);

let id2 = setTimeout(function execute2(){
    console.log("task completed 2");
    clearTimeout(id1); //stops the execution of id1
},5000)

//setTimeout returns a specific id
// console.log(id1);