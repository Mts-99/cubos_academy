const idade = 23;
const possuiPatologia = false;
const altura = 149;
const ehEstudante = true;

if (((idade >=12 && idade <18) || ehEstudante) && altura >= 150 && !possuiPatologia){
    console.log('10 reais para brincar.')
}
else if (idade<=65 && altura >= 150 && !possuiPatologia){
    console.log('20 reais para brincar')
}
else {
    console.log('ACESSO NEGADO.')
}