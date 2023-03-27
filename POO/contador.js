class contador {
    operator;
    decisiones;
    constructor(operator, decisiones) {
        this.operator = operator;
        this.decisiones = decisiones;
    }
    getMatema() {
        return this.operator;
    }
    setMatema(operator) {
        this.operator = operator;
    }
    getToma() {
        return this.decisiones;
    }
    setToma(decisiones) {
        this.decisiones = decisiones;
    }
    incrementar() { operator++ }
    decrementar() { operator-- }

}