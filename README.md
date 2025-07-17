[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-4dB53Uv)
# Assignment Functions JS

1. Create a Higher order function map, which takes two arguments
    1. An array: arr
    2. A callback function: cb
    3. The map function creates a new array with the results of calling a provided function on every element in the calling array.
    4. Example:
        1. function square(n) {
            return n * n;
        }
        2. var arr = [1, 2, 3, 4];
        3. var arrSquares = map(arr, square); // [1, 4, 9, 16]
2. Create a Higher order function filter, which takes two arguments 
    1. An array: arr
    2. A callback function: cb
    3. The filter function creates a new array with all elements that pass the test implemented by the provided function.
    4. Example:
        1. function isEven(n) {
            return n % 2 == 0;
        }
        2. var arr = [1, 2, 3, 4];
        3. var arrEven = filter(arr, isEven); // [2, 4]
3. Create a Higher order function reduce, which takes three arguments, 
    1. An array: arr
    2. A callback function: cb
    3. An initial value: init
    4. The reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    5. Example:
        1. function sum(x, y) {
            return x + y;
        }
        2. var arr = [1, 2, 3, 4];
        3. var sum = reduce(arr, sum, 0); // 10
4. Create a Higher order function find, which takes two arguments 
    1. An array: arr
    2. A callback function: cb
    3. The find function returns the value of the first element in the provided array that satisfies the provided testing function.
    4. Example:
        1. function isEven(n) {
            return n % 2 == 0;
        }
        2. var arr = [1, 2, 3, 4];
        3. var firstEven = find(arr, isEven); // 2
5. Create a Higher order function findIndex, which takes two arguments
    1. An array: arr
    2. A callback function: cb
    3. The findIndex function returns the index of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.
    4. Example:
        1. function isEven(n) {
            return n % 2 == 0;
        }
        2. var arr = [1, 2, 3, 4];
        3. var firstEvenIndex = findIndex(arr, isEven); // 1
6. Create a Higher order function every, which takes two arguments
    1. An array: arr
    2. A callback function: cb
    3. The every function tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    4. Example:
        1. function isEven(n) {
            return n % 2 == 0;
        }
        2. var arr = [1, 2, 3, 4];
        3. var allEven = every(arr, isEven); // false
7. Create a Higher order function some, which takes two arguments
    1. An array: arr
    2. A callback function: cb
    3. The some function tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
    4. Example:
        1. function isEven(n) {
            return n % 2 == 0;
        }
        2. var arr = [1, 2, 3, 4];
        3. var someEven = some(arr, isEven); // true