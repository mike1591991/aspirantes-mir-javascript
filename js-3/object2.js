let persona = {
  nombre: "Michael Meza",
  edad: 31,
  ciudad: "Piura - Peru",
  profesion: "estudiante"
}
for (let llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    console.log(persona[llave])
  }
}
function presentacion(per) {
  let mensaje = "";
  mensaje = "Hola soy " + per.nombre + ", tengo " + per.edad + " años y soy de la ciudad de " + per.ciudad;
  return mensaje;
}
let juan = {
  nombre: "Juan perez",
  edad: 20,
  ciudad: "Roma",
  profesion: "Ingeniero"
}
let mensaje = presentacion(juan);
console.log(mensaje);
persona.hobbies = ["nadar", "leer", "guitarra"];
console.log("Hobbies: " + persona.hobbies);
for (let i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}
