let num = []
console.log(num)

for(i=1; i<=1000; i++){
  let novoNumero = parseInt(Math.random()*5000)
  if(num.includes(novoNumero)){

  }
  num.push(novoNumero)
}
  num.sort(function (a,b) {return a-b})
  console.log(num)
