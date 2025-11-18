// ====== APLICAR EL EJERCICIO #5 ======

// Importar la función desde el index de módulo
import { buscarElemento } from "../modulo/index.js";

// Pedir cuántos elementos tendrá el arreglo
const cantidad = parseInt(prompt("¿Cuántos elementos tendrá la lista?"));

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida.");
} else {
    let lista = [];

    // Llenar el arreglo
    for (let i = 1; i <= cantidad; i++) {
        let valor = prompt(`Ingrese el elemento #${i}:`);
        lista.push(valor);
    }

    // Elemento a buscar
    const elementoABuscar = prompt("¿Qué elemento deseas buscar?");

    // Usar la función
    const existe = buscarElemento(lista, elementoABuscar);

    // Mostrar resultados
    if (existe) {
        alert(`El elemento "${elementoABuscar}" SI se encuentra en la lista.`);
        console.log(`El elemento "${elementoABuscar}" SI se encuentra en la lista.`);
    } else {
        alert(`El elemento "${elementoABuscar}" NO está en la lista.`);
        console.log(`El elemento "${elementoABuscar}" NO está en la lista.`);
    }
}
