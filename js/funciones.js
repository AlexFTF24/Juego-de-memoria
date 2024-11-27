//variables globales
const d = document;
let imgN1 = [
    {nombre: "Imagen1", url: "img/Goku.jpeg"},
    {nombre: "Imagen2", url: "img/Vegeta.jpeg"},
    {nombre: "Imagen3", url: "img/Goten.jpeg"},
    {nombre: "Imagen4", url: "img/Trunks.jpeg"},
    {nombre: "Imagen5", url: "img/Broly.jpeg"},
    {nombre: "Imagen6", url: "img/Giren.jpeg"},
    {nombre: "Imagen7", url: "img/Gohan.jpeg"},
    {nombre: "Imagen8", url: "img/Golden Freezer.jpeg"},
    {nombre: "Imagen1", url: "img/Goku.jpeg"},
    {nombre: "Imagen2", url: "img/Vegeta.jpeg"},
    {nombre: "Imagen3", url: "img/Goten.jpeg"},
    {nombre: "Imagen4", url: "img/Trunks.jpeg"},
    {nombre: "Imagen5", url: "img/Broly.jpeg"},
    {nombre: "Imagen6", url: "img/Giren.jpeg"},
    {nombre: "Imagen7", url: "img/Gohan.jpeg"},
    {nombre: "Imagen8", url: "img/Golden Freezer.jpeg"},
];
let imgN2 = [
    {nombre: "Goku", url: "img/Goku.jpeg"},
    {nombre: "Vegeta", url: "img/Vegeta.jpeg"},
    {nombre: "Goten", url: "img/Goten.jpeg"},
    {nombre: "Trunks", url: "img/Trunks.jpeg"},
    {nombre: "Broly", url: "img/Broly.jpeg"},
    {nombre: "Giren", url: "img/Giren.jpeg"},
    {nombre: "Gohan", url: "img/Gohan.jpeg"},
    {nombre: "Golden Freezer", url: "img/Golden Freezer.jpeg"},
    {nombre: "Goku", url: "img/Goku.jpeg"},
    {nombre: "Vegeta", url: "img/Vegeta.jpeg"},
    {nombre: "Goten", url: "img/Goten.jpeg"},
    {nombre: "Trunks", url: "img/Trunks.jpeg"},
    {nombre: "Broly", url: "img/Broly.jpeg"},
    {nombre: "Giren", url: "img/Giren.jpeg"},
    {nombre: "Gohan", url: "img/Gohan.jpeg"},
    {nombre: "Golden Freezer", url: "img/Golden Freezer.jpeg"},
    {nombre: "Cell", url: "img/Cell.jpeg"},
    {nombre: "Cell", url: "img/Cell.jpeg"},
    {nombre: "Paikujan", url: "img/Paikuhan.png"},
    {nombre: "Paikujan", url: "img/Paikuhan.png"},
];
let imgN3 = [
    {nombre: "Goku", url: "img/Goku.jpeg"},
    {nombre: "Vegeta", url: "img/Vegeta.jpeg"},
    {nombre: "Goten", url: "img/Goten.jpeg"},
    {nombre: "Trunks", url: "img/Trunks.jpeg"},
    {nombre: "Broly", url: "img/Broly.jpeg"},
    {nombre: "Giren", url: "img/Giren.jpeg"},
    {nombre: "Gohan", url: "img/Gohan.jpeg"},
    {nombre: "Golden Freezer", url: "img/Golden Freezer.jpeg"},
    {nombre: "Goku", url: "img/Goku.jpeg"},
    {nombre: "Vegeta", url: "img/Vegeta.jpeg"},
    {nombre: "Goten", url: "img/Goten.jpeg"},
    {nombre: "Trunks", url: "img/Trunks.jpeg"},
    {nombre: "Broly", url: "img/Broly.jpeg"},
    {nombre: "Giren", url: "img/Giren.jpeg"},
    {nombre: "Gohan", url: "img/Gohan.jpeg"},
    {nombre: "Golden Freezer", url: "img/Golden Freezer.jpeg"},
    {nombre: "Cell", url: "img/Cell.jpeg"},
    {nombre: "Cell", url: "img/Cell.jpeg"},
    {nombre: "Paikujan", url: "img/Paikujan.png"},
    {nombre: "Paikujan", url: "img/Paikujan.png"},
    {nombre: "Paikujan", url: "img/Magin Boo.jpg"},
    {nombre: "Paikujan", url: "img/Magin Boo.jpg"},
    {nombre: "Paikujan", url: "img/Radits.jpeg"},
    {nombre: "Paikujan", url: "img/Radits.jpeg"},
];
let nombreImg = []; //guardar nombres
let posImg = []; //guardar posiciones
let tablero = d.querySelector(".tablero"); //tablero del juego
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempoTranscurrido;
let btn_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./sonidos/Seleccionar.mp3"); //---------
let sonidoAdivinar = new Audio("./sonidos/Adivinar.mp3"); //---------
let sonidoFallar = new Audio("./sonidos/Fallo.mp3"); //---------
let sonidoPerdio = new Audio("./sonidos/Perdio.mp3"); //---------
let sonidoGanar = new Audio("./sonidos/Gano.mp3"); //---------
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".table tbody");
let fondoBody = d.querySelector("body");
//setTimeout() //se ejecuta una vez cuando pasa determinad tiempo
//setInterval() // se ejecuta en determinado tiempo infinitamente

