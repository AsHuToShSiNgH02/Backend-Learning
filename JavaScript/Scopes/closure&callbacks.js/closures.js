function todo(task){
    setTimeout(function fun(){
        console.log("completed",task);
    },5000);
}

console.log("starting");
todo("assingment");
console.log("Ending");