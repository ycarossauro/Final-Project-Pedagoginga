// Seleciona todas as células do tabuleiro (9 divs com class "cell")
const cells = document.querySelectorAll(".cell");

// Seleciona a área de status (quem joga, vitória ou empate)
const statusText = document.getElementById("status");

// Seleciona o botão de reiniciar
const restartBtn = document.getElementById("restart");

// Define o jogador inicial
let currentPlayer = "X";

// Array que representa o tabuleiro (9 posições)
let board = ["", "", "", "", "", "", "", "", ""];

// Variável para controlar se o jogo ainda está em andamento
let gameActive = true;

// Todas as combinações possíveis de vitória (linhas, colunas e diagonais)
const winningConditions = [
    [0, 1, 2], // linha superior
    [3, 4, 5], // linha do meio
    [6, 7, 8], // linha inferior
    [0, 3, 6], // coluna esquerda
    [1, 4, 7], // coluna do meio
    [2, 5, 8], // coluna direita
    [0, 4, 8], // diagonal principal
    [2, 4, 6]  // diagonal secundária
];

// Inicializa o jogo: adiciona eventos de clique nas células e no botão
function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `Vez do jogador ${currentPlayer}`;
}

// Lida com o clique em uma célula
function handleCellClick(event) {
    const cell = event.target; // célula clicada
    const index = cell.getAttribute("data-index"); // índice da célula (0 a 8)

    // Se já tiver valor ou jogo acabou, ignora o clique
    if (board[index] !== "" || !gameActive) return;

    // Atualiza a célula com o jogador atual
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    // Aplica cor de fundo com base no jogador
    if (currentPlayer === "X") {
        cell.classList.add("x"); // fundo azul
    } else {
        cell.classList.add("o"); // fundo vermelho
    }

    // Verifica se alguém ganhou ou deu empate
    checkWinner();
}

// Verifica se houve vitória ou empate
function checkWinner() {
    let roundWon = false;

    // Percorre todas as condições de vitória
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    // Se alguém venceu
    if (roundWon) {
        statusText.textContent = `Jogador ${currentPlayer} venceu!`;
        gameActive = false;
        return;
    }

    // Se todas as células estão preenchidas e ninguém ganhou → empate
    if (!board.includes("")) {
        statusText.textContent = "Empate!";
        gameActive = false;
        return;
    }

    // Se o jogo continua, troca o jogador
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Vez do jogador ${currentPlayer}`;
}

// Reinicia o jogo
function restartGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    statusText.textContent = `Vez do jogador ${currentPlayer}`;

    // Limpa as células (texto e classes de cor)
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("x");
        cell.classList.remove("o");
    });
}

// Inicia o jogo ao carregar o script
initializeGame();
