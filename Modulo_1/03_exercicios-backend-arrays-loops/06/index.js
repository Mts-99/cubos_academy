const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

for (let numero of numeros){
 const numerosPares = numero % 2 === 0;
 if (numerosPares){
     soma += numero;
 }
}
console.log(soma);