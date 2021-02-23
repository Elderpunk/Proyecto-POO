const fichaAlumno = document.getElementById('alumnos')

export function mostrarAlumno(ficha) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${ficha.getFoto()}"/>
    <h3>${ficha.getNombre()}</h3>
    <h5>Edad del alumno: ${ficha.getEdad()}Años.</h5>
    `
    // agregar como hijo de curso
    fichaAlumno.appendChild(card)
}