const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

const corrigirProva = (prova) =>{
    let respostaCerta = 0;
 

    for(let questao of prova.questoes){
       if (questao.resposta === questao.correta){
       respostaCerta ++
    }
}
let valorPorQuestao = prova.valor / prova.questoes.length;
let notaDaProva = valorPorQuestao * respostaCerta;

console.log(`O aluno(a) ${prova.aluno} acertou ${respostaCerta} questões e obteve nota ${notaDaProva}.`);
} 
corrigirProva(prova);