// forEach()
// Uses a callback function as a parameter
// callback function( value, index, array)
// Using just one parameter, the other can be omitted

var arr1 = [1,2,3,4,5]

function maisUm(value) {
     console.log(value + 1) 
}

arr1.forEach(maisUm)




// map()
// DOES NOT MODIFY THE ORIGINAL ARRAY
// Creates a new array

const numbers1 = [10,11,12,13,14,15];
const arr3 = numbers1.map(sumUp)

function sumUp(value) {
    return value + 1
}

console.log(arr3)

//filter()
// Creates a new array that passes in a test

const arr4 = [1,2,3,4,10,5,6,7,8,9,10]

const newArr = arr4.filter(biggestOne)

function biggestOne(value,index,arr) {
   return value > 7
}

console.log(newArr)

//reduce()
//Returns a SINGLE value
// receives a additional parameter: the total value (initial value / reduced value)
//DOES NOT REDUCE THE ORIGINAL ARRAY

const arr5 = [100,101,103,104,105,200]

const reduced = arr5.reduce(biggest)

// Return the biggest value in a array
function biggest(total,value,index,arr) {
    if (total <= arr[index+1]) {
        total = arr[index+1]
    }
    return total
}

console.log(reduced)

