// ====== APLICAR EL EJERCICIO #3 ======

// importar función
import { generarTabla } from "../modulo/index.js";

// pedir numero
let numero = parseInt(prompt("Ingrese el número base de la tabla de multiplicar"));

// aplica la función
let resultados = generarTabla(numero);

console.log("=== IMPRESION EN ARREGLO ===")

// Mostrar en consola
console.log(`Tabla del ${numero}:`, resultados);



