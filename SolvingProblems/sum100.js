// PROBLEMA: DADO UMA ARRAY COM NÚMEROS ALEATÓRIOS, REALIZAR OPERAÇÕES ONDE O RESULTADO DÊ 100 OU, PELO MENOS, CHEGUE
// O MAIS PRÓXIMO POSSÍVEL DO NÚMERO ALVO. CASO SE ENCERRE A ARRAY APÓS O RESULTADO FINAL, REPITA O PROCESSO PARA CHEGAR 
// O MAIS PRÓXIMO POSSÍVEL DE 100
// 
// INPUT: ARRAY COM NÚMEROS (EX: [1,2,3,40,130,20])
// OUTPUT: O RESULTADO DE OPERAÇÕES FEITAS: var resultado
// 
// 1º PASSO: Percorrer a array com os números
//    Uso do for loop ou de um método array 

// 2º PASSO: Selecionar dois números (consequentes) da array
//    Armazenar em A e B
//    Se o proximo valor for null, encerre a operação
//
// 3º PASSO: Verificar qual operação será realizada baseado no resultado mais próximo ou igual a 100
//    Multiplicação ou Adição
// 4 PASSO 
//    Armazenar o resultado e repetir o processo


var num=[1,2,3,4,8,9,10,12]
var possibleNum = []
var A, B;
var resultado = 0

for (let i = 1; i<= 99; i++){
  possibleNum.push(i)
}


function the100() {
  for (let i = 0; i<num.length; i++){
    A = num[i]
    B = num[i+1]
    if(B === undefined) {
      B = 0
    }
    if(( resultado + (A * B)) <= 100){
      resultado = resultado + (A*B)
      
  
    } else if (resultado + A + B <= 100){
        resultado += A+B
        
      } 

      
      
  }
  
  while(resultado <100) {
    for (let i = 0; i<possibleNum.length; i++){
      if (resultado + possibleNum[i] <= 100) {
        resultado = resultado + possibleNum[i]
        console.log("o resultado de " + possibleNum[i] + "+" + (resultado - possibleNum[i]) + " é " + resultado)
      }
    }
  } 

  return console.log(resultado)
}

the100()









