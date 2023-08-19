const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 30_559_69; //emCentavos

const leao = 28_559_70;

if(aposentada || portadoraDeDoenca ){
    console.log('ISENTA.')
}
else if(totalDeRendimentos <= leao){
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCÊ.')
}
else{
    console.log('PEGA LEÃO.')
}