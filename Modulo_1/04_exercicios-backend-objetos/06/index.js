const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
const jovem = [];
const adultos = [];

for(let faixaEtaria of usuarios){
    faixaEtaria.idade >= 18 ? adultos.push(faixaEtaria) : jovem.push(faixaEtaria);
}
console.log(jovem);
console.log(adultos);