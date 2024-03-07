function a(name){
    return function b(){
        console.log(name);
    }
}

let x = a("ashutosh");
for(let i = 0;i<10000000000;i++){ //during this time a will be executed still name prints(due to closure)
    //something
}
console.log(x); //returns array stores funtion b
x();//runs the funciton b still name is printed with "ashutosh" bcoz variable was remembered by funcion b();
