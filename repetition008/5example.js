// 5 : Create a Higher order function find, which takes two arguments

function findIndex (arr, cb) {
    for (let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return i
        }
    } return -1

}
function isEven(n) {
     return n % 2 == 0; 
}

let arr = [1, 2, 3, 4];
let firstEvenIndex = findIndex(arr, isEven); // 1

console.log(firstEvenIndex)

