var teacher = "Ashutosh";
function fun() {
    var teacher = "Pulkit";
    console.log(teacher, teachingAssistent); //teaching assistent is undeclared
    teachingAssistent = "vibhav"; //alligible for becoming autoglobals
}

function gun() {
    console.log(subject); //subject is undefined
    var subject = "JS";
    console.log(teacher);
}
console.log(teacher);
fun();
gun();