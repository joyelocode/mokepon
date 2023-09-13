// 1 es piedra, 2 es papel, 3 es tijera

// Declaración de las variables 'jugador' y 'pc' e inicialización de 'jugador' a 0 y 'pc' a 2.

let jugador = 0; 
// Variable para almacenar la elección del jugador
let pc = 2; 
// Variable para almacenar la elección de la computadora (predefinida a 2, que representa papel)

// Se solicita al usuario que ingrese su elección y se almacena en la variable 'jugador'.
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

// Comienza la comprobación de la elección del jugador.
if (jugador == 1) {
    // Si el jugador eligió 1, se muestra un mensaje que dice que eligió piedra.
    alert("Elegiste 🥌");
} else if (jugador == 2) {
    // Si el jugador eligió 2, se muestra un mensaje que dice que eligió papel.
    alert("Elegiste 📜");
} else if (jugador == 3) {
    // Si el jugador eligió 3, se muestra un mensaje que dice que eligió tijera.
    alert("Elegiste ✂");
} else {
    // Si el jugador eligió cualquier otro número diferente de 1, 2 o 3, se muestra un mensaje que dice que perdió.
    alert("¡Elegiste Perder!");
}

// Comienza la comprobación de la elección del pc.
if (pc == 1) {
    // Si el pc eligió 1, se muestra un mensaje que dice que eligió piedra.
    alert("El Pc eleigió 🥌");
} else if (pc == 2) {
    // Si el pc eligió 2, se muestra un mensaje que dice que eligió papel.
    alert("El Pc eligió📜");
} else if (pc == 3) {
    // Si el pc eligió 3, se muestra un mensaje que dice que eligió tijera.
    alert("El Pc eligió ✂");
} else {
    // Si el pc eligió cualquier otro número diferente de 1, 2 o 3, se muestra un mensaje que dice que perdió.
    alert("¡El Pc eligió Perder!");
}

// Comienza el combate se verifica si la elección del jugador (jugador) es igual a la elección de la computadora (pc).
if (pc == jugador) {
    // Si son iguales, se muestra un mensaje de empate.
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

