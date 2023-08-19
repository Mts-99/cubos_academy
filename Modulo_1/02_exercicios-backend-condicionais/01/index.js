const jogada1 = "pedra"; 
const jogada2 = "papel";

if (jogada1 === 'pedra' && jogada2 === "tesoura"){
    console.log('Pedra ganhou!');
}
 else if (jogada1 === 'pedra' && jogada2 === "papel"){
    console.log('Papel ganhou!');
}
 else if (jogada1 === 'tesoura' && jogada2 === "pedra"){
    console.log('Pedra ganhou!');
}
else if (jogada1 === 'tesoura' && jogada2 === "papel"){
    console.log('Tesoura ganhou!');
}
else if (jogada1 === 'papel' && jogada2 === "tesoura"){
    console.log('Tesoura ganhou!');
}
else if (jogada1 === 'papel' && jogada2 === "pedra"){
    console.log('Papel ganhou!');
}else if (jogada1 === jogada2){
    console.log('Empate!');
}  