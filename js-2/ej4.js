function join(arreglo) {
  let st = "";
  for (let i = 0; i < arreglo.length; i++) {
    st = st + arreglo[i] + " "
  }
  return st;
}
console.log(join([10, 9, 8, 7, 6, 5, 4]))
console.log(join(["h","o","l","a"]));
