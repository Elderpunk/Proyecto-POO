export class Profesores{
    constructor(nombre, foto, asignatura){
        this.nombre = nombre
        this.foto = foto
        this.asignatura = asignatura
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getPoster() { return this.foto}
    getAsignatura() { return this.asignatura}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setPoster(foto) { this.foto = foto}
    setAsignatura(asignatura) { this.asignatura = asignatura}
    setIncritos(inscritos) { this.inscritos = inscritos}
}


