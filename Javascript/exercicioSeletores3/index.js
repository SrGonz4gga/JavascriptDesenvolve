let tarefas = [];
let listaDeTarefas = document.getElementById("listaDeTarefas");
let listaDeTarefasConcluidas = document.getElementById("listaDeTarefasConcluidas")
const botaoAdicionar = document.getElementById("botao");
let textoTarefa = document.getElementById("textoInput");
let numTarefasPendentes = document.getElementById("numeroDeTarefas");
let numTarefasConcluidas = document.getElementById("numeroDeTarefasConcluidas");
let p = 0;
let c = 0;

botao.addEventListener('click', () => {
    let tarefaAdicionada = textoTarefa.value
    if(tarefaAdicionada.trim() != ''){
        tarefas.push({descricao: tarefaAdicionada, estado: "Não concluído"});

        let novoItem = document.createElement("li");
        novoItem.innerHTML = `<label><input type="checkbox" id="checkbox">${tarefaAdicionada}</label>`;
        listaDeTarefas.appendChild(novoItem);
        p++;
        numTarefasPendentes.innerText = `Tarefas pendentes (${p})`;

        novoItem.addEventListener('change', () => {
            const nomeDaTarefa = novoItem.textContent;
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
        })
    }
})
