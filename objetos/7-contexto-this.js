/* This ejecutado globalmente es la ventana, porque la ventana
es quien carga este codigo */
console.log(`this (scope global): ${this}`);

function whoIsThis() {
  return this;
}
console.log(`this scope fn: ${whoIsThis()}`);

function whoIsThisInStrictMode() {
  'use strict'
  return this;
}
console.log(`this scope fn: ${whoIsThisInStrictMode()}`);

const auto = {
    name: 'mazda',
    price: 100,
    noLlantas: 4,
    arranca: function() {
      console.log('arrancando', this.name);
    },
    frena: function () {
      console.log('frenando', this.name)
    }
  }

auto.arranca();

// this en el scope de un objeto
const person = {
    name: 'José',
    sayHello: function() {
        console.log(`Hola soy ${this.name}`)
        console.log('this:', this)
    }
}
person.sayHello()

// this cuando sacamos una funcion de un objeto
const accion = person.sayHello
accion()

