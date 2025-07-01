// 1.1
const botonShowme = document.querySelector('.showme')
console.log('1.1:', botonShowme)

// 1.2
const h1Pillado = document.querySelector('#pillado')
console.log('1.2:', h1Pillado)

// 1.3
const todosLosParrafos = document.querySelectorAll('p')
console.log('1.3:', todosLosParrafos)

// 1.4
const todosLosPokemon = document.querySelectorAll('.pokemon')
console.log('1.4:', todosLosPokemon)

// 1.5

const todosLosTestMe = document.querySelectorAll('[data-function="testMe"]')
console.log('1.5:', todosLosTestMe)

// 1.6

const todosLosTestMeParaElTercero = document.querySelectorAll(
  '[data-function="testMe"]'
)
const tercerPersonaje = todosLosTestMeParaElTercero[2]
console.log('1.6:', tercerPersonaje)
