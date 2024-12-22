const meusDados = {
    nome: 'Vinícius',
    sobrenome: 'Martins',
    moraNoBrasil: true,
    idade: 19,
    pegaDocumento: () => {
        console.log('CPF: 12345678900');
    },

};

meusDados.pegaDocumento();

//Verificando se o objeto possui determinado valor

function objetoPossuiValor(valorDaChave){
    const valoresDoObjeto = Object.values(meusDados); //Transforma um objeto em um array formado por seus valores
    console.log(valoresDoObjeto);
    return valoresDoObjeto.includes(valorDaChave);
}

console.log(objetoPossuiValor('19'));
console.log(objetoPossuiValor(19));

console.log('-------------------------');

console.log(objetoPossuiValor('Maria'));
console.log(objetoPossuiValor(false));

console.log('-------------------------');

//Verificando se o objeto possui determinada chave

function objetoPossuiChave(nomeDaChave){
    const chavesDoObjeto = Object.keys(meusDados); //Transforma um objeto em um array formado por suas chaves
    console.log(chavesDoObjeto);
    return chavesDoObjeto.includes(nomeDaChave);
};

console.log(objetoPossuiChave('cruzeiro'));

console.log('-------------------------');

console.warn('Perigo!');
console.error('Deu ruim');
console.info('Informação importante!');