//valor do produto comprado.
const valorDoProduto = 1_000_00;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago
const valorPago = 300;


const valorReal = valorDoProduto / 100; // 1.000
const valorParcela = valorReal / quantidadeDoParcelamento; 
const abatido = valorReal - valorPago; // 700
const parcelamentoFinal = abatido / valorParcela; // numero de parcelas

console.log(`Restam ${parcelamentoFinal} parcelas de R$${valorParcela}.`)