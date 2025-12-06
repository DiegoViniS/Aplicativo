let peso = 86;
let altura = 1.83;
let imc = peso / (altura*altura)

console.log('Seu IMC é: ' + imc.toFixed(2));

if (imc < 18.5){
    console.log('Classificado abaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Classificado peso normal')
} else if (imc >= 25 && imc < 29.9){
    console.log('Classificado sobrepeso')
} else {
    console.log('Classificado obesidade')
}