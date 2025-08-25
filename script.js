let numerosDisponiveis = Array.from({ length: 75 }, (_, i) => i + 1);
let numerosSorteados = new Set(); /* Armazena valores únicos, sem os duplicar*/

const btnSortear = document.getElementById("btnSortear");
const btnBingo = document.getElementById("btnBingo");
const btnResetar = document.getElementById("btnResetar");

const divNumeroSorteado = document.getElementById("divNumeroSorteado");
const resultado = document.getElementById("resultado");
const nomeYasmin = document.getElementById("textoNome");
const listaNumerosSorteadosElemento = document.getElementById('listaNumerosSorteados');

/* Botão Sortear */
btnSortear.addEventListener("click", () => {
    if (numerosSorteados.size === 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    let numero;
    let letra;

    do {
        numero = Math.floor(Math.random() * 75) + 1;

        if (numero <= 15) {
            letra = "B";
        }
        else if (numero > 15 && numero <= 30) {
            letra = "I";
        }
        else if (numero > 30 && numero <= 45) {
            letra = "N";
        }
        else if (numero > 45 && numero <= 60) {
            letra = "G";
        }
        else {
            letra = "O";
        }
    } 
    while (numerosSorteados.has(numero));

    numerosSorteados.add(numero);

    const td = document.getElementById(numero.toString());
    td.style.backgroundColor = "rgb(113, 0, 148)";
    td.style.color = "white";
    td.style.transition = "background-color 0.3s ease";

    divNumeroSorteado.style.display = "block";
    resultado.textContent = letra + " - " + numero;
    nomeYasmin.style.display = "none";

    const spanNumero = document.createElement("span");
    spanNumero.textContent = letra + " - " + numero;
    spanNumero.classList.add("numeroSorteado");
    listaNumerosSorteadosElemento.appendChild(spanNumero);
    spanNumero.style.width = "65px";
    spanNumero.style.paddingLeft = "5px";
    spanNumero.style.paddingRight = "5px";
    spanNumero.style.fontSize = "18px";
    spanNumero.style.color = "#000000"
    document.getElementById("historicoSorteadosContainer").style.display = "block";
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
    listaNumerosSorteadosElemento.innerHTML = "";
    document.getElementById("historicoSorteadosContainer").style.display = "none";

    for (let i = 1; i <= 75; i++) {
        const td = document.getElementById(i.toString());
        td.style.backgroundColor = "";
        td.style.color = "";
    }

    divNumeroSorteado.style.display = "none";
    nomeYasmin.style.display = "block";
});

/* Botão Resetar */
btnResetar.addEventListener("click", () => {
    numerosSorteados.clear();
    numerosSorteados.clear();
    listaNumerosSorteadosElemento.innerHTML = "";
    document.getElementById("historicoSorteadosContainer").style.display = "none";
    
    for (let i = 1; i <= 75; i++) {
        const td = document.getElementById(i.toString());
        td.style.backgroundColor = "";
        td.style.color = "";
    }
    divNumeroSorteado.style.display = "none";
    nomeYasmin.style.display = "block";
});
