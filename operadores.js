//criar um programa que valide se a pessoa terá desconto na entrada do cinema. Criar 3 variaveis(idade, estuadante, precoingresso). fazer condição para dar 50% de desocnto caso a caondição 'estudante' seja true


let idade = 19
let estudante = false
let preco_ingresso  = 35


if (estudante === true){
    let valor_estudante =  preco_ingresso/2
    console.log(`você tem 50% de desconto e pagará o valor de R$ ${valor_estudante}`)
}


else {
    console.log('Você não possui desconto')
}


//--------------------------------


let idade = 17
let estudante = true
let preco_ingresso  = 35


if (idade < 18 || idade >= 60 && estudante === true){
    let valor_estudante =  preco_ingresso/2
    console.log(`você tem 50% de desconto e pagará o valor de R$ ${valor_estudante}`)
}


else {
    console.log('Você não possui desconto')
}