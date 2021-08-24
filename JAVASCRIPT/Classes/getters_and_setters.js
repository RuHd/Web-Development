// GETTERS AND SETTERS

// FUNÇÃO GET

// Método que encapsula um dado antes de ser utilizado pelo código
// ** NÃO RECEBE PARÂMETROS

// FUNÇÃO SET

// **RECEBE PARÂMETROS

class carro {
    constructor(modelo,ano) {
        this.modelo = modelo
        this.ano = ano
    }

    get apresentação() {
        return console.log("Carro do modelo " + this.modelo + " do ano " + this.ano)   
    }

   
}

var car1 = new carro("sedan", 1994)
car1.apresentação

class features extends carro {
    constructor(portas,airbags,cambioAutomático, modelo, ano) {
    super(modelo,ano)
    this.portas = portas
    this.airbags = airbags
    this.cambio = cambioAutomático
    }

    
}

car1 = new features(4,true,true,"sedan",1994)

console.log(car1)