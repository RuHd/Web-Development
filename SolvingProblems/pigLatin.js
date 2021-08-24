// Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. 
// “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.


// PIGLATIN ALGORYTHM

var num = []
var newNum = []

var texto = "o rato roeu a roupa do rei de roma"

num = texto.split(" ")

var newWord, wordSecond, firstChar


    for(let i = 0; i<num.length; i++){
        wordSecond = num[i].replace(num[i][0], "")
        firstChar = num[i].slice(0,1)
        newWord = wordSecond + firstChar +"ay"
        newNum.push(newWord)
    }

    console.log(newNum)

    var str = newNum.join(" ")

    console.log(str)

  





