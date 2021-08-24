
// Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// Combinar 2 listas (arrays) com elementos alternando de cada lista

// Percorrer as 2 arrays


// 	0 2 4 6 8 10 12 - PAR            
// arr1 = [1,2,3,4,5,6,7]

//  	1 3 5 7 9 11 13 - ÍMPAR
// arr2 = [a,b,c,d,e,f,g]

// NOVALISTA = Largura das 2 listas somadas

// Percorrer as 2 listas = x vezes de acordo com o comprimento das 2 juntas

// Se o acumulador for par, adiciona o elemento da primeira lista, se for ímpar, da segunda

// recebe a posição do elementos das duas listas.

// elemento da 1ªlista : vem antes
// //       // 2ªlista : vem dps



var list1 = [1,2,3,4]
var list2 = ["a","b","c","d"]
var newlist = []

var reapeater = list1.length + list2.length

for (let i = 0; i<reapeater; i++) {
    if ((list1[i] && list2[i])== undefined) {
        break
    } 
    newlist.push(list1[i])
    newlist.push(list2[i]) 

    
}

console.log(newlist)

