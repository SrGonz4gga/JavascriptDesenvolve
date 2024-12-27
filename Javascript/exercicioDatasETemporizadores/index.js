function defineDataFinal(ano, mês, dia, hora, minuto, segundo){ 
    const dataFinal = new Date(ano, mês-1, dia, hora, minuto, segundo);
    return dataFinal;
};

function exibeDataAtual(){
    const dataAtual = new Date();
    console.log(`\n       Data Atual: ${dataAtual.getDate()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()} | ${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`);
};

function exibeDataAtualComIntervalo(){
    intervalo = setInterval(() => {const dataAtual = new Date();
        if(dataAtual >= dataFinal){
            console.log('\n---------------CHEGAMOS NA DATA FINAL---------------\n');
            clearInterval(intervalo);
        }
        else{
            exibeDataAtual();
        }}, 1000);
}

function exibeDataFinal(dataFinal){
    console.log(`Data Final: ${dataFinal.getDate()}/${dataFinal.getMonth()}/${dataFinal.getFullYear()} | ${dataFinal.getHours()}:${dataFinal.getMinutes()}:${dataFinal.getSeconds()}`);
}

function contagemRegressiva(){
    console.log('\n\n---------------CONTAGEM REGRESSIVA---------------\n');
    const dataAtual = new Date();
    if(dataFinal < dataAtual){
        console.log('Já passamos desta data/horário\n');
    }
    else{
        if(dataAtual < dataFinal){
            exibeDataAtualComIntervalo();
        }
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

function calculaTempo(dataFinal){
    const dataAtual = new Date();
    const dataAtualnum = dataAtual.valueOf();
    const dataFinalnum = dataFinal.valueOf();
    console.log(dataAtualnum, dataFinalnum);

    if (dataAtualnum > dataFinalnum){
        console.log('Esta data já passou');
    }
    else{
        difms = dataFinalnum - dataAtualnum;
        difSeg = difms/1000;
        difMin = difSeg/60;
        difHoras = difMin/60;
        difDias = difHoras/24;

        console.log(`Tempo restante: ${formataTempo(difms)}`);
    }
};

const dataFinal = defineDataFinal(2024,12,27,10,5,0);
contagemRegressiva(dataFinal);