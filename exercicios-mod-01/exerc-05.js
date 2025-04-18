// 5. Escreva um programa que encontre o maior número em uma lista de números e exiba o resultado no console.

const numeros = [9, 15, 7, -3, 88]

let maiorNumero = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
    }
}

console.log("O maior número é:", maiorNumero)
