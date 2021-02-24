const elemProfesor = document.getElementById('profesor')

export function mostrarProfesor(ficha) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${ficha.getFoto()}"/>
    <h3>${ficha.getNombre()}</h3>
    <h5>Profesor de ${ficha.getCurso()}.</h5>
    `
    elemProfesor.appendChild(card)
}