function chamaPrimeiro() {
    console.log('Chama essa primeiro');
};

function chamaDepois(){
    console.log('entrou na segunda função.')
    chamaPrimeiro();
};

chamaDepois();

function recebePrimeira (primeiraFuncao){
    primeiraFuncao();
};

recebePrimeira(chamaDepois);
