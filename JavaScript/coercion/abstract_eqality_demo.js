console.log(2 == 2);
/**
 * Type(2) is same as Type(2)
 * call strict eqality comparision 2 === 2
 * Type(2) is number
 * 2 is same number as 2 -> return true
 */
console.log("ashu"=="ashu");
/**
 * Type(ashu) is same as Type(ashu)
 * call strict eqality comparision "ashu" === "ashu"
 * Type(ashu) is not number , hence call SameValueNonNumber(ashu,ashu)
 * Type(ashu) is string ,
 * x and y are exactly the same sequence of code units -> returns true
 */
console.log(null == undefined); //->true
console.log(undefined == null); //->true
console.log(123 == "123");
/**
 * 123 == ToNumber("123");
 * 123 == 123 -> true
 */
console.log("123" == 123);
/**
 * ToNumber("123") == 123
 * 123 == 123 -> true
 */
console.log("0xaf" == 175);
/**
 * ToNumber("0xaf") == 175
 * 175 == 175 ('af' is hexadecimal form of 175) -> true
 */
console.log(true == 1)
/**
 * ToNumber(true) == 1 -> 1 == 1 -> true
 */
console.log(false == 2)
/**
 * ToNumber(false) == 2 -> 0 == 2 -> false
 */
console.log(2 == {"a" : 2});
/**
 * 2 == ToPrimitive({"a" : 2})
 * hint is number
 * valueOf() -> returns{"a" : 2}(not Primitive)
 * toString() -> returns [object Object] -> returns false
 */
console.log('[object Object]' == {"a" : 2});
/**
 * ToPimitive({"a" : 2}) -> hint number
 * call OrdinaryToPrimitive({"a" : 2},Number)
 * valueOf()->{"a" : 2}
 * toString()->'[object Object]'(primitive) -> true
 */

console.log(2 == {"a": 2, valueOf() {return {};}, toString() {return "2";}});
/**
 * 2 is number but {"a": 2, valueOf() {return {};}, toString() {return "2";}} is object
 * 2 == ToPrimitive({"a": 2, valueOf() {return {};}, toString() {return "2";}})
 * hint is number
 * call OrdinaryToPrimitive({"a": 2, valueOf() {return {};}, toString() {return "2";}} , hint)
 * as hint is number -> valueOf() -> returns {}(not Primitve)
 * toString()-> return "2"
 * 2 == "2" 
 * 2 == ToNumber("2")
 * 2 == 2 -> true
 */