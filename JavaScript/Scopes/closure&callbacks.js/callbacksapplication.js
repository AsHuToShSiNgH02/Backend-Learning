let arr = [1,2,3,4,5];
var x = arr.map(function process(v, i) { //it sends each element of array to callbacks as an argument
    /**
     * v -> value at index
     * i -> index of i
     */
    console.log(v, i);
    return v*v;
});
console.log(x);
console.log(arr); 
