const numeros = [54, 22, 14, 87, 10, 284];

let posicaoArray = 0;
for( let numeroAtual of numeros){
    if (numeroAtual === 10){
       console.log(posicaoArray) 
    }
    posicaoArray += 1;
}