import readline from "readline";

const ALTURA = 15;
const LARGURA = 30;

const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";

let cobraX = [10];
let cobraY = [7];

let comidaX = Math.floor(Math.random() * LARGURA);
let comidaY = Math.floor(Math.random() * ALTURA);

let direcao = "d";
let pontos = 0;
let gameOver = false;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdout.write("\x1b[?25l");

process.stdin.on("keypress", (str, key) => {
 if (key.name === "w" && direcao !== "s") direcao = "w";
 if (key.name === "s" && direcao !== "w") direcao = "s";
 if (key.name === "a" && direcao !== "d") direcao = "a";
 if (key.name === "d" && direcao !== "a") direcao = "d";

 if (key.name === "q" || key.name === "escape") {
   gameOver = true;
 }
});

function sortearComida() {
 let posicaoValida = false;

 while (!posicaoValida) {
   comidaX = Math.floor(Math.random() * LARGURA);
   comidaY = Math.floor(Math.random() * ALTURA);

   posicaoValida = true;

   for (let i = 0; i < cobraX.length; i++) {
     if (cobraX[i] === comidaX && cobraY[i] === comidaY) {
       posicaoValida = false;
     }
   }
 }
}

function desenhar() {
 let tela = "";

 tela += "=== JOGO DA COBRINHA ===\n";
 tela += "W A S D = mover | Q = sair\n";
 tela += `Pontos: ${pontos}\n\n`;

 for (let y = -1; y <= ALTURA; y++) {
   let linha = "";

   for (let x = -1; x <= LARGURA; x++) {
     let desenhou = false;

     if (x === -1 || x === LARGURA || y === -1 || y === ALTURA) {
       linha += PAREDE;
       desenhou = true;
     }

     if (!desenhou && x === comidaX && y === comidaY) {
       linha += COMIDA;
       desenhou = true;
     }

     for (let i = 0; i < cobraX.length; i++) {
       if (!desenhou && cobraX[i] === x && cobraY[i] === y) {
         if (i === 0) {
           linha += CABECA;
         } else {
           linha += CORPO;
         }

         desenhou = true;
       }
     }

     if (!desenhou) {
       linha += VAZIO;
     }
   }

   tela += linha + "\n";
 }

 process.stdout.write("\x1b[H" + tela);
}

function moverCobra() {
 let novaCabecaX = cobraX[0];
 let novaCabecaY = cobraY[0];

 switch (direcao) {
   case "w":
     novaCabecaY--;
     break;
   case "s":
     novaCabecaY++;
     break;
   case "a":
     novaCabecaX--;
     break;
   case "d":
     novaCabecaX++;
     break;
 }

 if (
   novaCabecaX < 0 ||
   novaCabecaX >= LARGURA ||
   novaCabecaY < 0 ||
   novaCabecaY >= ALTURA
 ) {
   gameOver = true;
   return;
 }

 for (let i = 0; i < cobraX.length; i++) {
   if (novaCabecaX === cobraX[i] && novaCabecaY === cobraY[i]) {
     gameOver = true;
     return;
   }
 }

 cobraX.unshift(novaCabecaX);
 cobraY.unshift(novaCabecaY);

 if (novaCabecaX === comidaX && novaCabecaY === comidaY) {
   pontos++;
   sortearComida();
 } else {
   cobraX.pop();
   cobraY.pop();
 }
}

sortearComida();

const jogo = setInterval(() => {
 if (gameOver) {
   clearInterval(jogo);
   process.stdout.write("\x1b[?25h");
   console.log("\n=== GAME OVER ===");
   console.log("Pontuação final:", pontos);
   process.exit();
 }

 moverCobra();
 desenhar();
}, 150);

