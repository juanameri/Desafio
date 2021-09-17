/*Desafio Clase 1
let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu apellido?");
let saludoBienvenida = "Hola"+" "+ nombre + " " + apellido + ". ¡Bienvenid@ a mi sitio web!"

alert("Hola "+ nombre + " " + apellido + ". ¡Bienvenid@ a mi sitio web!")
*/

const nombreDinamico = prompt("¿Cual es tu nombre?");
console.log("¡Hola "+nombreDinamico+"! Bienvenid@ al Restaurante");

const cantidadPersonas = Number(prompt("¿Cuantas personas van a ser?"));
const fumadores = prompt("¿Alguien fuma?");

if ((cantidadPersonas < 5) && (fumadores == "si")){
    console.log("Ok " + nombreDinamico + ", subí por la escalera de mano derecha y seras ubicado en la terraza");
} else if ((cantidadPersonas >= 5) && (fumadores == "si")){
    console.log("Ok " + nombreDinamico + ", subí por la escalera de mano izquierda y seras ubicado en la terraza");
} else if ((cantidadPersonas < 5) && (fumadores == "no")){
    console.log("Ok " + nombreDinamico + ", avanza hacia mano derecha y seras ubicado por un asistente");
} else if ((cantidadPersonas >= 5) && (fumadores == "no")){
    console.log("Ok " + nombreDinamico + ", avanza hacia mano izquierda y seras ubicado por un asistente");
}