// Regular Expressions

// Definição: Sequência de caracteres que definem um padrão de busca em textos.

// Comumente usado com os métodos search() e replace().

// search() - Retorna a posição da string em caso de match
// replace() - Substituie uma string

// SINTAXE: /pattern/modifiers

// Ex : /Ruan/i = RegExp
//      Ruan = Pattern
//      i = modifier

// MODIFICADORES

// i = Realiza a busca sem diferenciar letras maiusculas e minúsculas.
// g - Realiza a busca geral do padrão, ao invés de buscar apenas a primeira
// posição.
// m - Realiza busca em linhas diferentes.

// PADRÕES

// A busca entre um range de caracteres é determinado pelo colchetes []

// EX: [abc]
//     [0-9]
//     [x|y]

// MÉTODOS:

// test() - Verifica se há compatibilidade da expressão com a string comparada, retornando
// o valor TRUE em caso de verdadeiro.

// exec() - Retorna o valor compatível como um objeto. Caso não haja resultado, o valor
// será retornado com um (null) object.

var str = "Olá Reginaldo"
var match = /e/i

console.log(str.search([/[a]/]))

var str2 = str.replace(/reginaldo/i, "Carlos")







	

