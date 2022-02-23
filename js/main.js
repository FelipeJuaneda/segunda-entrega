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
        localStorage.setItem('EdadUsuario', JSON.stringify(edad));
        salidaVeri.innerText = `Bienvenido! tu edad es de ${edad} años`;
    } else {
        salidaVeri.innerText = `DATOS INCORRECTOS - No eres mayor de 18`;
    }
    obtenerEdad();
}
function obtenerEdad() {
    'EdadUsuario' in localStorage && edad.localStorage.getItem('EdadUsuario');
}

//CLASE
class Producto {
    constructor(id, local, precio, espacio, img, tag) {
        this.id = parseInt(id)
        this.local = local.toUpperCase();
        this.precio = precio;
        this.espacio = espacio;
        this.img = img;
        this.tag = tag;
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
productos.push(new Producto(01, "Local 1", 5000, "3m x 4m", "<img src='https://dummyimage.com/600x400/000/fff'>", "chico"));
productos.push(new Producto(02, "Local 2", 7000, "5,5m x 5m", "<img src='https://dummyimage.com/500x300/000/fff'>", "chico"));
productos.push(new Producto(03, "Local 3", 8000, "6m x 6m", "<img src='https://dummyimage.com/400x700/000/fff'>", "grande"));
productos.push(new Producto(04, "Local 4", 10000, "8 x 7m", "<img src='https://dummyimage.com/300x300/000/fff'>", "grande"));

//IF ELSE - SI O NO
let botonDispo = document.getElementById("botonLocaldispo");
botonDispo.addEventListener("click", localesSiono);

function localesSiono() {

    //LIMPIADOR DE BUSQUEDA
    let sioNo = document.getElementById("sionoInput").value;
    let contenedorDispo = document.getElementById("localesDispo");
    let limpiador = document.getElementById("borrarLocales");
    limpiador.addEventListener('click', borradorLocales);
    function borradorLocales() {
        contenedorDispo.innerHTML = "";
        contenedorImgs.innerHTML = "";
        imagenesLocales.innerHTML = "";
    }

    //CONTENEDOR LOCALES
    if (sioNo == "si") {
        contenedorDispo.innerHTML = "";
        for (const producto of productos) {
            let { local, precio, espacio, id } = producto;
            localStorage.setItem('ListaLocales', JSON.stringify(productos))
            let localesCont = document.createElement("div");
            localesCont.innerHTML = `<h2> ${local} </h2> 
                                    <h2> Precio: ${precio} $ por mes</h2>
                                    <h2> Y cuenta con un espacio de ${espacio}</h2>
                                    <button id='${id}' class= 'btnLocal'>Ver Local</button>`;
            contenedorDispo.append(localesCont);
        }
    } else if (sioNo == "SI") {
        contenedorDispo.innerHTML = "";
        for (const producto of productos) {
            let { local, precio, espacio, id } = producto;
            localStorage.setItem('ListaLocales', JSON.stringify(productos))
            let localesCont = document.createElement("div");
            localesCont.innerHTML = `<h2> ${local} </h2> 
                                    <h2> Precio: ${precio} $ por mes</h2>
                                    <h2> Y cuenta con un espacio de ${espacio}</h2>
                                    <button id='${id}' class= 'btnLocal'>Ver Local</button>`;
            contenedorDispo.append(localesCont);
        }
    } else {
        contenedorDispo.innerHTML = "";
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
            let seleccion = productos.find(producto => producto.id == this.id);
            imagenesLocales.innerHTML = "El local seleccionado es " + seleccion.local;
            contenedorImgs.innerHTML = seleccion.img;

        })
    }
}

function obtenerLocales() {
    ('ListaLocales' in localStorage) && productos.localStorage.getItem('ListaLocales').split(',');
}
