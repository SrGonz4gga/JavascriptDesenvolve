let tarefas = [];
let listaDeTarefas = document.getElementById("listaDeTarefas");
let listaDeTarefasConcluidas = document.getElementById("listaDeTarefasConcluidas")
const botaoAdicionar = document.getElementById("botao");
let textoTarefa = document.getElementById("textoInput");
let numTarefasPendentes = document.getElementById("numeroDeTarefas");
let numTarefasConcluidas = document.getElementById("numeroDeTarefasConcluidas");

let i = 0;
let p = 0;
let c = 0;

botao.addEventListener('click', () => {
    let tarefaAdicionada = textoTarefa.value
    if(tarefaAdicionada.trim() != ''){
        tarefas.push({descricao: tarefaAdicionada, estado: "Não concluído"});
        localStorage.setItem(`tarefa ${i+1}`,JSON.stringify ({descricao: tarefaAdicionada, estado: "Não concluído"}));
        i++;

        let novoItem = document.createElement("li");
        novoItem.innerHTML = `<input type="checkbox" id="caixa">${tarefaAdicionada} <button class="deletar"></button>`;
        listaDeTarefas.appendChild(novoItem);
        p++;
        numTarefasPendentes.innerText = `Tarefas pendentes (${p})`;
        
        novoItem.querySelector('#caixa').addEventListener('change', () => {
            const nomeDaTarefa = novoItem.innerText;
            const result = tarefas.find(item => item.descricao === nomeDaTarefa);
            if(result.estado === 'Não concluído'){
                result.estado = 'Concluído';
                listaDeTarefasConcluidas.appendChild(novoItem);
                p--;
                c++;
                numTarefasConcluidas.innerText = `Tarefas concluídas (${c})`;
                numTarefasPendentes.innerText = `Tarefas pendentes (${p})`;
            }
            else{
                result.estado = 'Não concluído';
                listaDeTarefas.appendChild(novoItem);
                p++;
                c--;
                numTarefasConcluidas.innerText = `Tarefas concluídas (${c})`;
                numTarefasPendentes.innerText = `Tarefas pendentes (${p})`
            }
        });
        
        novoItem.querySelector('.deletar').addEventListener('click', () =>{
            const nomeDaTarefa = novoItem.innerText;
            const result = tarefas.find(item => item.descricao === nomeDaTarefa);
            if(result.estado === "Não concluído"){
                p--;
            }
            else{
                c--;
            }

            for (let i=0; i<localStorage.length; i++){
                const chave = localStorage.key(i);
                const valor = JSON.parse(localStorage.getItem(chave));

                if(valor.descricao === novoItem.innerText){
                    localStorage.removeItem(chave);
                };

            };
            novoItem.remove();
            numTarefasConcluidas.innerText = `Tarefas concluídas (${c})`;
            numTarefasPendentes.innerText = `Tarefas pendentes (${p})`;
        })
    }
})


