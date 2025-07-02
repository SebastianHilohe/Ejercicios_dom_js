// 2.1
const divVacio = document.createElement('div')
document.body.appendChild(divVacio)

// 2.2
const divConParrafo = document.createElement('div')
const parrafo = document.createElement('p')
divConParrafo.appendChild(parrafo)
document.body.appendChild(divConParrafo)

// 2.3
const divConBucle = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const parrafoBucle = document.createElement('p')
  divConBucle.appendChild(parrafoBucle)
}
document.body.appendChild(divConBucle)

// 2.4
const parrafoDinamico = document.createElement('p')
parrafoDinamico.textContent = 'Soy dinámico!'
document.body.appendChild(parrafoDinamico)

// 2.5
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 2.6

const aplicaciones = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const listaUl = document.createElement('ul')

for (const aplicacion of aplicaciones) {
  const li = document.createElement('li')
  li.textContent = aplicacion
  listaUl.appendChild(li)
}
document.body.appendChild(listaUl)

// 2.7

const elementosAEliminar = document.querySelectorAll('.fn-remove-me')
for (const elemento of elementosAEliminar) {
  elemento.remove()
}

// 2.8
const todosLosDivs = document.querySelectorAll('div')
const segundoDiv = todosLosDivs[1]
const pEnMedio = document.createElement('p')
pEnMedio.textContent = 'Voy en medio!'
document.body.insertBefore(pEnMedio, segundoDiv)

// 2.9

const divsParaInsertar = document.querySelectorAll('div.fn-insert-here')
for (const div of divsParaInsertar) {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  div.appendChild(pDentro)
}
