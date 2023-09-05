const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];

const existeBebibaAlcoolica = palavras.some(function(valor){
    return valor === 'cerveja' || valor === 'vodka';
});

if (existeBebibaAlcoolica) {
    console.log('Revise sua lista, joão. possui bebida com venda proibida!')
} else {
    console.log('Tudo certo, vamos as compras!');
}