d.addEventListener("DOMContentLoaded", ()=>{
    fondoBody.classList.add("fondo1");
    mostrarDatos();
});


//agregar evento al boton para iniciar el juego
btn_iniciar.addEventListener("click", function(){
  // alert("Juego iniciado");
  //comprobar que el juego este activo
  if(estoyJugando == false && nivel == 1){
    VentanaModal();
   }else if(estoyJugando == false && nivel == 2){
    estoyJugando = true;
    nivel2();
   }else if(estoyJugando == false && nivel == 3){
    estoyJugando = true;
    nivel3();
   }
});




//poner las imagenes aleatorias
imgN1.sort(()=>Math.random() - 0.5);

//funcion para agregar las imagenes al tablero
function agregarImagenes() {
     //agregar imagenes dependiendo del nivel
     if(nivel == 1){
        imagenNivel = imgN1;
     }else if( nivel == 2){
        imagenNivel = imgN2;
     }else if( nivel == 3){
        imagenNi
        vel = imgN3;
     }

     //poner las imagenes aleatorias
     imagenNivel.sort(()=>Math.random()-0.5);
    //recorrer con un forEach las imagenes del Array
    imagenNivel.forEach((img, i) => {
        let div = d.createElement("div"); //crear etiqueta div
        div.className = "col-3"; //agregar al div la clase col-3
        let imagen = d.createElement("img"); //crear la etiqueta imagen
        imagen.className = "img-fluid altura"; // agregar la clase para adaptar la imagen
        imagen.src = "img/Logo Dragon Ball Z.jpeg"; //agregar la ubicacion de la imagen
        imagen.id = i; //agregar evento a las imagenes
        imagen.addEventListener("click", mostrarImagenes);
        div.appendChild(imagen); //agregar la imagen al div
        tablero.appendChild(div); //agregar div al tablero
    });
}

//funcion para mostrar las imagenes ocultas
function mostrarImagenes(){
    sonidoSeleccionar.play();
   let imagenID = this.getAttribute("id");
   //mostrar imagen
   this.src = imagenNivel[imagenID].url;
   nombreImg.push( imagenNivel [imagenID].nombre);
   posImg.push(imagenID);
   //alert ("id de la imagen: " +imagenID);
   //validar si se muestran 2 imagenes
   if(nombreImg.length ==2){
    //compararImagenes();
    setTimeout(compararImagenes, 200);
   }
}

