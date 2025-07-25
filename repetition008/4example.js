// 4 : Create a Higher order function find, which takes two arguments 

function find(arr, cb) {
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}


function isEven(n) { return n % 2 == 0; }

let arr = [1, 2, 3, 4];
let firstEven = find(arr, isEven); // 2
console.log(firstEven)
