function mapper(arr, fn){
    /**
     * arr -> arr of elements
     * fn -> callbacks functions which expects two arguments value and function
     */
    
    let result = [];
    for(let i = 0;i<arr.length;i++){
        //i is the index and a[i]->value
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr = [1,2,3,4,5];
let x = mapper(arr, function cuber(v, i){
    console.log(v, v*v*v, i);
    return v*v*v;
});

console.log(x, arr);