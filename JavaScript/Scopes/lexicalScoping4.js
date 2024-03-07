var teacher = "Ashutosh";
function fun(){
    console.log(subject);
    var teacher = "Pulkit";
    var subject = "Javascript";
    teachingAssistent = "vibhav";
    console.log(teacher);
    console.log(teachingAssistent);
}

fun();
console.log(teacher);
console.log(teachingAssistent)

/**
 *Phase 1: Parsing 
    => teacher(global) -> global
    => fun() -> global
    => teacher(4) -> scope of fun
    => subject -> scope of fun
    => avoids line 6 bcoz it is not formal declaration
    => avoid line no 7, 8 and jumps out of the function
    => avoid line 11, 12, 13
 *Phase 2: Execution
    => teacher(global) = "Ashutosh"
    => avoid line 2 bcoz fun is yet to be called
    => at line 11 fun() calls
    => print subject                //undefined
    => teacher(fun) = "Pulkit"
    => subject = "Javascript"
    => teachingAssistent = "vibhav" -> global scope (bcoz of concept of autoglobals)
    => prints teacher(fun)            //Pulkit
    => prints teachingAssistent     //vibhav
    => out of the fun()
    => prints teacher(global)            //Ashutosh
    => prints teachingAssistent     //vibhav
 */