function eDediaOuEdeNoite (hora){
    let periodo = '';
    if (hora <= 18){
        periodo = 'É de dia';
    }
    else{
        periodo = 'É de noite';
    }
    return periodo;
};

console.log(eDediaOuEdeNoite('dia'));
console.log('-----------------------------------');

function eMaiorDeIdade(idade){
    if(idade >= 18){
        console.log('Maior de idade');
    }
    else{
        console.log('Menor de idade');
    }
}

eMaiorDeIdade(18);
eMaiorDeIdade('12');
eMaiorDeIdade(false);

console.log('-----------------------------------');

function periodoDoDia(hora){
    if(hora < 12 && hora >= 0){
        console.log('Manhã');
    }
    else if(hora >= 12 && hora < 18){
        console.log('Tarde');
    }
    else{
        console.log('Noite');
    }
}

periodoDoDia(2);
periodoDoDia(14);
periodoDoDia(20);

console.log('-----------------------------------');


function periodoComRegra(hora){
    if (hora >= 0 && hora <= 24){
        periodoDoDia(hora);
    }
    else{
        console.log('Hora inválida');
    }
}

periodoComRegra(-1);

console.log('-----------------------------------');

function menuEscolha(opcaoDoMenu){
    switch(opcaoDoMenu){
        case 1:
            console.log('Opção 1');
            break;
        case 2:
            console.log('Opção 2');
            break;
        case 3:
            console.log('Opção 3');
            break;
        default:
            console.log('Nenhuma opção válida');
    }
}

menuEscolha(4);

console.log('-----------------------------------');

function maiorDeIdadeSimples(idade){
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(maiorDeIdadeSimples(17));

console.log('-----------------------------------');

function maiorDeIdadeUnario(idade){
    return idade >= 18 && 'Maior de idade';
}

console.log(maiorDeIdadeUnario(3));