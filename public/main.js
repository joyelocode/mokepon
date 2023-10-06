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
const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

let jugadorId = null;
let enemigoId = null;
let mokepones = [];
let mokeponesEnemigos = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonAgua;
let botonTierra;
let botonFuego;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext('2d');
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = './assets/img/mokemap.png';
let alturaQueBuscamos 
let anchoDelMapa = window.innerWidth - 20;
const anchaMaximoDelMapa = 350;

if (anchoDelMapa > anchaMaximoDelMapa) {
    anchoDelMapa = anchaMaximoDelMapa - 20;
};

alturaQueBuscamos = anchoDelMapa * 600 / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id;
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.ancho = 40;
        this.alto = 40;
        this.x = aleatorio(0, mapa.width - this.ancho);
        this.y = aleatorio(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa;
        this.velocidadX = 0;
        this.velocidadY = 0;
    };

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        );
    };
};

let hipodoge = new Mokepon('Hipodoge', './assets/img/mokepons_mokepon_hipodoge_attack.png', 5, './assets/img/hipodoge.png');

let capipepo = new Mokepon('Capipepo', './assets/img/mokepons_mokepon_capipepo_attack.png', 5, './assets/img/capipepo.png');

let ratigueya = new Mokepon('Ratigueya', './assets/img/mokepons_mokepon_ratigueya_attack.png', 5, './assets/img/ratigueya.png');

const HIPODOGE_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
];

hipodoge.ataques.push(...HIPODOGE_ATAQUES);

const CAPIPEPO_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
];

capipepo.ataques.push(...CAPIPEPO_ATAQUES);

const RATIGUEYA_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },

];

ratigueya.ataques.push(...RATIGUEYA_ATAQUES);

mokepones.push(hipodoge, capipepo, ratigueya)


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none';

    sectionVerMapa.style.display = 'none';

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

    unirseAlJuego();
};

function unirseAlJuego() {
    fetch('http://172.19.142.148:8080/unirse')
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta);
                        jugadorId = respuesta;
                    });
            };
        });
};

function seleccionarMascotaJugador() {

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
        return;
    };

    sectionSeleccionarMascota.style.display = 'none';

    seleccionarMokepon(mascotaJugador);

    
    extraerAtaques(mascotaJugador);

    sectionVerMapa.style.display = 'flex';

    iniciarMapa();
};

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://172.19.142.148:8080/mokepon/${jugadorId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    });
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
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    });

    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botonFuego = document.getElementById('boton-fuego');
    botones = document.querySelectorAll('.BAtaque');
};

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if (e.target.textContent === '🌱') {
                ataqueJugador.push('TIERRA');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else {
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            };
            if (ataqueJugador.length === 5) {
                enviarAtaques();
            };
        });
    });
    
};

function enviarAtaques() {
    fetch(`http://172.19.142.148:8080/mokepon/${jugadorId}/ataques`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })

    });

    intervalo = setInterval(obtenerAtaques, 50);
};

function obtenerAtaques() {
    fetch(`http://172.19.142.148:8080/mokepon/${enemigoId}/ataques`)
       .then(function (res) {
           if (res.ok) {
               res.json()
                   .then(function ({ ataques }) {
                       if (ataques.length === 5) {
                           ataqueEnemigo = ataques;
                           combate();
                       };
                   });
           };
       });
};

function seleccionarMascotaEnemigo(enemigo) {
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
   
    secuenciaAtaque();
};

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1);

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('AGUA');
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('TIERRA');
    } else {
        ataqueEnemigo.push('FUEGO');
    };
    console.log(ataqueEnemigo);
    iniciarPelea();
};

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate();
    }
};

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
    clearInterval(intervalo);
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);
            crearMensaje("EMPATE");
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    
    revisarVictorias();
};

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('EL RESULTADO FUE, EMPATE');
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('FELICITACIONES GANASTE!');
    } else {
        crearMensajeFinal('LO SIENTO PERDISTE');
    };
};

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
};

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal;
    
    sectionReiniciarJuego.style.display = 'block';
};

function reiniciarJuego() {
    location.reload();
};

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function pintarCanvas() {

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    );
    
    mascotaJugadorObjeto.pintarMokepon();

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon();
        revisarColision(mokepon);
    });
};

function enviarPosicion(x, y) {
    fetch(`http://172.19.142.148:8080/mokepon/${jugadorId}/posicion`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x,
            y
        })
    })
     .then(function (res) {
         if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos);
                    mokeponesEnemigos = enemigos.map(function (enemigo) {
                        let mokeponEnemigo = null;
                        const mokeponNombre = enemigo.mokepon.nombre || '';
                        if (mokeponNombre === 'Hipodoge') {
                            mokeponEnemigo= new Mokepon('Hipodoge', './assets/img/mokepons_mokepon_hipodoge_attack.png', 5, './assets/img/hipodoge.png', enemigo.id);
                        } else if (mokeponNombre === 'Capipepo') {
                            mokeponEnemigo = new Mokepon('Capipepo', './assets/img/mokepons_mokepon_capipepo_attack.png', 5, './assets/img/capipepo.png', enemigo.id);
                        } else if (mokeponNombre === 'Ratigueya') {
                            mokeponEnemigo = new Mokepon('Ratigueya', '/mokepon/public/assets/img/mokepons_mokepon_ratigueya_attack.png', 5, './assets/img/ratigueya.png', enemigo.id);
                        };

                        mokeponEnemigo.x = enemigo.x;

                        mokeponEnemigo.y = enemigo.y;

                        return mokeponEnemigo;

                    });    
                });
        };
    });
};

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5;
};
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5;
};
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5;
};
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5;
};
function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0;
    mascotaJugadorObjeto.velocidadY = 0;
};
function SePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba();
            break;
        case 'ArrowDown':
            moverAbajo();
            break;
        case 'ArrowLeft':
            moverIzquierda();
            break;
        case 'ArrowRight':
            moverDerecha();
            break;
        default:
            break;
    };
};

function iniciarMapa() {

    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);

    console.log(mascotaJugadorObjeto, mascotaJugador);

    intervalo = setInterval(pintarCanvas, 50);
    
    window.addEventListener('keydown', SePresionoUnaTecla);

    window.addEventListener('keyup', detenerMovimiento);
};

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i];
        };  
    };
};

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y;
    const abajoEnemigo = enemigo.y + enemigo.alto;
    const derechaEnemigo = enemigo.x + enemigo.ancho;
    const izquierdaEnemigo = enemigo.x;

    const arribaMascota = mascotaJugadorObjeto.y;
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
    const izquierdaMascota = mascotaJugadorObjeto.x;

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return;
    };

    detenerMovimiento();
    clearInterval(intervalo);
    console.log('Se detecto una colision');

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex';
    sectionVerMapa.style.display = 'none';
    seleccionarMascotaEnemigo(enemigo);
    
};

window.addEventListener('load', iniciarJuego);


