const nomeArquivo = 'Foto da Familia.git';

const validarArquivo = (arquivo) => {
    const extensao = arquivo.slice(arquivo.lastIndexOf('.') + 1);

    if (extensao === 'jpg' || extensao === 'jpeg' || extensao === 'git'|| extensao === 'png') {

        console.log('Arquivo válido.');
    } else {
        console.log('Arquivo inválido.');
    }
}

validarArquivo(nomeArquivo);