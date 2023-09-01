const comentario = "Esse COVID é muito perigoso!";

const achouCovid = comentario.toLocaleLowerCase().includes('covid');
const achoupandemia = comentario.toLocaleLowerCase().includes('pandemia');

if (achouCovid || achoupandemia) {
    console.log('Comentário bloqueado por conter palavras proibidas');
} else {
    console.log('Comentário autorizado');
}