class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(`
        Olá ${this.titular}, seu saldo atual é R$ ${this.saldo}`)
    }
    depositar(valor) {
        this.saldo += valor;
    }
      sacar(valor) {
        this.saldo -= valor;
    }


}
let ContaDoRune = new ContaBancaria("Rune", 15000)
ContaDoRune.verSaldo()
ContaDoRune.depositar(350)
ContaDoRune.sacar(100)
ContaDoRune.verSaldo()

