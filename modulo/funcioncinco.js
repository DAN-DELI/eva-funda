/*Función buscar elemento*/
export const buscarElemento = (lista, elemento) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return true;
    }
}
    return false;
};

// Solicitar entradas al usuario
const cantidad = parseInt(prompt("¿Cuántos elementos tendrá el arreglo?"));
const lista = [];

for (let i = 0; i < cantidad; i++) {
    const valor = prompt(`Ingresa el elemento #${i + 1}:`);
    lista.push(valor);
}

const elementoBuscado = prompt("¿Qué elemento deseas buscar en el arreglo?");

// Ejecutar la búsqueda
const encontrado = buscarElemento(lista, elementoBuscado);

// Mostrar el resultado
if (encontrado) {
    console.log(`El elemento "${elementoBuscado}" SÍ se encuentra en el arreglo.`);
} else {
    console.log(`El elemento "${elementoBuscado}" NO se encuentra en el arreglo.`);
}