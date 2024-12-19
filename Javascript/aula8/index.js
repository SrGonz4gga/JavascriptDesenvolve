const todoMundoVe = 'Todo mundo é capaz de ver esta variável de escopo global';

function executaEscopoGlobal(){
    console.log(todoMundoVe);
};

alert("oi");

function executaEscopoLocal(){
    const visivelEmEscopoLocal = 'Só quem está dentro do bloco da função vê esta variável de escopo local';
    console.log(visivelEmEscopoLocal);

    function chamaDentroDoEscopo(){
        console.log('Dentro do escopo =>', visivelEmEscopoLocal);
        const dentroDoLocal = false;
        console.log(todoMundoVe);
 
    };


    chamaDentroDoEscopo();
};

executaEscopoLocal();


//console.log(visivelEmEscopoLocal); Erro