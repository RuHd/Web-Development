// ARRAY METHODS

// toString() - Converte array para string separados por vírgula

// join() - Mesmo que toString(), porém pode definir o tipo de separador.

// operador DELETE - remove um valor dentro de uma array, porém deixa o valor como 
// undefined

// splice() - Adiciona novos valores à array. Podendo ser usado também para remover
// valores ( Ex: splice ( 0,1) 

// PARAMETROS : splice (position, qtd to be removed, value to be added)

// concat() - Concatena 2 arrays gerando uma nova. Podendo receber qualquer número
// de arrays para serem concatenados

// EX: newArray = array1.concat(array2)

// *Pode receber string como parametro

// EX: newArray = array1.concat("String")

// slice() = Cria uma nova array com um "pedaço" estipulado de uma array existente

// PARAMENTROS : slice( initial position, final position (not included))
// 	      slice(initial position) - 1 arg = Irá "cortar" o resto da array

var arr1 = [1,2,3,4,5,6,7,8,9,10]

var arr2 = [11,12,13,14,15,16,17,18,19,20]

console.log(arr1)

var arrString = arr1.toString()

console.log(arrString)

var arrConcat = arr1.join(" * ")

console.log(arrConcat)

arr1.splice(0,0,"Banana")

console.log(arr1)

// Removing elements by using splice()

arr1.splice(0,1)

console.log(arr1)

var newArray = arr1.concat(arr2)

console.log(newArray)

var slicedArray = arr1.slice(0,5)

console.log(slicedArray)

slicedArray = arr1.slice(0)

console.log(slicedArray)




