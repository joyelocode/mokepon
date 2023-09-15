// Esta función se llama cuando se carga la ventana y configura el juego.
function iniciarJuego() {
    // Obtiene el elemento del botón de mascota del jugador por su ID.
    let botonMascotaJugador = document.getElementById('boton-mascota');
    
    // Agrega un evento de escucha al botón para que llame a la función 'seleccionarMascotaJugador' cuando se hace clic.
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

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
    }

    // Llama a la función 'seleccionarMascotaEnemigo' para determinar la mascota del enemigo.
    seleccionarMascotaEnemigo();
}

// Esta función selecciona aleatoriamente una mascota para el enemigo.
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
    }
}

// Esta función genera un número aleatorio entre 'min' y 'max'.
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Agrega un evento de escucha para iniciar el juego cuando se carga la ventana.
window.addEventListener('load', iniciarJuego);
