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

// async function process(){
//     let downlodedData =await fetchData("www.google.com");
//     console.log("Downloading await completed");
//     let file = await writeFile(downlodedData);
//     console.log("writing await completed");
//     let uploadResponse = await uploadData(file, "www.drive.google.com");
//     console.log("uploading await completed");
//     console.log("completed process with response: ", uploadResponse);

//     return true;
// }

let downlodedPromise = fetchData("www.google.com");
let writePromise = writeFile("dummy file");
let uploadPromise = uploadData("tst.text","drive.google.com");
console.log("start");
Promise.all([downlodedPromise, writePromise, uploadPromise]).then(function process(value) {
    console.log(value);
})

// process();