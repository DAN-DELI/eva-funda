 export function calcularImpuestoUnitario(valor, porcentaje) {
  return valor * (porcentaje / 100);
}

const procesarImpuestos = function() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    let impuestoTotal = 0;

    for (let i = 1; i <= cantidad; i++) {
        const valor = parseFloat(prompt(`Ingrese el valor del producto ${i}:`));
        const porcentaje = parseFloat(prompt(`Ingrese el porcentaje de impuesto para el producto ${i}:`));
        const impuesto = calcularImpuestoUnitario(valor, porcentaje);
        impuestoTotal += impuesto;
}
return impuestoTotal;
};

const totalImpuesto = procesarImpuestos();
console.log(`El impuesto total acumulado es: $${totalImpuesto}`);