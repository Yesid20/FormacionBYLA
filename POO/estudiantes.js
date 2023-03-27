
class alumno {
    nombre;
    nota;
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(a) {
        this.nombre = a;
    }
    getNoti() {
        return this.nota;
    }
    setNoti(b) {
        this.nota = b;
    }
    aprobación() {
        if (this.nota > 1 && this.nota < 5) {
            console.log("Su nota no ha sido aprobada")
        } else if (this.nota > 5 && this.nota < 10) {
            console.log("Su nota ha sido aprobada")
        }
        return "El alumno " + this.nombre + " cuenta con su nota " + this.nota;
    }
}
const alumno = new Alumno(nombre, nota);