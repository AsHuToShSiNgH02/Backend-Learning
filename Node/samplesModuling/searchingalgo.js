export function linearSearch(arr, x){ //named export 
    for(let i = 0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }
    }
    return NaN;
}

function binarySearch(arr, x){
    //some impl
}
// module.exports = {
//     linear: linearSearch,
//     binary: binarySearch
// }

export default function fun(){   //default export
    console.log("fun");
}
export {
    binarySearch
}