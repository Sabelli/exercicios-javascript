let veiculo = {
  marca: "FIAT",
  modelo: "Argo",
  ano: 2020,
  disponivel: true
};
console.log(veiculo.marca);
console.log(veiculo.modelo); 
console.log(veiculo["ano"]);
console.log(veiculo["disponivel"]);
veiculo.cor = "Preto";
console.log(veiculo.cor);