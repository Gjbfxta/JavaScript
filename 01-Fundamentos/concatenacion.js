/* 
la contecatcion son las cadenas de texto 
hay dos fomas de concatenar
1. operadores (+)
2. Template String (``) alt + 96 ó alt Gr c portuguesa. 
*/
// con catenar con operador (+)
  let nombre = "Ana Lilia";
  let apellido = "Zahuantitla";

/* Asi se crea un espacion colocando (" ") */
  let nombrecompleto = nombre + " " + apellido;

  console.log(nombrecompleto);

  // concatenar con template Strings
  
  let saludo = `Hola ${nombre} ${apellido}! ¿Qué onda? sabias que monste es mi amiga`;
  console.log (saludo);
