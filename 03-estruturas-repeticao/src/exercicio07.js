var contador = 1;

while (contador <= 10) {
    if (contador <= 5 || contador >= 9) {
        console.log(contador)
    }

    contador++;
}

while (contador <= 10) {
    console.log(contador)
    contador++;

    if (contador === 6) {
        contador = 9;
    }
}