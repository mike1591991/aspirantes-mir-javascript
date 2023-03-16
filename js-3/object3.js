let receta = { }
receta.nombre = "Sandwich";
receta.ingredientes = [];
let obj = {nombre: "Pan", cantidad: 2}
receta.ingredientes.push(obj);
let obj2 = {nombre: "Queso", cantidad: 1}
receta.ingredientes.push(obj2);
console.log(receta.ingredientes[0]);
console.log("suma de cantidades: " + (receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad));
