//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 130_00;

const valorCredito = (valorDoProduto * 0.05)
const valorCheque = (valorDoProduto * 0.03 )
const valorDebitoDinheiro = (valorDoProduto * 0.10 )

const valorCFinal = (valorDoProduto - valorCredito)
const vChequeFinal = (valorDoProduto - valorCheque)
const vDeDinheiroFinal = (valorDoProduto - valorDebitoDinheiro)

const valorCreditoReal = (valorCFinal / 100)
const valorChequeReal = (vChequeFinal / 100)
const valorDEdDinheiroReal = (vDeDinheiroFinal / 100)

if (tipoDePagamento === 'credito'){
    console.log(`Valor a ser pago: R$${valorCreditoReal}`)
}
else if (tipoDePagamento === 'cheque'){
    console.log(`Valor a ser pago: R$${valorChequeReal}`)
}
else if (tipoDePagamento === 'débito' || tipoDePagamento === 'dinheiro') {
    console.log(`Valor a ser pago: R$${valorDEdDinheiroReal}`)
}