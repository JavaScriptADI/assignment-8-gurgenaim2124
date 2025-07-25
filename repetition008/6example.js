// 6 : Create a Higher order function every, which takes two arguments 

function every(arr, cb) {
for(let i = 0; i < arr.length; i++){
    if(!cb(arr[i])){
        return false
    }
} return true
}

function isEven(n) { 
    return n % 2 == 0; 
}

let arr = [1, 2, 3, 4];
let allEven = every(arr, isEven); // false
console.log(allEven)