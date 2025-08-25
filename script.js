let numerosDisponiveis = Array.from({ length: 75 }, (_, i) => i + 1);
let numerosSorteados = new Set(); /* Armazena valores únicos, sem os duplicar*/

const btnSortear = document.getElementById("btnSortear");
const btnBingo = document.getElementById("btnBingo");
const btnResetar = document.getElementById("btnResetar");

const divNumeroSorteado = document.getElementById("divNumeroSorteado");
const resultado = document.getElementById("resultado");
const nomeYasmin = document.getElementById("textoNome");

/* Botão Sortear */
btnSortear.addEventListener("click", () => {
    if (numerosSorteados.size === 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    let numero;

    do {
        numero = Math.floor(Math.random() * 75) + 1;
    } 
    while (numerosSorteados.has(numero));

    numerosSorteados.add(numero);

    const td = document.getElementById(numero.toString());
    td.style.backgroundColor = "rgb(113, 0, 148)";
    td.style.color = "white";
    td.style.transition = "background-color 0.3s ease";

    divNumeroSorteado.style.display = "block";
    resultado.textContent = numero;
    nomeYasmin.style.display = "none";
});

/* Botão Bingo */
btnBingo.addEventListener("click", () => {
    let params = {
		particleCount: 3000, // Quantidade de confetes
		spread: 170, // O quanto eles se espalham
		startVelocity: 70, // Velocidade inicial
		origin: { x: 0, y: 0.5 }, // Posição inicial na tela
		angle: 45, // Ângulo em que os confetes serão lançados
        colors: ["#800080", "#9932CC", "#BA55D3", "#DA70D6", "#E6E6FA"],
	};

	// Joga confetes da esquerda pra direita
	confetti(params);

	// Joga confetes da direita para a esquerda
	params.origin.x = 1;
	params.angle = 135;
	confetti(params);

    numerosSorteados.clear();
    for (let i = 1; i <= 75; i++) {
        const td = document.getElementById(i.toString());
        td.style.backgroundColor = "";
        td.style.color = "";
        divNumeroSorteado.style.display = "none";
        nomeYasmin.style.display = "block";
    }

});

/* Botão Resetar */
btnResetar.addEventListener("click", () => {
    numerosSorteados.clear();
    for (let i = 1; i <= 75; i++) {
        const td = document.getElementById(i.toString());
        td.style.backgroundColor = "";
        td.style.color = "";
        divNumeroSorteado.style.display = "none";
        nomeYasmin.style.display = "block";
    }
});
