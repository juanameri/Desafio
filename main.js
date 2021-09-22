/*Desafio Clase 1
let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu apellido?");
let saludoBienvenida = "Hola"+" "+ nombre + " " + apellido + ". ¡Bienvenid@ a mi sitio web!"

alert("Hola "+ nombre + " " + apellido + ". ¡Bienvenid@ a mi sitio web!")
*/

/*Desafio Clase 2
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
*/

for (mesasOcupadasTerraza = 0; mesasOcupadasTerraza <=14; mesasOcupadasTerraza ++){
    const nombreDinamico = prompt("¿Cual es tu nombre?");
    console.log("¡Hola "+ nombreDinamico+"! Bienvenid@ al Restaurante");
    console.log("Ok " + nombreDinamico + ", subí por la escalera y seras ubicado en la terraza");    
}