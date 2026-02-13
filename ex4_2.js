let pessoa = {
  nome: "Carlos",
  idade: 30,
  ativo: true
};
console.log(pessoa.nome);        // "Carlos"
console.log(pessoa["idade"]);    // 30
console.log(pessoa.ativo);       // true
// Adicionando nova propriedade:
pessoa.email = "carlos@email.com";
console.log(pessoa.email);       // "carlos@email.com"