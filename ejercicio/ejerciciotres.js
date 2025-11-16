// ejercicio 3
import { generarTabla } from "../modulo/funciontres.js";

// pedir numero
let numero = parseInt(prompt("Ingrese el número base de la tabla de multiplicar"));

// aplica la función
let resultados = generarTabla(numero);

// Mostrar en consola
console.log(`Tabla del ${numero}:`, resultados);

