function todo(task){
    console.log("starting of todo");
    setTimeout(function fun(){
        console.log("completed",task);
    },5000);
    task = "Lab file";
    console.log("end of todo");
}

console.log("starting");
todo("assingment");
console.log("Ending");
//during execution of fun() task will be printed , whatever will be the updated value of task 
// afer Timeout will be printed because functions remembers variable not its value
