import readline from 'readline';
const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";

const LARGURA = 30; // X
const ALTURA = 15; // Y
var velocidade = 150;

var cobraX = [10, 9, 8, 7];
var cobraY = [7, 7, 7, 7];

var comidaX = Math.floor(Math.random() * LARGURA);
var comidaY = Math.floor(Math.random() * ALTURA);

var pontos = 0;
var direcao = "d";
var gameOver = false;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdout.write("\x1b[?25l");
process.stdin.on("keypress", (str, key) => {
  if (key.name === "w" && direcao !== "w") direcao = "w";
  if (key.name === "s" && direcao !== "s") direcao = "s";
  if (key.name === "a" && direcao !== "a") direcao = "a";
  if (key.name === "d" && direcao !== "d") direcao = "d";

  if (key.name === "q") {
    gameOver = true;
  }
})


function desenhar() {
  var tela = "";
  tela += "=== JOGO DA COBRINHA ===\n";
  tela += "W A S D = MOVER | Q = sair\n";
  tela += "Pontos " + pontos + "\n\n";

  for (var y = -1; y <= ALTURA; y++) {
    var linha = "";

    for (var x = -1; x <= LARGURA; x++) {
      if (x === -1 || x === LARGURA || y === -1 || y === ALTURA) {
        linha += PAREDE;
      } else if (x === comidaX && y === comidaY) {
        linha += COMIDA;
      } else {
        var desenhouCobrinha = false;

        for (var i = 0; i < cobraX.length; i++) {
          if (cobraX[i] === x && cobraY[i] === y) {
            linha += (i === 0) ? CABECA : CORPO;
            desenhouCobrinha = true;
          }
        }

        if (desenhouCobrinha === false) {
          linha += VAZIO
        }
      }
    }
    tela += linha + "\n"
  }

  process.stdout.write("\x1b[H" + tela);
}

function sortearComida() {
  var posicaoValida = false;

  while (posicaoValida === false) {
    comidaX = Math.floor(Math.random() * LARGURA);
    comidaY = Math.floor(Math.random() * ALTURA);

    posicaoValida = true;
    for (var i = 0; i < cobraX.length; i++) {
      if (cobraX[i] === comidaX && cobraY[i] === comidaY) {
        posicaoValida = false;
      }
    }
  }
}

function moverCobrinha() {
  var novaPosicaoX = cobraX[0];
  var novaPosicaoY = cobraY[0];

  switch (direcao) {
    case "w":
      novaPosicaoY--;
      break;
    case "s":
      novaPosicaoY++;
      break;
    case "a":
      novaPosicaoX--;
      break;
    case "d":
      novaPosicaoX++;
      break;
  }

  // novaPosicaoX = (novaPosicaoX + LARGURA) % LARGURA;
  // novaPosicaoY = (novaPosicaoY + ALTURA) % ALTURA;

  if (novaPosicaoX < 0 || novaPosicaoX >= LARGURA || novaPosicaoY < 0 || novaPosicaoY >= ALTURA) {
    gameOver = true;
    return;
  }

  for (var i = 0; i < cobraX.length; i++) {
    if (novaPosicaoX === cobraX[i] && novaPosicaoY === cobraY[i]) {
      gameOver = true;
      return;
    }
  }

  cobraX.unshift(novaPosicaoX);
  cobraY.unshift(novaPosicaoY);

  if (novaPosicaoX === comidaX && novaPosicaoY === comidaY) {
    pontos += 10;
    sortearComida();
  } else {
    cobraX.pop();
    cobraY.pop();
  }
}

var jogo = setInterval(() => {
  if (gameOver === true) {
    clearInterval(jogo);
    process.stdout.write("\x1b[?25h")
    console.log("\n=== SE FUDEU ===")
    console.log("Pontuação final: " + pontos);
    process.exit();
  }

  moverCobrinha();
  desenhar();
}, velocidade);