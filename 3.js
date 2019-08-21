function Aluno(numero) {
  this.numero = numero;
  this.nota = parseInt(Math.random() * 10);
  this.status = (this.nota >= 7) ? "APROVADO" : "REPROVADO"
};

let contadorAprovado = 0
for (i = 0; i < 20; i++) {
  let obj = new Aluno(i.toString())
  console.log(obj)
  if (obj.status == "APROVADO") { contadorAprovado++ }
}

console.log("numero de aprovados", contadorAprovado)
console.log("numero de reprovados", 20 - contadorAprovado)
