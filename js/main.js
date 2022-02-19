//Navegador - Header
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    })
}
navSlide();


//Verificacion de edades
const verificadorBoton = document.getElementById("verificador");
verificadorBoton.addEventListener("click", verificarEdad);

function verificarEdad(){
    let edad = document.getElementById("edad").value;
    let salidaVeri = document.getElementById("salidaVerificador");
    if ((edad!="") && (edad>=18)) {
        salidaVeri.innerText= `Bienvenido! tu edad es de ${edad} años`
    }else{
        salidaVeri.innerText= `DATOS INCORRECTOS - No eres mayor de 18`
    }
}


//CLASE
class Producto{
    constructor(local, precio, espacio){
        this.local=local.toUpperCase();
        this.precio=precio;
        this.espacio=espacio;
    }
    //metodos
    descuento(valor){
        this.precio = this.precio - valor;
    }
    mostrar(){
        return "El " + this.local + " cuesta " + this.precio + " pesos POR MES " + "y cuenta con un espacio de " + this.espacio;
    }
}


//ARRAY
const productos= [];
productos.push(new Producto("Local 1", 5000,"3m x 4m"));
productos.push(new Producto("Local 2", 7000, "5,5m x 5m"));
productos.push(new Producto("Local 3", 8000, "6m x 6m"));
productos.push(new Producto("Local 4", 10000, "8 x 7m"));


//IF ELSE - PROMPT SI O NO

let botonDispo = document.getElementById("botonLocaldispo");
botonDispo.addEventListener("click", localesSiono);
function localesSiono() {
    let sioNo = document.getElementById("sionoInput").value;
    let contenedorDispo = document.getElementById("localesDispo");
    
    if (sioNo=="si") {
        for (const producto of productos) {
            botonDispo.disabled=true
            localStorage.setItem('ListaLocales', JSON.stringify(productos))
            let localesCont= document.createElement("div");
            localesCont.innerHTML=`<h2> ${producto.local} </h2> 
                                    <h2> Precio: ${producto.precio} $ por mes</h2>
                                    <h2> Y cuenta con un espacio de ${producto.espacio}</h2>
                                    <button id='${producto.id}' class = 'btnLocal'>Ver Local</button>`;
            contenedorDispo.append(localesCont);
        }
    }   else if(sioNo=="SI") {
        for (const producto of productos) {
            botonDispo.disabled=true
            let localesCont= document.createElement("div");
            localesCont.innerHTML=`<h2> ${producto.local} </h2> 
                                    <h2> Precio: ${producto.precio} $ por mes</h2>
                                    <h2> Y cuenta con un espacio de ${producto.espacio}</h2>
                                    <button id='${producto.id}' class = 'btnLocal'>Ver Local</button>`;
            contenedorDispo.append(localesCont);
        }
    }   else {
        botonDispo.disabled=true
        let localesCont= document.createElement("div");
        localesCont.innerHTML=`No hay problema!`;
        contenedorDispo.append(localesCont);
            
    }
}

function obtenerLocales() {
    if('ListaLocales' in localStorage){
        productos=localStorage.getItem('ListaLocales').split(',');
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