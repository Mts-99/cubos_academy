const cpf = "011.022.033-44";
const cnpj = "11.022.833/0001-44"

const removerPontuacao = (numero) => {
    const numeros = numero.replace('-', '').replace('/', '').split('.');
    let numeroLimpo = '';

    for (const item of numeros) {
        numeroLimpo += item;        
    }
    console.log(numeroLimpo);
}
removerPontuacao(cpf);
removerPontuacao(cnpj)