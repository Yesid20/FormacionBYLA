class cuenta {
    titular;
    cantidad;
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }
    getDato (){
        return this.titular;
    }
    setDato(titular){
        this.titular = titular;
    }
    getLongitud (){
        return this.cantidad;
    }
    setLongitud (cantidad){
        this.cantidad = cantidad;
    }
    ingresar(cantidad){
        if (cantidad>=0) this.cantidad += cantidad;
    }
    retirar(cantidad){
        if (this.cantidad - cantidad < 0){
            this.cantidad=0;
        }else{
            this.cantidad -= cantidad;
        }
        return this.cantidad;
    }
}