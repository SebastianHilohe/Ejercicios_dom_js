// 1.1

const boton = document.querySelector('#btnToClick')

function btnClick(evento) {
  console.log('Informacion al clickar:', evento)
}
boton.addEventListener('click', btnClick)

// 1.2

const inputFocus = document.querySelector('.focus')

function hacerFocus() {
  console.log('Valor al hacer focus:', inputFocus.value)
}
inputFocus.addEventListener('focus', hacerFocus)

// 1.3

const inputValue = document.querySelector('.value')
function alEscribir() {
  console.log('El valor de este imput ahora es:', inputValue.value)
}
inputValue.addEventListener('input', alEscribir)

// 1.4

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

const listaAlbumes = document.createElement('ul')

for (const album of albums) {
  const elementoLista = document.createElement('li')
  elementoLista.textContent = album
  listaAlbumes.appendChild(elementoLista)
}

document.body.appendChild(listaAlbumes)
