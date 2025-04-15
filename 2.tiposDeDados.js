/*
Tipos de Dados

1. String -> Textos.
2. Numbers -> Numeros.
3. Boolean -> Boleano. true or false
4. Object -> Objetos.
5. Null & Undefined
*/

const texto1 = "Textos 'Textos' Textos";
let texto2 = "Textos Textos Textos";
let texto3 = `Texto 
com 
crase`; //Template literals ou Template String

console.log(texto1);
console.log(texto2);
console.log(texto3);

//------------------------------------------------
const myAge = 30;

const myString = `Minha idade é ${myAge}`;
console.log(myString);

//------------------------------------------------

const numero1 = 32.55;

//------------------------------------------------

const name = "Cesar";
const age = 27;
const address = "Rua São Paulo";

const cesar = {
  name: "Cesar",
  age: 27,
  address: {
    street: "Rua São Paulo",
    number: 1100,
    city: "Belo Horizonte",
  },
};

cesar.address.number = 1101;

console.log(cesar);
console.log(cesar.address);
console.log(cesar.address.number);

//------------------------------------------------

const user = {
  nome: "Pedro",
  idade: 25,
  nomeConjuge: "Aline",
  id: null,
};

user.id = 252525;
