console.log("Sanket" + {"a" : 10});
/**
 * "Sanket" -> is already a primitive
 * {"a" : 10} -> is not a primitive, so, we call toPrimitive without a hint
 * so hint -> number
 * we first call valueOf() on {"a":10} -> returns same object
 * we call toString -> toString will return '[object Object]' which is a string i.e. prim
 * 
 * "Sanket" + "[object Object]" -> "Sanket[object Object]"
 */
console.log(10 - {"a": 45});
/**
 * 10 is already a number
 * {"a" : 45} is going to get converted ToNumber, and this is an object,
 * for object we call ToPrimitive with hint Number
 * first we call valueOf -> it returns the same object -> {"a" : 45}
 * so call toString -> return [object Object] which is primitive
 * so call ToNumber on '[object Object]' again which gives NaN
 * 10 - NaN = NaN 
 */

//OVERRIDDING THE IMPLEMENTATION OF valueOf
let x = {"b" : 90, valueOf() {return 2;}, toString() {return "custom";}}
console.log(x - 10);
/**
 * x is an object, we need to pass it to ToPrimitive with hint Number
 * we call value of -> returns 2; which is primitve
 * x = 2
 * 2 - 10 = -8
 */
console.log(x + "Ashutosh");
