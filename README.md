1. cree el repo en github, inclui el archivo README.md y 

.gitignore con 2 commits.
2. git clone https://github.com/mike1591991/aspirantes-mir-

javascript.git
3. mkdir js-1 -> cd js-1
4. touch hello.js

1.
function hola(nombre) {
  return console.log("Hola " + nombre + "!");;
}
console.log(hola("Mike"));
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"

2. touch IMC.js
function bmi(peso, altura) {
  return peso/Math.pow(altura,2)
}

console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695

3. touch sum.js
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

4. touch conditionals.js
function calcularColor(num) {
  var color;
  if (num == 1) {
    color = "negro";
  } else if (num == 2) {
    color = "blanco";
  } else if (num == 3) {
    color = "azul";
  } else {
    color = "verde";
  }
  return "El color es " + color;
}

console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"

Poscondiciones: 
1. git add .
git commit -m 'solucion a los ejercicios de js'
2. git checkout main
git merge develop
3. git push origin
4. git branch -d develop
5. https://github.com/mike1591991/aspirantes-mir-javascript.git
