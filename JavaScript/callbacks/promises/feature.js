function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("started downloaded from", url);
        setTimeout(function processDownloading(){
            let data = "Dummy data";
            console.log("download completed");
            resolve(data);
            console.log("hello");
            // resolve(234);    this code will not work becoz we can only resolve only once
            // resolve("ffwrf");
        }, 5000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Strated writin", data, "in a file");
        setTimeout(function processWriting(){
            let filename = "result.txt";
            console.log("file written successfully");
            resolve(filename);
        }, 3000);
    })
}

function uploadData(data ,url) {
    return new Promise(function (resolve, reject) {
        console.log("upload started on url" , url, "filename is", data);
        setTimeout(function processUpload(){
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    });
}

// let data = fetchData("www.google.com");
// let filename = writeFile(data);
// let reponse = uploadData(filename, "www.drive.google.com");
// the above code will not work

//created the call back hell again

// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise.then(function processDownloading(value) {
//     console.log("Download promise fullfilled");
//     let writePromise = writeFile(value);
//     writePromise.then(function processWriting(value) {
//         console.log("Writing promise fullfilled");
//         console.log(value);
//     })
// })

let downloadPromise = fetchData("www.datadrive.com");
let x = downloadPromise
.then(function processDownloading(value) {
    console.log("Download promise fullfilled");
    return value
})
.then(function processWriting(value){
    return writeFile(value);
})
.then(function processUpload(value){
    return uploadData(value, "www.drive.google.com");
});


