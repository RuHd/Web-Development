// Write a function that tests whether a string is a palindrome.

// PALINDROMO DEFINIÇÃO: Palavra com a mesma semântica quando lida de trás para frente

// EX: ARARA , ANA ,ALA

// Percorrer cada char da palavra de tras para frente.

// Concatenar cada caracter em uma váriavel (Palavra invertida)

// Comparar a váriavel com a palavra original

// Se forem iguais, retorne verdadeiro para PALINDROMO, senão, falso.

function palindromeFinder (word) {
    var reverseWord = ""

    console.log(word[0].toLowerCase())
    for (let i = word.length-1; i>=0; i--){
        
        // reverseWord += word[i] 
        reverseWord = reverseWord.concat(word[i])
    }
    
    reverseWord[0].toLowerCase()
    if (reverseWord === word) {
       return console.log("A palavra "+ word + " é um palíndromo")
    } else {
       return console.log("A palavra "+ word + " não é um palíndromo")
    }
}

palindromeFinder("Ala")

