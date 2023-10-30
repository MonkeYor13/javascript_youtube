
//FUNTION

function transf(fahren) {

  return (fahren - 32) * (5 / 9)

}
const result = transf(76);

console.log(result);


//OBJETO

let auto1 = {
  marca: 'renualt',
  modelo: '12',
  peso: 1100,
  color: 'rojo',

}

console.log('el auto pesa:', auto1.peso);

const vendedor = {
  name: 'pedro',
  lastname: 'suarez',
  company: 'auto SA',
  skill: ['puntualidad', 'compañerismo'],
  vender: function () {
    return 'pedro vendio un auto'
  },

  //la palabra this se usa para llamar algo que esta fuera del scope, osea fuera de las {}
  complectname: function () {
    return this.name + " " + this.lastname
  }
}

console.log(vendedor.complectname());


//EVENTOS
//onclick, onmouseover, onmouseout, onchange
function show() {
  document.getElementById('select').innerHTML = Date()
}

console.log(show);


//STRING

let string = 'let\'s go!'
let barrainvertida = 'este signo se coloca 2 veves \\'
let saltoDeLinea = 'esto es una salto \nde linea'

console.log(string)
console.log(barrainvertida)
console.log(saltoDeLinea)



//cambiando los style y conociendo cuales se pueden modificar
// const ch = document.querySelector('.fondo-marron');
// ch.style.backgroundColor= 'blue';
// ch.style.color= 'red';
// console.log(ch.style);

//--------------------------------
//modificar texto
const text = document.getElementById('titulo');
text.innerText = 'Solos Pizzas';

//---------------------------------
//moficiar atributos
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].setAttribute('href', 'https://www.youtube.com/'));

//--------------------------------------
//modificar y agregar clases (.add, .remove)
const clases = document.querySelector('.topping');
clases.classList.add('mi-clase');

//--------------------------------------
//crear una elemento
const listToppings = document.getElementById('lista-topping');
const newTopping = document.createElement('li');
newTopping.classList.add('topping', 'mi-clase');
newTopping.innerText = 'Tomate';
listToppings.append(newTopping);

