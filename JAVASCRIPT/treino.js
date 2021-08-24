class mamifero {
    constructor(especie) {
        this.pelos = true
        this.leite = true
        this.especie = especie
    }

}



class gato extends mamifero {
    constructor(especie) {
        super(especie)
        this.patas = 4
    }

    get som() {
        return console.log("Miaaaau!!!")
    }
}

var humano = new mamifero("Homo Sapiens") 

console.log(humano)