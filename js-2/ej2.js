function max(arreglo) {
  let max = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] >= max) {max = arreglo[i]};
  }
  if (max === 0) {max = undefined};
  return max;
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
