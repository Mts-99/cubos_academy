let montante = 90_000;
let capital = 60_000;
let meses = 24;

let i = ((montante / capital) ** (1 / meses)) -1;
i = i *100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${i}, pois após ${meses} meses você teve que pagar ${montante} reais.`);