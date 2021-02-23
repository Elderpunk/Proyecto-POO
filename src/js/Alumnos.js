// crear la clase Alumnos

export class Alumnos{
    constructor(nombre, foto, edad){
        this.nombre = nombre
        this.foto = foto
        this.edad = edad
        this.inscritos = []
    }
    // getters
    getNombre() { return this.nombre}
    getFoto() { return this.foto}
    getEdad() { return this.edad}
    getIncritos() { return this.inscritos}

    // setters
    setNombre(nombre) { this.nombre = nombre}
    setFoto(foto) { this.foto = foto}
    setEdad(edad) { this.edad = edad}
    setIncritos(inscritos) { this.inscritos = inscritos}
}