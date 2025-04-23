/*
document --> HTML

getElementById --> Trás UM elemento pelo ID  
getElementByClassName --> Trás TODOS os elementos com essa classe  
getElementByTagName --> Trás TODOS os elementos com essa TAG  
getElementByName --> Trás TODOS os elementos com esse NAME  

querySelector --> Trás UM elemento, o PRIMEIRO que encontrar  
querySelectorAll --> Trás TODOS os elementos que encontrar 
*/

const input = document.getElementById("main-input")
console.log(input)

const elements = document.getElementsByClassName("paragraf-js")
console.log(elements)

const tag = document.getElementsByTagName("p")
console.log(tag)

const nome = document.getElementsByName("nome-completo")
console.log(nome)

const element = document.querySelector("p")
console.log(element)

const all = document.querySelectorAll("p")
console.log(all)