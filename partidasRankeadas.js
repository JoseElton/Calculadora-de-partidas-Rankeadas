function quantidadeJogador(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

    switch (true) {
        case vitorias < 10:
            nivel = "Ferro"
            break;
        case vitorias <= 20:
            nivel = "Bronze"
            break;
        case vitorias <= 50:
            nivel = "Prata"
            break;
        case vitorias <= 80:
            nivel = "Ouro"
            break;
        case vitorias <= 90:
            nivel = "Diamante"
            break;
        case vitorias <= 100:
            nivel = "Lendário"
            break;
        default:
            nivel = "Imortal"
    }

    return { saldo, nivel };
}

function Mensagem(saldo, nivel) {
    console.log(`O Herói tem um saldo de ${saldo} e está no nível de ${nivel}.`);
}

const numeroJogadores = 3;

for (let i = 1; i <= numeroJogadores; i++) {
    const vitorias = Math.floor(Math.random() * 120) + 1; 
    const derrotas = Math.floor(Math.random() * 50) + 1; 

    const resultado = calcularNivel(vitorias, derrotas);

    console.log(`Jogador ${i}: O Herói tem um saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}.`)
}

