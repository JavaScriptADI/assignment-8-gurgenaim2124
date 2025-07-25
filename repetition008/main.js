// 1 : Create a Higher order function map, which takes two arguments 

function map(acc, cb) {
    let result = []
    for(let i = 0; i < acc.length; i++){
       result.push(cb(acc[i]))        
    }return result
}

function square(n){
    return n * n
}
let acc = [1, 2, 3, 4];
let arrSquares = map(acc, square); // [1, 4, 9, 16]

console.log(arrSquares)


// 2 : Create a Higher order function filter, which takes two argument 

function filter(arr, cb){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    } return result
}

function isEven(n) {
    return n % 2 === 0
}

let arr = [1, 2, 3, 4]
let arrEven = filter(arr, isEven)

console.log(arrEven)

// 3 : Create a Higher order function reduce, which takes three arguments 

function reduce(agg, cb, init) {
    init = 0 
    for (let i = 0; i < agg.length; i++){
        init = cb(init, agg[i]);
    } return init
}

function sum(x, y) {
    return x + y 
}

let agg = [1, 2, 3, 4];
let summ = reduce(agg, sum, 0); // 10\

console.log(summ)

// 4 : Create a Higher order function find, which takes two arguments

function firstElement () {
    
}
function isEven(n) { return n % 2 == 0; }

let aff = [1, 2, 3, 4];
let firstEvenIndex = findIndex(all, isEven); // 1