var maiorAltura = -1;
var menorAltura = Number.MAX_VALUE;

var somaAlturasHomens = 0;
var numHomens = 0;

var numMulheres = 0;

for (var i = 1; i <= 15; i++) {
  var altura = parseFloat(prompt("Informe a altura da pessoa: "));
  var sexo = prompt("Informe o sexo da pessoa m ou f");

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }

  if (altura < menorAltura) {
    menorAltura = altura;
  }

  if (sexo === "M") {
    somaAlturasHomens += altura;
    numHomens++;
  } else if (sexo === "F") {
    numMulheres++;
  }
}

var mediaAlturaHomens = numHomens > 0 ? somaAlturasHomens / numHomens : 0;

console.log("Maior altura: ${maiorAltura}");
console.log("Menor altura: ${menorAltura}");
console.log("Média de altura dos homens: ${mediaAlturaHomens}");
console.log("Número de mulheres: ${numMulheres}");