let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
  saluda: function() {
    console.log("Hola, me llamo " + this.nombre);
  }
}
let llave = "edad";
console.log(pedro[llave]);
pedro.estatura = 1.8;
delete pedro.activo;
let llaves = Object.keys(pedro);
for (let i=0; i < llaves.length-2; i++) {
  let att = llaves[i];
  console.log(att + " : " + pedro[att]);
}
pedro.saluda();
