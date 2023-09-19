const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciarJuego = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedor-ataques');

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let ataquesMokepon;
let botonAgua;
let botonTierra;
let botonFuego;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    };
};

let hipodoge = new Mokepon('Hipodoge', './src/assets/img/mokepons_mokepon_hipodoge_attack.png', 5);

let capipepo = new Mokepon('Capipepo', './src/assets/img/mokepons_mokepon_capipepo_attack.png', 5);

let ratigueya = new Mokepon('Ratigueya', './src/assets/img/mokepons_mokepon_ratigueya_attack.png', 5);

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
);

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
);

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none';

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" id=${mokepon.nombre} name="mascota" />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');

    });

    sectionReiniciarJuego.style.display = 'none';
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);


    botonReiniciar.addEventListener('click', reiniciarJuego);
};

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none';

    sectionSeleccionarAtaque.style.display = 'flex';
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
    } else {
        alert('Selecciona una mascota');
    };

    extraerAtaques(mascotaJugador);
    seleccionarMascotaEnemigo();
};

function extraerAtaques(mascotaJugador) {
    let ataques;
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
            
        };
        
    };

    mostrarAtaques(ataques);
};

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    });

    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botonFuego = document.getElementById('boton-fuego');

    botonAgua.addEventListener('click', ataqueAgua);
    
    botonTierra.addEventListener('click', ataqueTierra);
    
    botonFuego.addEventListener('click', ataqueFuego);
};

function seleccionarMascotaEnemigo() {
    
    let mascotaAleatorio = aleatorio(0, mokepones.length -1);
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
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


