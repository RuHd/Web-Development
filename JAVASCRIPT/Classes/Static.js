// MÉTODO STATIC()

// Método que só pode ser acionado na class, e não no objeto em si.

// Para utilizar o método no objeto, passa o mesmo como parâmetro dentro de Static

class quadrupede {
    constructor(name, pernas) {
        this.name = name
        this.pernas = pernas
        
    }
    static fala(gato) {
        return console.log("Eu sou um quadrupede, sou um "+ gato.name)
    }
}

var gato = new quadrupede("gato",4) 
// gato.fala()  Dá msg de erro
quadrupede.fala(gato)