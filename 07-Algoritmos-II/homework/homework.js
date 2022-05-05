'use strict';

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let aux = array.length;
  if (aux <= 1) {
    return array;
  }
  let pivote = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < aux; i++) {
    if (array[i] < pivote) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivote, quickSort(right));
}

function merge(left, right) {
  let izq = 0;
  let der = 0;
  let array = [];

  while (izq < left.length && der < right.length) {
    if (left[izq] < right[der]) {
      array.push(left[izq]);
      izq++;
    } else {
      array.push(right[der]);
      der++;
    }
  }
  return array.concat(left.slice(izq)).concat(right.slice(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) return array;

  let mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let right = array.slice(mitad);

  return merge(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
