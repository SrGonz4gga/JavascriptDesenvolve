const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];

function iteraSobreArray (){
    for(let i = 0; i<fibonacci.length; i++){
        console.log(`Fibonacci ${i+1} : ${fibonacci[i]}`);
    }
}

iteraSobreArray();

function contaAte(num){
    for(let i = 1; i<=num; i++){
        console.log(i);
    }
}

contaAte(10);

console.log('---------------------------');

function verificaItemArray(listaDeNumeros){
    for(let item of listaDeNumeros){
        console.log(item);
    };
}

function verificaIndiceArray(listaDeNumeros){
    for(let indice in listaDeNumeros){
        console.log(listaDeNumeros[indice]);
    };
} 

verificaItemArray(fibonacci);

console.log('---------------------------');

verificaIndiceArray(fibonacci);

console.log('---------------------------');

function contaPeloMenosUmAte(numeroLimite){
    let numero = 0;
    do{
        console.log(numero);
        numero++;
    }while(numero <= numeroLimite);
}

contaPeloMenosUmAte(10);

console.log('---------------------------');

function VerificaSePodeAteNumeroLimite(numeroLimite){
    let numero = 0;
    while(numero <= numeroLimite){
        console.log(numero);
        numero++;
    };
}

VerificaSePodeAteNumeroLimite(100);