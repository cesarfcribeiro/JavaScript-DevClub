// ForEach(item, index, array)

const users = [
  { name: "Rodolfo", age: 33, number: "(19) 94343-3434" },
  { name: "Paulo", age: 21, number: "(12) 93443-3434" },
  { name: "Aline", age: 40, number: "(13) 94566-3434" },
  { name: "Maria", age: 12, number: "(14) 94343-3476" },
];

users.forEach(function (item, index) {
  console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.number}`);
});
