const cores = ['Preto', 'Branco'];
/*console.log(cores);
console.log(cores[0]);
console.log(cores[1]);
console.log(cores.length);
console.log(cores.indexOf('Branco'));
console.log(cores.indexOf('Azul'));
cores.push('Vermelho');
console.log(cores);
cores.push('Azul'); //Coloca o Item no final do array
console.log(cores); 
console.log(cores.indexOf('Azul'));
cores.shift() //Remove o primeiro elemento do array
console.log(cores)
cores.unshift('Preto'); //Adiciona o item no início do array
console.log(cores);
cores.pop(); //Remove o último item do array*/

cores.push('Vermelho', 'Verde', 'roxo');
console.log(cores);

function removeCor(nomeDaCor, array){
    const posicaoDaCor = array.indexOf(nomeDaCor);
    if(posicaoDaCor>=0){
        cores.splice(posicaoDaCor, 2);
    }
    else{
        console.log('Posição inexistente');
    }
    console.log(cores);
    
}



removeCor('Verde', cores);
