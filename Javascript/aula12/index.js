const meusDados = {
    nome: 'Vinícius',
    sobrenome: 'Martins',
    moraNoBrasil: true,
    idade: 19
};

console.log(meusDados);
console.log(meusDados.nome);
console.log(meusDados['idade']);
console.log(meusDados['sobrenome']);

function retornaDadoPessoal(dadoPessoal){
    return (meusDados[dadoPessoal]);
}


console.log(retornaDadoPessoal('moraNoBrasil'));
console.log(retornaDadoPessoal('sobrenome'));