console.log(1 + 1); 
console.log(1 + "1"); //with + operator if either of them is string then both of them will converted into string
console.log(1 - "1"); //with - operator if either of them is string then it gets converted into number
console.log("1" - "1");

console.log(undefined + 1); //undefined returns NaN
console.log(null + 1); //returns +1
console.log("wtd" - 12); //returns NaN because this string cannot be converted into number