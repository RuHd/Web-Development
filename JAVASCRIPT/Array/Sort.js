// ARRAY SORT

// METODOS

// SORT() - Organiza a array em ordem alfabética

// REVERSE() - - Organiza a array em ordem alfabética de forma decrescente

// OBS- AMBOS funcionam para string. Ao usar com números, irá comparar apenas o primeiro
// dígito em caso de valores com mais de uma casa decimal

// COMPARE FUNCTION

// arr.sort(function(a,b){return a-b})

// 3 VALORES POSSÍVEIS:

// POSITIVO:a>b --> [b,a...]
// NEGATIVO:a<b --> [a,b...]
// ZERO: SEM MUDANÇA

// RANDOM ORDER

// The Fisher Yates Method

// var points = [40, 100, 1, 5, 25, 10];

// for (i = points.length -1; i > 0; i--) {
//   j = Math.floor(Math.random() * i)
//   k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }

// HIGHEST AND LOWEST VALUES


// Math.max.apply(null,arr)

// Math.min.apply(null,arr)

// SORTING OBJECTS

// Utiliza valores de propriedades dos objetos dentro da compare function

// var cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// cars.sort(function(a, b){return a.year - b.year});

// STRINGS:

// cars.sort(function(a, b){
//   var x = a.type.toLowerCase();
//   var y = b.type.toLowerCase();
//   if (x < y) {return -1;}
//   if (x > y) {return 1;}
//   return 0;
// });


var arr =[1,2,3,4,5]
var arrStr = ["banana","feijao","laranja","arroz","ovo","farinha","trigo","pão","maçã"]



console.log(arr.sort(function(a,b){return a-b})) //CRESCENT
console.log(arr.sort(function(a,b){return b-a})) // DECRESCENT

arrStr.sort()

console.log(arrStr)

arrStr.reverse()

console.log(arrStr)

// THE FISHER YATES METHOD - RANDOM VALUES

for (i = arr.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = arr[i]
  arr[i] = arr[j]
  arr[j] = k
}

console.log(arr)

console.log(Math.max.apply(null,arr))

console.log(Math.min.apply(null,arr))


























