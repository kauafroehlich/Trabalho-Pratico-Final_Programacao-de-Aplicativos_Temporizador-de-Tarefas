// modo escuro
const btnTema = document.querySelector("#btn-tema")
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});

// promoção
const imgPromo = document.querySelector("#img-promo");
imgPromo.addEventListener("mouseover", () => {
    imgPromo.src = "assets/hoverpromo.png";
})
imgPromo.addEventListener("mouseout", () => {
    imgPromo.src = "assets/promo.png";
})

// mostrar/ocultar PIN
const pinAcesso = document.querySelector("#pin-acesso");
const olhoPin = document.querySelector("#olho-pin");

olhoPin.addEventListener("mousedown", () => {
    pinAcesso.type = "text";
    olhoPin.src = "assets/eye.png";
});
olhoPin.addEventListener("mouseup", () => {
    pinAcesso.type = "password";
    olhoPin.src = "assets/eyeclosed.png";
});
olhoPin.addEventListener("mouseout", () => {
    pinAcesso.type = "password";
    olhoPin.src = "assets/eyeclosed.png";
});

// adicionar remove o sumido se tiver texto
const adicionar = document.querySelector("#Adicionar");
const nomeTarefa = document.querySelector("#nome-tarefa");
const tituloTarefa = document.querySelector(".titulo-tarefa");
const tarefaAberta = document.querySelector(".tarefa-aberta");
const erroAdicionar = document.querySelector("#erro-adicionar");
const sucessoAdicionar = document.querySelector("#sucesso-adicionar");
nomeTarefa.addEventListener('input', () => {
    erroAdicionar.classList.add("sumido");
})
adicionar.addEventListener("click", () => {
    if (nomeTarefa.value != "") {
        tituloTarefa.innerText = nomeTarefa.value;
        tarefaAberta.classList.remove("sumido");
        nomeTarefa.value = "";
        erroAdicionar.classList.add("sumido");
        sucessoAdicionar.classList.remove("sumido");
        setTimeout(() => {
            sucessoAdicionar.classList.add("sumido");
        }, 3000);
        
        //relogio
        clearInterval(relogio);                 
        relogio = null;                         
        tempoRestante = 60;                     
        tempo.innerText = "01:00";              
        sstatus.innerText = "Pronto para começar!";
        btnIniciar.disabled = false;           
        btnPausar.disabled = false;             
        mensagemFinal.classList.add("sumido"); 
    } else {
        erroAdicionar.classList.remove("sumido");
        sucessoAdicionar.classList.add("sumido");
    }
});

// padrao temprozador 
let tempoRestante = 60; 
let relogio = null;

//temporizador
const tempo = document.querySelector("#tempo");
const sstatus = document.querySelector("#status");
const btnIniciar = document.querySelector("#btn-iniciar");
const btnPausar = document.querySelector("#btn-pausar");
const mensagemFinal = document.querySelector("#mensagem-final");
btnIniciar.addEventListener("click", () => {
    // relogio só inicia se não estiver rodando no momento
    if (relogio == null) {
        sstatus.innerText = "Em andamento...";
        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        relogio = setInterval(() => { //({oq fazer}, de quanto em quanto tempo)
            // diminuir tempo
            tempoRestante=tempoRestante-1;
            // convcersão pro display
            let minutos = Math.floor(tempoRestante / 60);
            let segundos = tempoRestante % 60; //pega a sobra do 1min
            if (segundos < 10) {
                segundos = "0" + segundos;
            }
            tempo.innerText = "0" + minutos + ":" + segundos;
            // quando o tempo chega a zero:
            if (tempoRestante <= 0) {
                clearInterval(relogio);
                relogio = null;
                sstatus.innerText = "Tempo encerrado!";
                mensagemFinal.classList.remove("sumido"); // mostra tarefa concluída
                btnIniciar.disabled = true;
                btnPausar.disabled = true;
            }
        }, 1000);
    }
});

// pausar temporizador
btnPausar.addEventListener("click", () => {
    if (relogio != null) {
        clearInterval(relogio);
        relogio = null;
        sstatus.innerText = "Pausado";
        btnIniciar.disabled = false;
        btnPausar.disabled = true;
    }
});

// efeito mousedown nos botoes
btnIniciar.addEventListener("mousedown", () => {
    btnIniciar.style.transform = "scale(0.80)";
});
btnIniciar.addEventListener("mouseup", () => {
    btnIniciar.style.transform = "";
});

btnPausar.addEventListener("mousedown", () => {
    btnPausar.style.transform = "scale(0.80)";
});
btnPausar.addEventListener("mouseup", () => {
    btnPausar.style.transform = "";
});

btnTema.addEventListener("mousedown", () => {
    btnTema.style.transform = "scale(0.95)";
});
btnTema.addEventListener("mouseup", () => {
    btnTema.style.transform = "scale(1)";
});

adicionar.addEventListener("mousedown", () => {
    adicionar.style.transform = "scale(0.95)";
});
adicionar.addEventListener("mouseup", () => {
    adicionar.style.transform = "scale(1)";
});
