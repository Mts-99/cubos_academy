const ladoA = 3;
const ladoB = 3;

const bucha = ladoA === ladoB;

if (bucha) {
    if (ladoA === 0){
        console.log('Bucha de branco.')
    } 
    else if (ladoA === 1){
        console.log('Bucha de ás.')
    }
    else if (ladoA === 2){
        console.log('Bucha de duque.')
    }
    else if (ladoA === 3){
        console.log('Bucha de Terno.')
    }
    else if (ladoA === 4){
        console.log('Bucha de quadra.')
    }
    else if (ladoA === 5){
        console.log('Bucha de quina.')
    }
    else if (ladoA === 6){
        console.log('Bucha de senas.')
    }
}
else{
    console.log('Não é uma bucha.')
}