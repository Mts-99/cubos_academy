const cpf = "123456789000";
const cnpj = "123456789000037";

const validarCpf = (cpf) => {
    if(cpf.length !== 11) {
        console.log('Cpf Invalido');
    } else {
        const cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
        console.log(cpfFormatado);
    }
}
const validarCnpj = (cnpj) => {
    if(cnpj.length !== 14) {
        console.log('Cnpj Invalido');
    } else {
        const cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
        console.log(cnpjFormatado);
    }
}
validarCpf(cpf);
validarCnpj(cnpj);

