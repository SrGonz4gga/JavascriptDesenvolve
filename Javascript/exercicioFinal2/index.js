botaoPostar = document.getElementById('botaoPostar');
inputPostagem = document.getElementById('inputPostagem');
listaDePosts = document.getElementById('listaDePosts');
let vetorPosts = [];
let n = 0;
let i = 0;

async function carregaGato() {
    try{
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const gato = await resposta.json();
        return gato[0];

    } catch(erro){
        console.error('Erro ao carregar a foto do gato:', erro);
        return null;
    }
}

botaoPostar.addEventListener('click', async () => {
    const novoItem = document.createElement('section');
    novoItem.id = 'blocoPostagens';

    const data = new Date;

    const utcString = data.toUTCString().replace('GMT', '').trim();
    
    let gatoUrl = '';
    const response = await carregaGato();

    if(response) {
        gatoUrl = response.url;
    }
    
    novoItem.innerHTML = `<div id="perfil"><img src="./imagens/fotoPerfil.png" id="fotoPerfil"><p id="nome">Vini </p><p id="nomeUsuario"> @vinicius.mgonzaga</p><p id="data">${utcString}</p></div><p>${inputPostagem.value}</p>`;
    
    novaFoto = document.createElement('nav');
    novaFoto.innerHTML = `<img src = "${gatoUrl}" id="fotoGato">`;
    
    novoItem.appendChild(novaFoto);

    vetorPosts.push({nomeUsuario: 'vinicius.mgonzaga',data: data, texto: `${inputPostagem.value}`, likes:0, imagem: gatoUrl});

    botaoLike = document.createElement('button');
    botaoLike.id = 'botaoCurtir';
    botaoLike.innerText = 'Curtir';
    const postIndex = vetorPosts.length - 1;
    botaoLike.addEventListener('click', () => {
        vetorPosts[postIndex].likes += 1;
        vetorPosts[postIndex].likes === 1 ? botaoLike.innerText = `${vetorPosts[postIndex].likes} like` : botaoLike.innerText = `${vetorPosts[postIndex].likes} likes`;
    });

    novoItem.appendChild(botaoLike);

    
    if(n === 0){
        listaDePosts.appendChild(novoItem);
    }
    else{
        listaDePosts.insertBefore(novoItem, listaDePosts.firstChild);
    };
    n++;
})