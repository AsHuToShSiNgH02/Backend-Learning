var name = "Sanket" //global scope
function greet(){
    console.log("greeting !",name);
    var x = 10; //function scope
    function test(){
        console.log("test" ,x);
    }
    test();
    console.log(x);
}
function fun(){
    console.log("have fun! ", name);
}

greet();
fun();
