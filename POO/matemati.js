class figura {
    cateto1;
    cateto2;
    hipotenusa;
    constructor(cateto1, cateto2, hipotenusa, tipo) {
        this.cateto1 = cateto1;
        this.cateto2 = cateto2;
        this.hipotenusa = hipotenusa;
    }
    ladito() {
        if (this.cateto1 >= this.cateto2 && this.cateto1 >= this.hipotenusa) {
            return this.cateto1, " valor uno es el lado mayor";
        } else if (this.cateto2 >= this.cateto1 && this.cateto2 >= this.hipotenusa) {
            return this.cateto2, " valor dos es el lado mayor";
        } else if (this.hipotenusa >= this.cateto1 && this.hipotenusa >= this.cateto2) {
            return this.hipotenusa, " valor tres es el lado mayor";
        }}
    tipito() {
        if (this.cateto1 == this.cateto2 && this.cateto1 == this.hipotenusa && this.cateto2 == this.hipotenusa){
             return "Este triángulo es EQUILÁTERO "
            } else if (this.cateto1 == this.cateto2 && this.cateto1 != this.hipotenusa || this.cateto2 == this.hipotenusa && this.cateto2 != this.hipotenusa){
             return "Este triángulo es ISÓSCELES "
            } else if (this.cateto1 != this.cateto2 && this.cateto1 != this.hipotenusa || this.cateto2 != this.hipotenusa)
             return "Este triángulo es ESCALENO "
        }
    }
const classFigur = new figura (18,29,32)
console.log(classFigur.ladito());
const classFigu = new figura (18,29,32)
console.log(classFigu.tipito());
