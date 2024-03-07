// function fetchData(url){
//     return new Promise(function (resolve, reject){
//         //any logic
//         for(let i =  0 ;i<10000000000;i++){
//             //some task
//         }
//         console.log("completed");
//         resolve("ashutosh");
//     });
// }

function fetch1(url){
    return new Promise(function(resolve, reject){
        console.log("starting fetching from",url);
        setTimeout(function process(){
            let data = "Dummy data";
            console.log("completed fetching the data");

            resolve(data);
        }, 4000)
    });
}

fetch1();