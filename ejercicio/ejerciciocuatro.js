// ====== APLICAR EL EJERCICIO #4 ======

// Importar función
import { procesarImpuestos } from "../modulo/index.js";

// Ejecutar y guardar el objeto retornado
const resultado = procesarImpuestos();

// Mostrar resultados en consola
console.log("Total de impuestos:", resultado.impuestoTotal);
console.log("Total final a pagar:", resultado.total);

// Mostrar en alert
alert(
`Total de impuestos: $${resultado.impuestoTotal}
Total final a pagar: $${resultado.total}`
);



