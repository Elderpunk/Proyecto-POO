const fichaProfesor = document.getElementById('profesor')

export function mostrarProfesor(qprofesor) {
    // crear un nuevo elemento card
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <img src="${qprofesor.getPoster()}"/>
    <h3>${qprofesor.getNombre()}</h3>
    <h5>Especialidad: ${qprofesor.getClases()}</h5>
    `
    fichaProfesor.appendChild(card)
}