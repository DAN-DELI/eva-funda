// ====== APLICAR EL EJERCICIO #2 ======

// importar función
import { validarAcceso } from "../modulo/index.js";

// Pedir datos al usuario
let edad = parseInt(prompt("Ingrese su edad"));
let contraseña = prompt("Ingrese la contraseña de acceso");

// Usar la función
let resultado = validarAcceso(edad, contraseña);

// Mostrar resultado en consola
console.log(resultado);

