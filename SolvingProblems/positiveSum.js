// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0


// declara uma variável onde receberá a soma

// percorre todos os elementos da Array

// Se for positivo, some.




var num= [1,2,3,4,5,1]
var sum = 0


for (let i = 0; i<num.length; i++){
    if (num[i] > 0) {
         sum += num[i]
         console.log(num[i])
    }
}

console.log(sum)

