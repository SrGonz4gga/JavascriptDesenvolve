(()=>{
    const botaoBuscar = document.getElementById('busca');
    const inputLogin = document.getElementById('inputLogin');
    const lista = document.getElementById('listaUsuario');
    const paragrafoErro = document.getElementById('erro')

    async function carregaDevPorUser (user){
        if(user.trim() !== ''){
            const devData = await fetch(`https://api.github.com/users/${user}`);
            if (devData.ok){
                const listaDev = await devData.json();
                console.log(listaDev);
                return listaDev;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }


    botaoBuscar.addEventListener('click', () => {
        carregaDevPorUser(inputLogin.value).then(response => {
            if (response == false){
                lista.innerText = '';
                paragrafoErro.innerText = 'Não foram encontrados usuários para esta pesquisa';
            }
            else{
                lista.innerText = '';
                for(let atributo in response){
                    paragrafoErro.innerText = '';
                    const novoItem = document.createElement('li');
                    novoItem.innerText = `${atributo}: ${response[atributo]}`;
                    lista.appendChild(novoItem);
                    console.log(`${atributo}: ${response[atributo]}`);
                }
            }
        });
    })
})()