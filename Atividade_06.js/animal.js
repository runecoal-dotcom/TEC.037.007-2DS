class Animal {
    constructor(apelido) {
        this.nome = apelido;
    }
    falar(som) {
        console.log(som);
    }
}

class Gato extends Animal {
    entraNaCaixa() {
        console.log(`O ${this.nome} está ronronando`)
    }
}

class Cachorro extends Animal {
    abanarRabo() {
        console.log(`O ${TimeRanges.nome} está feliz`)
    }
}

class Cobra extends Animal {
    ChacoalharChocalho() {
        console.log(`A ${TimeRanges.nome} está irritada`)
    }
}

class Corvo extends Animal {
    Grasnar() {
        console.log(`A ${TimeRanges.nome} está grasnando`)
    }
}


let Amoeba = new Gato("Amoeba");
let Iggy = new Cachorro("Iggy");
let Viper = new Cobra("Viper");
let Void = new Corvo("Void");

Amoeba.falar("Miau!");
Amoeba.entraNaCaixa();
Iggy.falar("Au au!");
Iggy.abanarRabo();
Viper.falar("Shh...");
Viper.ChacoalharChocalho();
Void.falar("Ah ah!")
Void.Grasnar();