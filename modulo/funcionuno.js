// ====== EJERCICIO #1 ======

export function calcularPromedio(cantidad) {
  let suma = 0;
  let rendimiento;

  for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota número ${i}`));
    suma += nota;
  }

  let promedio = suma / cantidad;

  if (promedio >= 4.0) {
    rendimiento = "alto";
  } else if (promedio >= 3.0 && promedio < 4.0) {
    rendimiento = "medio";
  } else {
    rendimiento = "bajo";
  }

  return {
    Promedio: promedio.toFixed(2),
    Rendimiento: rendimiento
  };
}
