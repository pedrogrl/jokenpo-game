//sorteio de números
const sortear = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/* calcula ganhador
0 - empate            1 - pedra
1 - jogador1          2 - papel
2 - maquina           3 - tesoura
*/
const calcularEscolha = (jogador1Escolha, maquinaEscolha) => {
    if (jogador1Escolha == 1 && maquinaEscolha == 1) {
        return 0;
    } else if (jogador1Escolha == 1 && maquinaEscolha == 2) {
        return 2;
    } else if (jogador1Escolha == 1 && maquinaEscolha == 3) {
        return 1;
    } else if (jogador1Escolha == 2 && maquinaEscolha == 1) {
        return 1;
    } else if (jogador1Escolha == 2 && maquinaEscolha == 2) {
        return 0;
    } else if (jogador1Escolha == 2 && maquinaEscolha == 3) {
        return 2;
    } else if (jogador1Escolha == 3 && maquinaEscolha == 1) {
        return 2;
    } else if (jogador1Escolha == 3 && maquinaEscolha == 2) {
        return 1;
    } else if (jogador1Escolha == 3 && maquinaEscolha == 3) {
        return 0;
    }
}

let selecionarMaos = (tipo, escolha) => {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}
let deselecionarMaos = (tipo, escolha) => {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

const jogar = (escolha => {
    let jogador1Escolha = escolha
    // sortear jogada da máquina
    let maquinaEscolha = sortear(1,3)
    // calcular quem ganhou
    let ganhador = calcularEscolha(jogador1Escolha, maquinaEscolha)
    if (ganhador == 0) {
        elMsg.style.color = 'yellow'
        elMsg.innerHTML = `Draw!`
    } else if (ganhador == 1) {
        elMsg.style.color = '#3498db'
        elMsg.innerHTML = `${jogador1Nome} won!`
        pontosJogador1++
        elPontosJogador1.innerHTML = pontosJogador1
    } else if (ganhador == 2) {
        elMsg.style.color = '#ff7675'
        elMsg.innerHTML = `Machine won!`
        pontosMaquina++
        elPontosMaquina.innerHTML = pontosMaquina
    }
    // selecionar maos
    selecionarMaos('jogador1', jogador1Escolha)
    selecionarMaos('maquina', maquinaEscolha)
    // deselecionar maos
    setTimeout(() => {
        deselecionarMaos('jogador1', jogador1Escolha)
        deselecionarMaos('maquina', maquinaEscolha)
        elMsg.style.color = 'white'
        elMsg.innerHTML = `${jogador1Nome}, please choose one hand above!`
    }, 1300);
})

const jogador1Escolhas = document.querySelectorAll('.jogador1-escolha')
jogador1Escolhas.forEach(escolha => {
    escolha.addEventListener('click', () => {
        if (escolha.id == 'jogador1-escolha-1') {
            jogar(1);
        } else if (escolha.id == 'jogador1-escolha-2') {
            jogar(2);
        } else if (escolha.id == 'jogador1-escolha-3') {
            jogar(3);
        }
    })
})


// nome do jogador
const jogador1Nome = prompt("Your name:");
const elJogador1Nome = document.querySelector('#jogador1-nome');
elJogador1Nome.innerHTML = jogador1Nome
// mensagem
const elMsg = document.querySelector('#mensagem')
elMsg.innerHTML = `Welcome, ${jogador1Nome}! Please choose one hand above!`
// pontuação
const elPontosJogador1 = document.querySelector('#jogador1-pontos')
let pontosJogador1 = Number.parseInt(elPontosJogador1.innerHTML)

const elPontosMaquina = document.querySelector('#maquina-pontos')
let pontosMaquina = Number.parseInt(elPontosMaquina.innerHTML)