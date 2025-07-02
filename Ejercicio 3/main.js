// 1.1
const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const listaPaises = document.createElement('ul')

for (const pais of paises) {
  const li = document.createElement('li')
  li.textContent = pais
  listaPaises.appendChild(li)
}
document.body.appendChild(listaPaises)

// 1.2

const parrafoAEliminar = document.querySelector('.fn-remove-me')
if (parrafoAEliminar) {
  parrafoAEliminar.remove()
}

//1.3
const coches = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divParaImprimir = document.querySelector('[data-function="printHere"]')
const listaCoches = document.createElement('ul')

for (const coche of coches) {
  const li = document.createElement('li')
  li.textContent = coche
  listaCoches.appendChild(li)
}
divParaImprimir.appendChild(listaCoches)

// 1.4
const paisesConImagen = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const pais of paisesConImagen) {
  const divPais = document.createElement('div')
  const titulo = document.createElement('h4')
  const imagen = document.createElement('img')

  titulo.textContent = pais.title
  imagen.src = pais.imgUrl

  divPais.appendChild(titulo)
  divPais.appendChild(imagen)
  document.body.appendChild(divPais)

  divPais.classList.add('tarjetaPais') // Creamos una eqtiqueta para tomar referencia mas adelante
}

//1.5

const botonEliminarUltimo = document.createElement('button')
botonEliminarUltimo.textContent = 'Eliminar el último Div'

function eliminarUltimaTarjeta() {
  const todasLasTarjetas = document.querySelectorAll('.tarjetaPais')
  const ultimaTarjeta = todasLasTarjetas[todasLasTarjetas.length - 1]
  if (ultimaTarjeta) {
    ultimaTarjeta.remove()
  }
}
botonEliminarUltimo.addEventListener('click', eliminarUltimaTarjeta)
document.body.appendChild(botonEliminarUltimo)

//1.6

const todasLasTarjetas = document.querySelectorAll('.tarjetaPais')
for (const tarjeta of todasLasTarjetas) {
  const botonEliminar = document.createElement('button')
  botonEliminar.textContent = 'Eliminar'

  botonEliminar.addEventListener('click', () => {
    tarjeta.remove()
  })

  tarjeta.appendChild(botonEliminar)
}
