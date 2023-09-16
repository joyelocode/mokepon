// Declaración de variables para almacenar los ataques del jugador y del enemigo.
let ataqueJugador;
let ataqueEnemigo;

// Esta función se llama cuando se carga la ventana y configura el juego.
function iniciarJuego() {
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
};

// Esta función se llama cuando el jugador hace clic en el botón de mascota.
function seleccionarMascotaJugador() {
    // Obtiene los elementos de entrada de radio que representan las opciones de mascota del jugador.
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    
    // Obtiene el elemento de la página donde se mostrará la mascota seleccionada por el jugador.
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    // Comprueba cuál de las opciones de mascota ha sido seleccionada por el jugador y actualiza el texto en 'spanMascotaJugador' en consecuencia.
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        // Si ninguna mascota ha sido seleccionada, muestra una alerta pidiendo al jugador que seleccione una mascota.
        alert('Selecciona una mascota');
    };

    // Llama a la función 'seleccionarMascotaEnemigo' para determinar la mascota del enemigo.
    seleccionarMascotaEnemigo();
};

// Esta función selecciona aleatoriamente la mascota del enemigo.
function seleccionarMascotaEnemigo() {
    // Genera un número aleatorio entre 1 y 3 para determinar la mascota del enemigo.
    let mascotaAleatorio = aleatorio(1, 3);
    
    // Obtiene el elemento de la página donde se mostrará la mascota del enemigo.
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


// Las siguientes tres funciones se llaman cuando el jugador hace clic en los botones de tipo de ataque.
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
}

// Esta función determina el resultado del combate y muestra un mensaje.
function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE");
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE");
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE");
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE");
    } else {
        crearMensaje("PERDISTE");
    };
};

// Esta función crea un mensaje con el resultado del combate y lo muestra en la página.
function crearMensaje(resultadoCombate) {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultadoCombate + ' 🎉🎉🎉';

    sectionMensajes.appendChild(parrafo);
};

// Esta función genera un número aleatorio entre 'min' y 'max'.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Agrega un evento de escucha para iniciar el juego cuando se carga la ventana.
window.addEventListener('load', iniciarJuego);

