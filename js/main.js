//Navegador - Header
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}
navSlide();


//Verificacion de edades
const verificadorBoton = document.getElementById("verificador");
verificadorBoton.addEventListener("click", verificarEdad);

function verificarEdad() {
    let edad = document.getElementById("edad").value;
    let salidaVeri = document.getElementById("salidaVerificador");
    if ((edad != "") && (edad >= 18)) {
        salidaVeri.innerText = `Bienvenido! tu edad es de ${edad} años`
    } else {
        salidaVeri.innerText = `DATOS INCORRECTOS - No eres mayor de 18`
    }
}


//CLASE
class Producto {
    constructor(id, local, precio, espacio, img) {
        this.id = parseInt(id)
        this.local = local.toUpperCase();
        this.precio = precio;
        this.espacio = espacio;
        this.img = img;
    }
    //metodos
    descuento(valor) {
        this.precio = this.precio - valor;
    }
    mostrar() {
        return "El " + this.local + " cuesta " + this.precio + " pesos POR MES " + "y cuenta con un espacio de " + this.espacio;
    }
}


//ARRAY
const productos = [];
productos.push(new Producto(01, "Local 1", 5000, "3m x 4m", "<img src='https://dummyimage.com/600x400/000/fff'>"));
productos.push(new Producto(02, "Local 2", 7000, "5,5m x 5m", "<img src='https://dummyimage.com/500x300/000/fff'>"));
productos.push(new Producto(03, "Local 3", 8000, "6m x 6m", "<img src='https://dummyimage.com/400x700/000/fff'>"));
productos.push(new Producto(04, "Local 4", 10000, "8 x 7m", "<img src='https://dummyimage.com/300x300/000/fff'>"));


//IF ELSE - SI O NO
let botonDispo = document.getElementById("botonLocaldispo");
botonDispo.addEventListener("click", localesSiono);
function localesSiono() {

    //LIMPIADOR DE BUSQUEDA
    let sioNo = document.getElementById("sionoInput").value;
    let contenedorDispo = document.getElementById("localesDispo");
    let limpiador = document.getElementById("borrarLocales");
    console.log(limpiador);
    limpiador.addEventListener('click', borradorLocales);
    function borradorLocales() {
        contenedorDispo.remove();
        contenedorImgs.remove();
        imagenesLocales.remove();
    }

    //CONTENEDOR LOCALES
    if (sioNo == "si") {
        for (const producto of productos) {
            botonDispo.disabled = true
            localStorage.setItem('ListaLocales', JSON.stringify(productos))
            let localesCont = document.createElement("div");
            localesCont.innerHTML = `<h2> ${producto.local} </h2> 
                                    <h2> Precio: ${producto.precio} $ por mes</h2>
                                    <h2> Y cuenta con un espacio de ${producto.espacio}</h2>
                                    <button id='${producto.id}' class= 'btnLocal'>Ver Local</button>`;
            contenedorDispo.append(localesCont);
        }

    } else if (sioNo == "SI") {
        for (const producto of productos) {
            botonDispo.disabled = true
            let localesCont = document.createElement("div");
            localesCont.innerHTML = `<h2> ${producto.local} </h2> 
                                    <h2> Precio: ${producto.precio} $ por mes</h2>
                                    <h2> Y cuenta con un espacio de ${producto.espacio}</h2>
                                    <button id='${producto.id}' class= 'btnLocal'>Ver Local</button>`;
            contenedorDispo.append(localesCont);
        }
    } else {
        botonDispo.disabled = true
        let localesCont = document.createElement("div");
        localesCont.innerHTML = `No hay problema!`;
        contenedorDispo.append(localesCont);
    }

    //BOTONES VER LOCAL
    let botonesLocales = document.getElementsByClassName("btnLocal");
    let contenedorImgs = document.getElementById('contenedorImgs');
    let imagenesLocales = document.getElementById('imagenesLocales')
    for (const boton of botonesLocales) {
        boton.addEventListener('click', function () {
            console.log(this.img);
            let seleccion = productos.find(producto=> producto.id==this.id);
            imagenesLocales.innerHTML="El local seleccionado es "+ seleccion.local;
            contenedorImgs.innerHTML= seleccion.img;
            
        })
    }
}








//BOTONES DE LOCALES
/* let botonImg = document.getElementsByClassName('btnLocal');
let contenedorImg = document.getElementsByClassName('contenedorImgs');
console.log(botonImg.length);+
console.log(contenedorImg);
for (const boton of botonImg) {
    boton.addEventListener('click', function () {
        let imgs = document.createElement("div")
        imgs.innerHTML = `<img scr=${producto.img}>'`;
        contenedorImg.append(imgs)
        
        alert('id numero' + this.id);
        let contenedorImgs = document.createElement("div");
        contenedorImgs.innerHTML=`<img src="${this.img}">`;
        document.body.append(con)
    })
} */


function obtenerLocales() {
    if ('ListaLocales' in localStorage) {
        productos = localStorage.getItem('ListaLocales').split(',');
    }
}


//Busqueda
/* let busquedaLocales = prompt("Ingrese 'Local y su Numero' para encontrar");
let encontrado = productos.find(producto=> producto.local == busquedaLocales.toUpperCase());
if (encontrado) {
    alert("Local encontrado \n"+encontrado.local+ "\n Cuesta: " + encontrado.precio+ " pesos POR MES \n"+" Y cuenta con un espacio de " + encontrado.espacio)
} else {
    alert("No se encontro local")
} */