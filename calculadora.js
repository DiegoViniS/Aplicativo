// Inserir um console.log para ser o titulo
// criar 3 variaveis (nome, anoNascimento, anoAtual)
// criar uma função sem parametro que calcula a idade, usando o return
// chamar a função e mostrar o resultado
// -------------

console.log('===CALCULADORA DE IDADE===');

let nome = "DIEGO"

let anoNascimento = 1990
let anoAtual = 2025;

function calcular_idade(){
    return anoAtual - anoNascimento
}

let ano_de_idade = calcular_idade(1990,2025)
console.log(`A idade do ${nome} é ${ano_de_idade} Anos`)
// criar uma funcao com parametros para fazer o mesmo calculo de idade da questão acima
//--------------
function calcular_idade(anoNasc,anoAt){
    return anoAt - anoNasc
}

let ano_de_idade = calcular_idade(1990,2025)
console.log(`A idade do ${nome} é ${ano_de_idade} Anos`)

//criar uma funcao com parametro e return para mostrar a quantidade de dias vividos
//--------------

function dias_de_vida(ano,anoatul){
    let temp = (anoatul-ano)*365
    return temp
}

let tempos_vividos = dias_de_vida(1990,2025)

console.log(`Você tem ${tempos_vividos} de dias de vida` )

//criar uma funçao para verificar se é maior de idade (if e else)

function idade(){
    let idades = anoAtual-anoNascimento
    if (idades >= 18){
        return ('Você é maior de idade')
    }
    else{
        return ('Você é menor de idade')
    }
}
console.log(idade(2025,2000))

