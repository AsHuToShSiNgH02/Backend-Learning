function fun() {
    console.log(x);//why we get undefined?-> lexical scopping
    var x = 10;
    console.log(x);
}
{
    var y = 10;
}
console.log(y);

if(true) {
    var z = 30;
}
if(false) {
    var a = 20;
}

console.log(z);
console.log(a);

fun();