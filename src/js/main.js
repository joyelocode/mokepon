const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciarJuego = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonFuego = document.getElementById('boton-fuego');
const botonReiniciar = document.getElementById('boton-reiniciar');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
    };
};

let hipodoge = new Mokepon('Hipodoge', './src/assets/img/mokepons_mokepon_hipodoge_attack.png', 5);

let capipepo = new Mokepon('Capipepo', './src/assets/img/mokepons_mokepon_capipepo_attack.png', 5);

let ratigueya = new Mokepon('Ratigueya', './src/assets/img/mokepons_mokepon_ratigueya_attack.png', 5);

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none';

    sectionReiniciarJuego.style.display = 'none';
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    
    botonAgua.addEventListener('click', ataqueAgua);
    
    botonTierra.addEventListener('click', ataqueTierra);
    
    botonFuego.addEventListener('click', ataqueFuego);

    botonReiniciar.addEventListener('click', reiniciarJuego);
};

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none';

    sectionSeleccionarAtaque.style.display = 'flex';
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota');
    };

    seleccionarMascotaEnemigo();
};

function seleccionarMascotaEnemigo() {
    
    let mascotaAleatorio = aleatorio(1, 3);
    
    
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    };
};

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


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'AGUA';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'TIERRA';
    } else {
        ataqueEnemigo = 'FUEGO';
    };

    combate();
};

function combate() {
    
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

    revisarVidas();
};

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO PERDISTE');
    } else if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES GANASTE!');
    };
};

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
};

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal;

    
    botonAgua.disabled = true;
    
    botonTierra.disabled = true;
    
    botonFuego.disabled = true;

    
    sectionReiniciarJuego.style.display = 'block';
};

function reiniciarJuego() {
    location.reload();
};

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

window.addEventListener('load', iniciarJuego);


