const caractere = 8;

const vogalMinusculas = caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u";

const vogalMaiusculas = caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U";

const numero = caractere === 1 || caractere === 2 || caractere === 3 || caractere === 4 || caractere === 5 || caractere === 6 || 
caractere === 7 ||caractere === 8 || caractere === 9 || caractere === 0; 

const consoantesMinusculas = caractere === "b" || caractere === "c" ||caractere === "d" || caractere === "f" ||
caractere === "g" || caractere === "h" ||caractere === "j" || caractere === "k" ||
caractere === "l" || caractere === "m" ||caractere === "n" || caractere === "p" ||
caractere === "q" || caractere === "r" ||caractere === "s" || caractere === "t" ||
caractere === "v" || caractere === "x" ||caractere === "w" || caractere === "y" ||
caractere === "z";

const consoantesMaiusculas = !vogalMaiusculas && !vogalMinusculas && !numero && !consoantesMinusculas;

if (numero){
    console.log('Número.')
}
else if (vogalMinusculas){
    console.log('letras minúscula.')
}
else if (vogalMaiusculas){
    console.log('letras maiúsculas.')
}
else if (consoantesMaiusculas){
    console.log('consoantes maiúsculas.')
}
else if (consoantesMinusculas){
    console.log('consoantes minúsculas.')
}