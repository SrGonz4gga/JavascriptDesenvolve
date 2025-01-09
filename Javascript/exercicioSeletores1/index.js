const mudaTitulo = (novoTitulo) =>{
    document.querySelector('h1').innerText = novoTitulo;
};

const coloreItensDaLista = (listaDeCores) =>{
    lista = document.querySelectorAll('#lista li');
    let indice = 0;
    for(let elemento of lista){
        elemento.style.color = listaDeCores[indice];
        indice++;
    };
}

const alteraLista = (corDoTexto, corDeFundo, tamanhoDaFonte) =>{
    elemento = document.getElementById('lista');
    elemento.style.color = corDoTexto;
    elemento.style.backgroundColor = corDeFundo;
    elemento.style.fontSize = tamanhoDaFonte;
};

const adicionaClasse = (nomeDaClasse) =>{
    paragrafos = document.querySelectorAll('p');
    console.log(paragrafos);
    paragrafos.forEach((paragrafo) =>{
        paragrafo.classList.add(nomeDaClasse);
    });
};

const alteraTextoDoBotao = (novoTexto) =>{
    document.querySelector('button').innerText = novoTexto;
};


mudaTitulo('Título novo');

alteraLista('red', 'lightgrey', '30px');

const listaDeCores = ['red', 'green', 'blue', 'black'];
coloreItensDaLista(listaDeCores);

adicionaClasse('paragrafo-da-secao');

alteraTextoDoBotao('novo texto');