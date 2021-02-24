// Crear la clase Profesor

export class Profesores{
    constructor(nombre, foto, curso){
        this.nombre = nombre
        this.foto = foto
        this.curso = curso
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getFoto() { return this.foto}
    getCurso() { return this.curso}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setFoto(foto) { this.foto = foto}
    setCurso(curso) { this.curso = curso}
    setIncritos(inscritos) { this.inscritos = inscritos}
}


