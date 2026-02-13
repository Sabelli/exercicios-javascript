let produto = { nome: "Teclado", preco: 150 };
console.log(produto.nome);        // Teclado
console.log(produto.preco);       // 150
console.log(produto.desconto);    // undefined — propriedade não existe
// Adicionando a propriedade depois:
produto.desconto = 20;
console.log(produto.desconto);    // 20