// ====== APLICAR EL EJERCICIO #3 ======

// importar función
import { generarTabla } from "../modulo/index.js";

// pedir numero
let numero = parseInt(prompt("Ingrese el número base de la tabla de multiplicar"));

// aplica la función
let resultados = generarTabla(numero);

// Mostrar en consola
/*Ponemos este console log aparte, para que no quede dentro del bucle
y se muestre acada rato, tabla del numero tal*/
console.log(`Tabla del ${numero}:`);
/*Se usa un bucle for...of para recorrer el arreglo 'resultados' y mostrar 
cada operación de la tabla.
valor es el resultado de cada multiplicación, "i", es el indice del arreglo, le asignamos
manualmente que valga 1, para que no comience en cero.
*/
let i = 1;
for (let valor of resultados) {
console.log(`${i} x ${numero} = ${valor}`);
i++;
}



