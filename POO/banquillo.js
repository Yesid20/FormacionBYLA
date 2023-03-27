
class cuenta {
    titular;
    valor;
    constructor(titular, valor) {
        this.titular = titular;
        this.valor = valor;
    }
    getPerfil() {
        return this.titular;
    }
    setPerfil(titular) {
        this.titular = titular;
    }
    getPlatica() {
        return this.valor;
    }
    setPlatica(valor) {
        this.valor = valor;
    }
    ingrese() { }
    reintegro() { }
    transferencia() { }
}

let cuenta1 = new cuenta(titular, valor);
