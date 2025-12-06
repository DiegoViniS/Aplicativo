// tirar espaços (inicio e fim) e deixar tudo em maiusculo e mostrar quantidade de letras
// let nome = '   Wilson neto    ';
// let nome_Formatado = nome.trim().toUpperCase();

// console.log(nome_Formatado + ' Tem ' + nome_Formatado.replace(/ /g, '').length + ' letras ')



// let nome = '   Wilson neto    ';
// let nome_Formatado = nome.trim().toLowerCase();

// console.log(nome_Formatado + ' Tem ' + nome_Formatado.replace(/ /g, '').length + ' letras ')


let compras = ['pão' , 'açucar', 'leite', 'ovos', 'café']
console.log(compras)
compras.push('laranja')
console.log(compras)
compras.shift()
console.log(compras)
let temleite = compras.includes('leite')
console.log(compras)

console.log(compras.length)