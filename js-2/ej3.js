function maxIndex(arreglo) {
  let index = -1;
  let mayor = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] >= mayor) {
    mayor = arreglo[i];
    index = i;
    }
  }
  return index;
}
console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1
