function Calcula(n) {
  var fatorial = 1
  for (i = 1; i <= n; i++) {
    fatorial = fatorial * i
  }
  console.log(n, "!="  , fatorial)
}

function Tempo() {
  var start = new Date();
  Calcula(53)
  var tempo = new Date() - start;
  return ('tempo: ' + tempo);
}
console.log(Tempo());
