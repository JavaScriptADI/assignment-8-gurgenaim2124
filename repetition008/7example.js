// 7 : 

function some(arr, cb) {
    for(let i = 0; i < arr.length; i++){
        let someName = cb(arr[i])
        if(someName){
            return true
        }
    } return false
}

function isEven(n) { 
    return n % 2 == 0;
 }

let arr = [1, 2, 3, 4];
let someEven = some(arr, isEven); // true

console.log(someEven)