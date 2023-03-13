function join(arreglo) {
  let i = 0;
  let st = "";
  while (i<arreglo.length) {
    st = st + arreglo[i] + " "
    i++
  }
  return st;
}
console.log(join([10, 9, 8, 7, 6, 5, 4]))
console.log(join(["h","o","l","a"]));
