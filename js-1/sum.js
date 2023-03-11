function suma(numero) {
  let suma = 0;
  let i = 0;
  while (i<numero) {
    suma += i
    i++
  }
  return suma += numero;
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120
