function process() {
    console.log("start");
    setTimeout(function exec() {           //Unknown feature to JS so passes it to runtime
        console.log("Executed some task")
    },3000);                              //passes it to event queue after 3 sec from runtime and waits for condition to get sastisfy
    for(let i = 0;i<10000000000;i++){     
        //some task
    }
    console.log("End");
}

process();
console.log("TATA");//global code
//once call stack is empty and global code is done, event queue passes fucntion to call stack for execution
/**
 * OUTPUT
 * start                //prints
 * set time out pased to runtime
 * waits for say 8 sec due to long for loop
 * End                  // prints
 * comes outside
 * execute global code
 * TATA                 // Prints
 * Now execute the function waiting in event queue
 * Executed some task   //prints
 *  */ 