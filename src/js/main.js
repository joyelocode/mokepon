// Declaración de variables para almacenar los ataques del jugador y del enemigo, así como las vidas del jugador y del enemigo.
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

// Esta función se llama cuando se carga la ventana y configura el juego.
function iniciarJuego() {
    // Oculta la sección de selección de ataque y la sección de reinicio del juego al inicio.
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciarJuego = document.getElementById('reiniciar');
    sectionReiniciarJuego.style.display = 'none';

    // Obtiene el elemento del botón de mascota del jugador por su ID.
    let botonMascotaJugador = document.getElementById('boton-mascota');
    
    // Agrega un evento de escucha al botón para que llame a la función 'seleccionarMascotaJugador' cuando se hace clic.
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    // Obtiene los botones de tipo de ataque del jugador y agrega eventos de escucha para cada uno.
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);

    // Obtiene el botón de reinicio del juego y agrega un evento de escucha.
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
};

// Esta función se llama cuando el jugador hace clic en el botón de mascota.
function seleccionarMascotaJugador() {
    // Oculta la sección de selección de mascota y muestra la sección de selección de ataque.
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';
    
    // Obtiene los elementos de entrada de radio que representan las opciones de mascota del jugador.
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    // Comprueba cuál de las opciones de mascota ha sido seleccionada por el jugador y actualiza el texto en 'spanMascotaJugador' en consecuencia.
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota');
    };

    // Llama a la función 'seleccionarMascotaEnemigo' para determinar la mascota del enemigo.
    seleccionarMascotaEnemigo();
};

// Esta función selecciona aleatoriamente la mascota del enemigo.
function seleccionarMascotaEnemigo() {
    // Genera un número aleatorio entre 1 y 3 para determinar la mascota del enemigo.
    let mascotaAleatorio = aleatorio(1, 3);
    
    // Obtiene el elemento del span donde se mostrará la mascota del enemigo.
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    // Asigna la mascota enemiga basada en el número aleatorio generado.
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    };
};

// Estas tres funciones se llaman cuando el jugador hace clic en los botones de tipo de ataque.
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
};

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
};

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
};

// Esta función selecciona aleatoriamente el ataque del enemigo.
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'AGUA';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'TIERRA';
    } else {
        ataqueEnemigo = 'FUEGO';
    };

    // Llama a la función 'combate' para determinar el resultado del combate.
    combate();
};

// Esta función determina el resultado del combate y actualiza las vidas de los jugadores.
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE");
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    };

    // Llama a la función 'revisarVidas' para comprobar si el juego ha terminado.
    revisarVidas();
};

// Esta función verifica si el juego ha terminado al comprobar las vidas del jugador y del enemigo.
function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO PERDISTE, ☹☹☹');
    } else if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES GANASTE! 🎉🎉🎉');
    };
};

// Esta función muestra un mensaje en la sección de mensajes.
function crearMensaje(resultadoCombate) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultadoCombate + ' 🎉🎉🎉';

    sectionMensajes.appendChild(parrafo);
};

// Esta función muestra el mensaje final del juego y deshabilita los botones de ataque.
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;

    sectionMensajes.appendChild(parrafo);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;

    let sectionReiniciarJuego = document.getElementById('reiniciar');
    sectionReiniciarJuego.style.display = 'block';
};

// Esta función reinicia el juego al recargar la página.
function reiniciarJuego() {
    location.reload();
};

// Esta función genera un número aleatorio entre 'min' y 'max'.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Agrega un evento de escucha para iniciar el juego cuando la ventana se carga.
window.addEventListener('load', iniciarJuego);


