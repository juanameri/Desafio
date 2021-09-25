/*

//Desafio Clase 1
let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu apellido?");
let saludoBienvenida = "Hola"+" "+ nombre + " " + apellido + ". ¡Bienvenid@ a mi sitio web!"

alert("Hola "+ nombre + " " + apellido + ". ¡Bienvenid@ a mi sitio web!")

//Desafio Clase 2
const nombreDinamico = prompt("¿Cual es tu nombre?");
console.log("¡Hola "+nombreDinamico+"! Bienvenid@ al Restaurante");

const cantidadPersonas = Number(prompt("¿Cuantas personas van a ser?"));
const fumadores = prompt("¿Alguien fuma?");

if (fumadores == "si"){
    if (cantidadPersonas >= 5){
        console.log("Ok " + nombreDinamico + ", subí por la escalera de mano derecha y seras ubicado en la terraza");
    } else {
        console.log("Ok " + nombreDinamico + ", subí por la escalera de mano izquierda y seras ubicado en la terraza");
    }
} else if (fumadores == "no"){
    if (cantidadPersonas < 5){
        console.log("Ok " + nombreDinamico + ", avanza hacia mano derecha y seras ubicado por un asistente");
    } else {
        console.log("Ok " + nombreDinamico + ", avanza hacia mano izquierda y seras ubicado por un asistente");
    }
}

//Desafio Clase 3

let mesasOcupadasTerraza = 0;

for (mesasOcupadasTerraza = 0; mesasOcupadasTerraza <=14; mesasOcupadasTerraza ++){
    const nombreDinamico = prompt("¿Cual es tu nombre?");
    console.log("¡Hola "+ nombreDinamico+"! Bienvenid@ al Restaurante");
    console.log("Ok " + nombreDinamico + ", subí por la escalera y seras ubicado en la terraza");    
}

//Desafio Clase 4

let picada = 50;
let sopaDeCalabaza = 35;
let vitelTone = 60;
let milanesaConPure = 150;
let tallarinesConTuco = 100;
let ensaladaCesar = 75;
let flan = 40;
let helado = 35;
let tarta = 30;

function precioTotal (entrada, platoPrincipal, postre){
    sumaTotal = entrada + platoPrincipal + postre;
    return console.log("El precio total de su pedido es $"+ sumaTotal);
}

precioTotal (picada, milanesaConPure, helado);
precioTotal (vitelTone, ensaladaCesar, flan);
precioTotal (sopaDeCalabaza, tallarinesConTuco, tarta);

*/

function PrecioProducto (precio){ 
    console.log('El precio al publico del producto seleccionado es $'+precio);
    const precioProducto = precio;
    return precioProducto;
}

function aplicarDescuento (descuento){
    console.log('Por ser socio se aplica en tus compras un descuento de $'+descuento);
    const precioSocio = precioProducto - descuento;
    return precioSocio;
}

function precioConDescuento (){
    return console.log("Por ser socio, el precio final a pagar sera $"+precioSocio);
}

PrecioProducto(1000);
aplicarDescuento (250);
precioConDescuento ();