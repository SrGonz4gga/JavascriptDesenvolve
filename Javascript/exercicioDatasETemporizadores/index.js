function defineDataFinal(ano, mês, dia, hora, minuto, segundo){ 
    const dataFinal = new Date(ano, mês-1, dia, hora, minuto, segundo);
    return dataFinal;
};

function exibeDataAtual(){
    const dataAtual = new Date();
    document.getElementById('Regressiva').innerText = `\nContagem Regressiva:\n ${dataAtual.getDate()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()} | ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;
};

function exibeDataAtualComIntervalo(dataFinal){
    intervalo = setInterval(() => {const dataAtual = new Date();
        if(dataAtual >= dataFinal){
            document.getElementById('Regressiva') = '\n---------------CHEGAMOS NA DATA FINAL---------------\n';
            clearInterval(intervalo);
        }
        else{
            exibeDataAtual();
        }}, 1000);
}

function exibeDataFinal(dataFinal){
    document.getElementById('DataFinal').innerText = `\nData Final: ${dataFinal.getDate()}/${dataFinal.getMonth()}/${dataFinal.getFullYear()} | ${dataFinal.getHours()}:${dataFinal.getMinutes()}:${dataFinal.getSeconds()}`;
}

function contagemRegressiva(dataFinal){
    console.log('\n\n---------------CONTAGEM REGRESSIVA---------------\n');
    const dataAtual = new Date();
    if(dataFinal < dataAtual){
        document.getElementById('Regressiva').innerText = '\nJá passamos desta data/horário\n';
    }
    else{
        exibeDataAtualComIntervalo(dataFinal);
    }
};

function formataTempo(ms){
    const segundosTotais = Math.floor(ms / 1000);
    const dias = Math.floor(segundosTotais / 86400); 
    const horas = Math.floor((segundosTotais % 86400) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60); 
    const segundos = segundosTotais % 60;

    return `${String(dias).padStart(2, '0')}d ${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}m ${String(segundos).padStart(2, '0')}s`;
}

function calculaTempoRestante(dataFinal){
    const dataAtual = new Date();
    const dataAtualnum = dataAtual.valueOf();
    const dataFinalnum = dataFinal.valueOf();
    console.log(dataAtualnum, dataFinalnum);

    if (dataAtualnum > dataFinalnum){
        document.getElementById('Restante').innerText = '\nInsira uma data futura para a contagem regressiva';
    }
    else{
        difms = dataFinalnum - dataAtualnum;
        difSeg = difms/1000;
        difMin = difSeg/60;
        difHoras = difMin/60;
        difDias = difHoras/24;

        document.getElementById('Restante').innerText = `\nTempo restante: ${formataTempo(difms)}`;
    }
};


const dataFinal = defineDataFinal(2024,12,27,11,40,0);


exibeDataFinal(dataFinal);
calculaTempoRestante(dataFinal);
contagemRegressiva(dataFinal);