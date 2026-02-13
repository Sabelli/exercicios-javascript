let global = "Sou global";
function testarEscopo() {
  let local = "Sou local";
  console.log(global);           // Funciona
  console.log(local);            // Funciona
}
testarEscopo();
console.log(global);             // Funciona
// console.log(local);           // ❌ Erro — fora do escopo

function processar(callback) {
  console.log("Processando...");
  callback();
}
processar(() => console.log("Finalizado!"));
// Saída: Processando... / Finalizado!

async function pegarDados() {
  return "Dados recebidos!";
}
pegarDados().then(console.log);  // Dados recebidos!