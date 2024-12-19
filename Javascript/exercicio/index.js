const soma = (a,b) => {
    return a+b;
}


const subtrai = (a,b) => {
    return a-b;
};


const multiplica = (a,b) => {
    return a*b;
};


function divide(a,b){
    return a/b;
};


function mostraResultado(a, b){
    console.log(`Soma entre ${a} e ${b}:`, soma(a,b));
    console.log(`Subtração entre ${a} e ${b}:`, subtrai(a,b));
    console.log(`Multiplicação entre ${a} e ${b}:`, multiplica(a,b));
    console.log(`Divisão entre ${a} e ${b}:`, divide(a,b));
}

mostraResultado(7,2);   