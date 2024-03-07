function fetchCustom(url,fn){
    //download content of the url
    //this downloading can take sometime.
    //we will download th content from url, and then whatever is the result, we will pass in the callback
    console.log("Starting downloading");
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
        console.log("Ending the function");
    },3000);
}

//task1:
// 1. write a function to download data from url
// 2. write  a fucntion to save that download data in a file and return the filename
// 3. write a funtion to upload the file written in previous step to newurl


function writeFile(data , fn){
    console.log("Saving the download data");
    setTimeout(function process(){
        console.log("saved data");
        let filename = "output.txt";
        fn(filename);
    },4000);
}

function uploadFile(filename , newurl ,fn){
    console.log("uploading the file");
    setTimeout(function process(){
        console.log("file",filename,"uploaded to", newurl);
        let dataresponse = "SUCCESS";
        fn(dataresponse);
    }, 5000);
}
fetchCustom("www.google.com" , function downloadCallback(response){
    console.log("Downloaded reponses is",response);
    writeFile(response, function SavingData(filename){
        console.log("data saved in file:", filename);
        uploadFile(filename, "www.doc.google.com", function uploadReaponse(dataresponse){
            console.log("successfully uploaded",dataresponse);
        });
    });
});

