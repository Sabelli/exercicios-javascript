// Função tradicional:
function saudacao(nome) {
  return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));     // Olá, Maria!
// Arrow Function equivalente:
const saudacaoArrow = (nome) => "Olá, " + nome + "!";
console.log(saudacaoArrow("João")); // Olá, João!
// Arrow com uma linha: return é automático
const dobro = (n) => n * 2;
console.log(dobro(7));              // 14