const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido && primeiroNome && sobrenome){
    console.log(apelido, primeiroNome,  sobrenome)
}
else if (apelido && primeiroNome){
    console.log(apelido, primeiroNome)
}
else if(apelido && sobrenome){
    console.log(apelido, sobrenome)
}
else if (primeiroNome && sobrenome){
    console.log(primeiroNome, sobrenome)
}
else if (sobrenome && apelido ){
    console.log(apelido, sobrenome)
}
else if (primeiroNome){
    console.log(primeiroNome)
}
else if (apelido){
        console.log(apelido)
}
else if (sobrenome){
    console.log(sobrenome)
}