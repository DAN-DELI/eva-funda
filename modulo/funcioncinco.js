// ====== EJERCICIO #5 ======

// Función flecha que busca un elemento dentro del arreglo
export const buscarElemento = (lista, elemento) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            // mensaje de encontrado
            return true; 
        }
    }
    // mensaje de no encontrado
    return false; 
};
