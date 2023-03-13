function sum(arreglo) {
  let suma = 0;
  let i = 0;
  while (i<arreglo.length) {
    suma += arreglo[i]
    i++
  }
  return suma;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
