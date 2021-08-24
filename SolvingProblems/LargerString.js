
// 1- Percorrer a array
// 2- Primeiro elemento armazenado em uma váriavel chamada MAIOR
// 3- Ao longo da array, comparar o elemento atual com o elemento previamente
// armazenado na array MAIOR.
// 4- Se o elemento atual for maior que o elemento da var MAIOR, então o elemento
// atual é armazenado na variável MAIOR.
// 5- No final do percurso, retorna o elemento maior e o seu tamanho.


var palavras = ["Ronaldo","Itaquaquecetuba","Mari", "Pneumoutramiscroscopicosilicovulcanoconiótico", "Rua"]

function LargerString() {
    var maior = ""
    for (let i = 0; i<palavras.length; i++){
        if (palavras[i].length > maior.length) {
            maior = palavras[i]
        }
    }
    return console.log("A maior palavra é a " + maior + " com o tamanho de: " + maior.length + " caracteres")
}

LargerString()

