console.log(NaN === 23);//false
console.log(NaN === NaN);//fasle
console.log(22 === 22);//true
console.log(24 === 23);//false
console.log(0 === -0);//true
console.log(-0 === 0);//true
console.log(undefined === undefined);//true
console.log(null === null);//true
console.log("Ashutosh" === "Ashutosh");//true
// console.log({} === {}); //this condition will always return false because javascript compares object by referece not by value//false
let x = {};
console.log(x === x);//true
console.log(Symbol('Ashutosh') === Symbol('Ashutosh'));//false
let y = Symbol("Ashutosh");
console.log(y === y);//true