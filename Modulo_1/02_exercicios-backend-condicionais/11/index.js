//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 1_500_00;
const porcentagem = 0.18;                                
const parcela = rendaMensalEmCentavos * porcentagem;    
const mesesDecorridos = 6;
const totalJaPagoPeloAluno = 17_000_00;                   
const valorApagar = 18_000_00
const falta = valorApagar - totalJaPagoPeloAluno;

if (valorApagar === totalJaPagoPeloAluno){
    console.log('Divida paga!')
}
else if (rendaMensalEmCentavos /100 >= 2_000 && mesesDecorridos <= 60){
    console.log(`Valor da parcela será R$ ${parcela / 100} reais.`)
}
else if (mesesDecorridos >= 60){
    console.log('O periodo de quitação da divida foi encerrado pois passou dos 60 meses.')
} 
else if (rendaMensalEmCentavos /100 <= 2_000){
    console.log('O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2.000 reais.')
}