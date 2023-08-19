const jogada1 = 6;
const jogada2 = 3;

const par = (jogada1 + jogada2) % 2 === 0;  
const impar = (jogada1 + jogada2) % 2 !== 0;

if (par) {
    console.log('Par ganhou!');
}else if (impar){
    console.log('Ímpar ganhou!');
}