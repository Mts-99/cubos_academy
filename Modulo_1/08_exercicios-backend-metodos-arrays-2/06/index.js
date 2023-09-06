const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const novoArray = cidades.filter((cidade)=> {
    return cidade.length <= 8;
})

const arrayFormatado = novoArray.join(', ');
console.log(arrayFormatado);
console.log(novoArray);