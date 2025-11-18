// ====== EJERCICIO #4 ======

// Función declarada
export function calcularImpuestoUnitario(valor, porcentaje) {
    return valor * (porcentaje / 100);
}

// Función expresada
export const procesarImpuestos = function () {
    const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Debe ingresar una cantidad válida.");
        return 0;
    }

    let impuestoTotal = 0;
    let precio = 0;

    for (let i = 1; i <= cantidad; i++) {
        const valor = parseFloat(prompt(`Ingrese el valor del producto ${i}:`));
        const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i}:`));

        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido. Este producto no será contado.");
            continue;
        }

        if (isNaN(porcentaje) || porcentaje < 0) {
            alert("Porcentaje inválido. Este producto no será contado.");
            continue;
        }

        const impuesto = calcularImpuestoUnitario(valor, porcentaje);
        impuestoTotal += impuesto;
        precio += valor + impuesto;
    }

    // return impuestoTotal;
    return {
        impuestoTotal: impuestoTotal,
        total: precio
    }
};
