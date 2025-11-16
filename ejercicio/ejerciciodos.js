// ejercicio2.js
import { validarAcceso } from "../modulo/funciondos.js";

// Pedir datos al usuario
let edad = parseInt(prompt("Ingrese su edad"));
let contraseña = prompt("Ingrese la contraseña de acceso");

// Usar la función
let resultado = validarAcceso(edad, contraseña);

// Mostrar resultado en consola
console.log(resultado);

