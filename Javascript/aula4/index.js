let meuNome = 'Vinícius';

console.log(meuNome);

meuNome = 'Gonzaga';

console.log(meuNome);

function exibeNome(){
    let meuNome = 'Maria';
    console.log(meuNome);
};

exibeNome();
exibeNome();

const minhaPrimeiraArrowFunction = () => {
    console.log('Executei arrow function');
};

const exibeNomeArrow = () =>{
    let meuNome = 'Maria arrow function';
    console.log(meuNome);
}

exibeNomeArrow();
minhaPrimeiraArrowFunction();