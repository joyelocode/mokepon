// 1 es piedra, 2 es papel, 3 es tijera
// Declaración de las variables 'jugador' y 'pc' e inicialización de 'jugador' a 0 y 'pc' a 2.
let jugador = 0; // Variable para almacenar la elección del jugador
let pc = 2;      // Variable para almacenar la elección de la computadora (predefinida a 2, que representa papel)

// Se solicita al usuario que ingrese su elección y se almacena en la variable 'jugador'.
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

// Comienza la comprobación de la elección del jugador.
if (jugador == 1) {
    // Si el jugador eligió 1, se muestra un mensaje que dice que eligió piedra.
    alert("Elegiste piedra");
} else if (jugador == 2) {
    // Si el jugador eligió 2, se muestra un mensaje que dice que eligió papel.
    alert("Elegiste papel");
} else if (jugador == 3) {
    // Si el jugador eligió 3, se muestra un mensaje que dice que eligió tijera.
    alert("Elegiste tijera");
} else {
    // Si el jugador eligió cualquier otro número diferente de 1, 2 o 3, se muestra un mensaje que dice que perdió.
    alert("Elegiste Perder!");
}
