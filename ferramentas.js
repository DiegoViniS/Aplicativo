// 1 - função para calcular a area de um quadrado
// 2 - funcao para calcular a area de um retangulo
// 3 - funcao para calcular celsius em fahrenheit
// 4 - funcao para formatar preço com duas casas decimeias

// todas com return e console fora da funcao

// 1
function quadrado (lado){
    let area = lado**2
    return area
}

let area_quadrado = quadrado(8)

console.log('A area do meu quadrado é: ' + area_quadrado)


// 2
function retangulo (base, altura){
    let area = base * altura
    return area
}

let area_retangulo = retangulo(3,2)

console.log('A area do meu retangulo é: ' + area_retangulo)


// 3 
function temperatura (celsius){
    let conversão_temp = (celsius*9/5)+32
    return conversão_temp
}

let conversão = temperatura(55)

console.log('Minha temperatura em °F é: ' + conversão + '°F')


// 4 
function formatação_numeros(decimal){
    let numeros = decimal
    return numeros.toFixed(2)

}

let numeros = formatação_numeros (56.789999)

console.log('Numero em reais é R$ ' + numeros);



