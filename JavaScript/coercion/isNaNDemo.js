let a = "10";
let b = "abc";
let c  = "Ashutosh";
let d = 10 - c;
console.log(a, b, c, d);

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

//handels the diadvantage of isNaN function
console.log((typeof(c) == 'number' && isNaN(c))? "Nan value" : "Not NaN value");
