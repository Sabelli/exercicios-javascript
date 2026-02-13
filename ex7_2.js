// Parte A - Escopo
let app = "MinhaApp";
function funcaoTeste() {
  let versao = "1.0";
  console.log(app);
  console.log(versao);
}
funcaoTeste();
console.log(app);
// console.log(versao); // não funciona porque a variável versao foi criada dentro da função testarEscopo, e não na "raíz" do código

// Parte B - Callback
function executarTarefa(nomeTarefa, callback) {
  console.log("Iniciando: " + nomeTarefa);
  callback();
}
executarTarefa("Lavar Roupa", () => console.log("Tarefa concluída!"));

// Parte C - Async
async function buscarPerfil() {
  return "Perfil carregado: Usuário Padrão";
}
buscarPerfil().then(console.log);