//funcion para comparar las imagenes
function compararImagenes(){
    let imagenesTablero = d.querySelectorAll(".tablero div img");
    //validar si las imagenes se llaman igual
    if(nombreImg[0] == nombreImg[1]){
        if(posImg[0] != posImg[1]){
            //alert("Felicitaciones adivinastes🤩");
            sonidoAdivinar.play();
            imagenesTablero [ posImg[0] ].src = "Img/Esfera 7.jpeg";
            imagenesTablero [ posImg[1] ].src = "Img/Esfera 7.jpeg";
            imagenesTablero [posImg[0]].removeEventListener("click", mostrarImagenes);
            imagenesTablero [posImg[1]].removeEventListener("click", mostrarImagenes);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        }else{
            alert("Debes escoger otra imagen");
            imagenesTablero [ posImg[0] ].src = "Img/Logo Dragon Ball Z.jpeg";
            intentos++;
            mostrarIntentos.textContent = intentos; 
        }
         
    }else{
        //alert("Las imagenes son distintas, sigue intentando😑");
        sonidoFallar.play();
        imagenesTablero [ posImg[0] ].src = "Img/Logo Dragon Ball Z.jpeg";
        imagenesTablero [ posImg[1] ].src = "Img/Logo Dragon Ball Z.jpeg";
        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    //reiniciar las variables
    nombreImg = [];
    posImg = [];

    //comprobar si se adivinaron todas las imagenes
    if(nivel == 1 && aciertos == 8){
     alert("🎉🎉Felicitaciones pasastes al siguiente nivel🥳🥳");
     fondoBody.classList.replace("fondo1", "fondo2");
     totalIntentos += intentos;
     totalTiempo += (60 - tiempo);
     tiempoSobrante += tiempo;
     obtenerDatos();
     sonidoGanar.play();
     //recargar la pagina
     //location.reload();
     nivel++;
     mostrarNivel.textContent = nivel;
     intentos = 0;
     mostrarIntentos.textContent = intentos;
     aciertos = 0;
     mostrarAciertos.textContent = aciertos;
     clearInterval(tiempoTranscurrido);
     tiempo = 50;
     mostrarTiempo.textContent = tiempo;
     estoyJugando = false;
     quitarImg();

    }else if( nivel == 2 && aciertos == 10){
        alert("🎉🎉Felicitaciones pasastes al siguiente nivel🥳🥳");
        sonidoGanar.play();
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;
        quitarImg();
    }else if(nivel == 3 && aciertos == 12){
        alert("🎉🎉Felicitaciones ganastes el juego🥳🥳");
        sonidoGanar.play();
        location.reload();
    }
}

function nivel1(){
    //agregar imagenes al tablero
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    tiempoDeJuego();
}

function nivel2(){
    //agregar imagenes al tablero
    agregarImagenes();
   // mostrarNivel.textContent = nivel;
    tiempoDeJuego();
}

function nivel3(){
    //agregar imagenes al tablero
    agregarImagenes();
   // mostrarNivel.textContent = nivel;
    tiempoDeJuego();
}

function tiempoDeJuego(){
  //controlar el tiempo del juego
  tiempoTranscurrido = setInterval(()=>{
    tiempo--;
    mostrarTiempo.textContent = tiempo;
       if(tiempo == 10){
         alert("Rapido el tiempo se esta agotando🙀🙀");
          // mostrarTiempo.style.color = "red";
          // mostrarTiempo.style.fontSize = "25px";
          mostrarTiempo.classList.add("tiempo-agotado");
        }else if(tiempo == 0){
          alert("El tiempo se agoto perdiste");
          sonidoPerdio.play();
          clearInterval(tiempoTranscurrido);
          setTimeout(()=>{
            location.reload();
          },1000)
       }
   },1000);
}

function quitarImg(){
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img) => {
        img.remove();
    });
}

//mostrar ventana modal
function VentanaModal(){
    let mostrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador");
    let btnJugador = d.querySelector(".registrar-jugador");
    //botones para cerrar ventana modal
    cerrarModal.forEach((btn)=>{
      btn.addEventListener("click",()=>{
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
      });
    });
    //mostrar ventana modal
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    //evento click al boton azul del modal 
    btnJugador.addEventListener("click",()=>{
        //mostar el nombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //cerrar modal
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
        //iniciar nivel 1
        estoyJugando = true;
        nivel1();
    });
};

