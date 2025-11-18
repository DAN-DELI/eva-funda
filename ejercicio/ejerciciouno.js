// ====== APLICAR EL EJERCICIO #1 ======

// Importar la función
import { calcularPromedio } from "../modulo/index.js";

// Pedir al usuario cuántas notas quiere ingresar
let cantidad = parseInt(prompt("¿Cuántas notas deseas calcular?"));

// Usar la función
let resultado = calcularPromedio(cantidad);

// Mostrar el resultado en consola
console.log("Promedio:", resultado.Promedio);
console.log("Rendimiento:", resultado.Rendimiento);
