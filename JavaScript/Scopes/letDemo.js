function fun(){
    console.log(x)//cant be accessed , bcoz let cant access the part of code which is writen before its declaration
    let x = 10;
    console.log(x);
}

fun();
console.log(X);