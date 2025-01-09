let listaDeNomes = [];
const botaoCurtir = document.getElementById('um-botao');
const listagemDeCurtidores = document.getElementById('curtidores');

function adicionaNomeNaLista(nome){
    if(listaDeNomes.includes(nome)==false){
        listaDeNomes.push(nome);
        const novoItem = document.createElement('li');
        novoItem.textContent = nome;
        listagemDeCurtidores.appendChild(novoItem);
    }

    const textoCurtidas = document.getElementById('numero-de-curtidas');

    if(listaDeNomes.length === 1){
        textoCurtidas.innerHTML = `<strong>${listaDeNomes[0]}</strong> curtiu`;
    }
    else if(listaDeNomes.length === 2){
        textoCurtidas.innerHTML = `<strong>${listaDeNomes[0]}</strong> e <strong>${listaDeNomes[1]}</strong> curtiram`;
    }
    else if(listaDeNomes.length === 3){
        textoCurtidas.innerHTML = `<strong>${listaDeNomes[0]}</strong>, <strong>${listaDeNomes[1]}</strong> e mais <strong>1 pessoa</strong> curtiu`;
    }
    else{
        textoCurtidas.innerHTML = `<strong>${listaDeNomes[0]}</strong>, <strong>${listaDeNomes[1]}</strong> e mais <strong>${listaDeNomes.length-2} pessoas</strong> curtiram`;        
    }
}

botaoCurtir.addEventListener('click', () => {
    const nome = document.getElementById('texto');
    if (nome.value != ''){
        adicionaNomeNaLista(nome.value);
    }
    console.log(listaDeNomes);
})


