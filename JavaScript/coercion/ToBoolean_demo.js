console.log(!0);
/**
 * 0 -> falsy
 * ToBoolean on this 0 ->false
 * !0 -> true
 */
console.log(!(-4));
/**
 * 4 -> truthy
 * ToBoolean on this -4 -> true
 * !0 -> false
 */
console.log(!{});
/**
 * {} -> truthy
 * ToBoolean on {} -> true
 * !{} -> false
 */
console.log(!console.log(0));
/**
 * console.log prints 0 but returns 'undefined' => console.log(!undefined);
 * undefined -> falsy
 * ToBoolean on undefined -> false
 * !undefined -> true
 */
