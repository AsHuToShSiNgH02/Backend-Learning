var teacher = "Ashutosh";
function fun(){
    var teacher = "Pulkit";
    console.log(teacher);
}

fun();
console.log(teacher); //Ashutosh

/**
 * Phase 1 : Parsing
    => teacher(global) -> global scope
    => fun() - global scope
    => inside fun() 
    => teacher(fun) -> scope of fun
    => avoid line 4 as it is not formal declaration
    => out of the function
    => avoid line 7 and 8 as it is not formal declaration
 * Phase 2 : Execution
    => teacher(global) = "Ashutosh"
    => avoid line 2 as function is yet to be called
    => on line 7 fun() calls
    => teacher(fun) = "Pulkit";
    => prints teacher(fun)      //Pulkit
    => out of the fun()
    => prints teacher(global)      //Ashutosh
 */