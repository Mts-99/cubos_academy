const original = [1, 4, 12, 21, 53, 88, 112];

const arrayPares = [];

for (let passar of original){
    const numeroPar = passar % 2 === 0;
    if (numeroPar){
        arrayPares.push(passar);
    }
}
console.log(arrayPares);