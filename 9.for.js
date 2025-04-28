/*
Estrutura de Repetição - LOOP
--- FOR
    1) INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial pra ela
    2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
                  Ele irá verificar antes de cada iteração
    3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço for executado

for ([inicialização]; [condição]; [expressão final]){
    Seu código aqui
}
*/

for (let i = 0; i < 15; i++) {
  console.log(i);
}

const users = ["Cesar", "Pedro", "Jaime", "Rodrigo", "Cesar", "Pedro", "Jaime", "Rodrigo", "Cesar", "Pedro", "Jaime", "Rodrigo", "Cesar", "Pedro", "Jaime", "Rodrigo", "Cesar", "Pedro", "Jaime", "Rodrigo"];

// length = tamanho do array
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
