/*
    Estrutura de Repetição – LOOP
        – FOR IN
*/

const users = { name: 'Cesar', age: 27, street: 'Rua dos Bobos' }

// users.name → Cesar
// users['name'] → Cesar

for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}
