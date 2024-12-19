const soma = (a,b) => a+b;
const subtrai = (a,b) => a-b;
const multiplica = (a,b) => a*b;
const divide = (a,b) =>  a/b;

function mostraResultado(a, b){
    console.log(`Soma entre ${a} e ${b}:`, soma(a,b));
    console.log(`Subtração entre ${a} e ${b}:`, subtrai(a,b));
    console.log(`Multiplicação entre ${a} e ${b}:`, multiplica(a,b));
    console.log(`Divisão entre ${a} e ${b}:`, divide(a,b));
}

mostraResultado(7,2);   
