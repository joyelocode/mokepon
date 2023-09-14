// 1 es piedra, 2 es papel, 3 es tijera

// Definición de la función 'aleatorio' que genera un número aleatorio entre 'min' y 'max'.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Definición de la función 'eleccion' que toma la elección del jugador como argumento y devuelve un mensaje explicando la elección.
function eleccion(jugada) {
    let resultado = "";
       
    // Comienza la comprobación de la elección del jugador.
    if (jugada == 1) {
        // Si el jugador eligió 1, se asigna el mensaje "Piedra 🥌" a la variable 'resultado'.
        resultado = "Piedra 🥌";
    } else if (jugada == 2) {
        // Si el jugador eligió 2, se asigna el mensaje "Papel 📜" a la variable 'resultado'.
        resultado = "Papel 📜";
    } else if (jugada == 3) {
        // Si el jugador eligió 3, se asigna el mensaje "Tijera ✂" a la variable 'resultado'.
        resultado = "Tijera ✂";
    } else {
        // Si el jugador eligió cualquier otro número diferente de 1, 2 o 3, se asigna el mensaje "¡MAL ELEGIDO!" a la variable 'resultado'.
        resultado = "¡MAL ELEGIDO!";
    }
    
    // Se devuelve el valor almacenado en la variable 'resultado'.
    return resultado;
} 

// Inicialización de las variables 'jugador' y 'pc' con un valor inicial de 0 y una elección aleatoria de la computadora, respectivamente.
let jugador = 0;
let pc = aleatorio(1, 3);

// Se solicita al usuario que ingrese su elección y se almacena en la variable 'jugador'.
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

// Se muestra un mensaje que indica la elección aleatoria de la computadora y la elección del jugador usando la función 'eleccion'.
alert("PC elige: " + eleccion(pc));
alert("Tu eliges: " + eleccion(jugador));

// Comienza la comprobación de quién ganó el juego.
if (pc == jugador) {
    // Si las elecciones son iguales, se muestra un mensaje de empate.
    alert("EMPATE");
} else if (jugador == 1 && pc == 3) {
    // Si el jugador eligió piedra (1) y la computadora eligió tijera (3), el jugador gana.
    alert("GANASTE");
} else if (jugador == 2 && pc == 1) {
    // Si el jugador eligió papel (2) y la computadora eligió piedra (1), el jugador gana.
    alert("GANASTE");
} else if (jugador == 3 && pc == 2) {
    // Si el jugador eligió tijera (3) y la computadora eligió papel (2), el jugador gana.
    alert("GANASTE");
} else {
    // Si ninguna de las condiciones anteriores se cumple, significa que el jugador perdió.
    alert("PERDISTE");
}
