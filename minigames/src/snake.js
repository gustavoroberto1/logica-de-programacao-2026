const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";

const LARGURA = 30; // X
const ALTURA = 15; // Y

var cobraX = [10, 9, 8, 7];
var cobraY = [7, 7, 7, 7];

var comidaX = Math.floor(Math.random() * LARGURA);
var comidaY = Math.floor(Math.random() * ALTURA);

var pontos = 0;
var direcao = "d";
var gameOver = false;

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

desenhar();