function calcularRank (numeroDeVitorias,NumerDeDerrotas){
    return numeroDeVitorias - NumerDeDerrotas
}

let pontosDoHeroi = calcularRank(22,10)
let rankDoHeroi = ""

if (pontosDoHeroi < 10) {
    rankDoHeroi = "Ferro"
} else if (pontosDoHeroi < 21) {
    rankDoHeroi = "Bronze"
} else if (pontosDoHeroi < 51) {
    rankDoHeroi = "Prata"
} else if (pontosDoHeroi < 81) {
    rankDoHeroi = "Ouro"
} else if (pontosDoHeroi < 91) {
    rankDoHeroi = "Diamante"
} else if (pontosDoHeroi < 101) {
    rankDoHeroi = "Lendário"
} else {
    rankDoHeroi = "Imortal"
}

    console.log("O Herói tem " + pontosDoHeroi + " pontos de saldo e está no nível " + rankDoHeroi)