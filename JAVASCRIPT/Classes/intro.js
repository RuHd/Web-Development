// CLASSES

// * Classes não possuem comportamento hoisting (devem ser declarados primeiro)

// DEFINIÇÃO

// Não são objetos. Funcionam como uma espécie de "blueprint" de um objeto.

// MÉTODOS CONSTRUCTOR()

//  É obrigatório ser adicionado dentro da classe
//  **Executado automaticamente quando um objeto é criado
//  Sem declaração, o javascript adiciona um constructor() vazio.

// "USE STRICT"

// Ocorre erro ao não declarar variáveis antes de usá-las.

// EX: data = new Date() //ERRO
// let data = new Date() //CORRETO

// CLASS INHERITANCE

// Criação - Utilizar a keyword extends
// DEFINIÇÃO

// Recebe todos os métodos da classe Pai

// MÉTODOS

// Super() - Refere-se a classe pai - recebendo o constructor (Utiliza-se apenas uma vezss)
// OBJETIVO - Ter acesso aos métodos e propriedades da classe pai.

// CLASS SINTAXE: 
// class car {
//     constructor(ano,modelo) {
//         this.ano = ano
//         this.modelo = modelo
//     }
// }

// const car1 = new car("2012","Sedan")


//CLASS INHERITANCE

class car {
    constructor(ano,modelo) {
        this.ano = ano
        this.modelo = modelo
    }
}
 
 class features extends car {
    constructor(portas,airbags,cambioAutomático, modelo, ano) {
    super(modelo,ano) // Chamando constructor da class car (this.ano = ano ; this.modelo = modelo)
    this.portas = portas
    this.airbags = airbags
    this.cambio = cambioAutomático
    }

    
}


 const car1 = new features(4,true,true,"sedan",1994)

 console.log(car1)
    
    

