function fun(){
    teachingAssistent = "JD";
    console.log(teachingAssistent);
    var teachingAssistent = "vibhav";
}
fun();
/**
 Phase 1 : Parsing Phase
    => on line no 4 teachingAssistent(fun)
 Phase 2 : Execution Phase
    => teachingAssistent = "JD"
    => PRINTS teachingAssistent    //JD
    => teachingAssistent = "vibhav"
 */