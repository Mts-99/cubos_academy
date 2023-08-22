const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let novoArray = [];

for (let nome of nomes){
    const confirmacaoNome = nome [0] === 'a' || nome[0] === 'A';
    if (confirmacaoNome){
        novoArray.push(nome);
    }
}
console.log(novoArray);