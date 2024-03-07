//arithmatic operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

//NOTE: if we want to have floor divisions 
// 1 way -> parseint(5/2)
// 2 way -> Math.floor(5/2)


// assingment operators
let x = 10; //assinging the value 10 to variable x
x += 2; //x = x + 2
x -= 2; //x = x - 2
x *= 2; //x = x * 2
x /= 2; //x = x / 2
x %= 2; //x = x % 2

//logical operators
console.log((10 > 5) && (7 < 6)); //false
console.log((10 > 5) || (7 < 6)); //true
console.log(4 && 0); //0
console.log(4 || 0); //4
console.log(0 && 4); //0
console.log(0 || 4); //4

//bitwise operator
console.log(5 & 3);
console.log(8 | 1);
console.log(3 ^ 3);
console.log(5 << 2);
console.log(5 >> 1);

//string concatenation
console.log("ashu" + "tosh");

//ternary operator
(5>2)?(console.log("true")):(console.log("false"));

//a**b = a^b