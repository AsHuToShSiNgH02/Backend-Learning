var teacher = "Ashutosh";
function fun(){
    var teacher = "Pulkit";
    teachingAssistent = "vibhav";
    console.log(teacher);
    console.log(teachingAssistent);
}

fun();
console.log(teacher);
console.log(teachingAssistent); //autoglobals

/**
 *Phase 1 : Parsing(reads only formal declaration(let,var,const,fuction))
    => teacher(global) -> global scope
    => fun() -> global scope
    => teacher(fun) -> scope of fun
    => avoid line 4 bcoz it is not global declaration
    => avoid line 5,6 bcoz no formal declaration and comes out of the function
    => avoid line 9,10 and 11 bcoz no formal declaration
 *Phase 2 : Execution
    => teacher(global) = "Ashutosh"
    => ecounters unknown funtion and directly jumps to line 9
    => call fun()
    => teacher(fun) = "Pulkit"
    => teachingAssistent = "vibhav" -> global scope(autoglobals)
    => prints teacher(fun)                                     // Pulkit
    => prints teachingAssistent                              // vibhav
    => out of the functions and directly jumps to line no 10
    => prints teacher(global)                                     //Ashutosh
    => prints teachingAssistent                              //vibhav
 */