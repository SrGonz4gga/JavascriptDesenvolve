const livrosEmEstoque = [
    {titulo: '1984', autor: 'George Orwell', quantidade: 5},
    {titulo: 'A revolução dos bichos', autor: 'George Orwell', quantidade: 5},
    {titulo: 'it', autor: 'Stephen king', quantidade: 5},
    {titulo: 'Harry potter', autor:'JK Roling', quantidade: 5},
];


function adicionarLivro (titulo, autor, quantidade){
    indice = livrosEmEstoque.findIndex(livro => livro.titulo === titulo)
    if(indice === -1){
        livrosEmEstoque.push({titulo, autor, quantidade});
        console.log(`Livro '${titulo}', adicionado com sucesso`);
    }
    else{
        console.log(`Livro '${titulo}', adicionado com sucesso`);
        livrosEmEstoque[indice].quantidade += quantidade;
    }
}

function removerLivro(titulo, quantidadeARemover){
    const indice = livrosEmEstoque.findIndex(livro => livro.titulo == titulo);
    if(indice === -1){
        console.log(`Livro '${titulo}' não encontrado`);
    }
    else{
        const quantidadeDoLivroEmEstoque = livrosEmEstoque[indice].quantidade;
        if (quantidadeARemover > quantidadeDoLivroEmEstoque){
            console.log(`Não é possível remover ${quantidadeARemover} livros '${titulo}', só existem ${quantidadeDoLivroEmEstoque} em estoque`);
        }
        else if(quantidadeARemover === quantidadeDoLivroEmEstoque){
            livrosEmEstoque.splice(indice,1);
            console.log(`Livro '${titulo}' removido com sucesso.`);
        }
        else{
            livrosEmEstoque[indice].quantidade -= quantidadeARemover; 
            console.log(`${quantidadeARemover} livros '${titulo}' removidos com sucesso.`);
        }
    }
}

function atualizaQuantidade(titulo, novaQuantidade){
    if (novaQuantidade < 0){
        console.log('Não é possível atualizar para um número menor que zero.');
    }
    else{
        const indice = livrosEmEstoque.findIndex(livro => livro.titulo === titulo);
        if(indice === -1){
        console.log(`Livro '${titulo}' não encontrado.`)
        }
        else{
        livrosEmEstoque[indice].quantidade = novaQuantidade;
        console.log(`Quantidade do livro '${titulo}' atualizada.`);
        }
    }
    
}

function listarLivros (array){
    for (livro of array){
        console.log('');
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Quantidade: ${livro.quantidade}`);
        console.log('');
        console.log('----------------------------------');
    }
}


