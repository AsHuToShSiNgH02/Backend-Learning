var teacher = "Ashutosh";
function fun(){
    var teacher = "Pulkit";
    teachingAssistent = "vibhav";
    console.log(teacher);
    console.log(teachingAssistent);
}

console.log(teachingAssistent); //gives reference error
fun();
console.log(teacher);
