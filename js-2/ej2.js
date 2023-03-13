function max(arreglo) {
  let max = 0;
  let i = 0;
  while (i<arreglo.length) {
    if (arreglo[i] >= max) {max = arreglo[i]};
    i++
  }
  if (max === 0) {max = undefined};
  return max;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
