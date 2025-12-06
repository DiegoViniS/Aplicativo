// 1 -  // criar uma funcao de boas vindas (sem parametros) com dois console e frase
//chamar a funcao


//2 - // Criar uma funcao com dois parametros.
// dentro da fncao criar uma variavel para calcular a soma de dois numeros e um console mostrando o resultado

//chame a funcao para mostrar varios resultados diferentes

//3 - //criar uma funcai para retornar o dobro de um valor. Precisa ter 1 parametro. Uma variavel da funcao usar o return dentro da funcao. console.log vai fora da funcao




//1
function Boas_vindas (){
    console.log("Seja bem vindo")
    console.log("Ola senhor")
}


Boas_vindas()

//2
function Calculo (n1, n2){
    let calcular = n1+n2
    console.log(calcular)
}

Calculo(7,5)


//3

function Multiplicacao (n1){
    let mult = n1 * 2
    return mult 
}
let resultado =  Multiplicacao(5) 

console.log(`o valor da multiplicação é ${resultado}`);
