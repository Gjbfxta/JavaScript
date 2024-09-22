/* 

Las variables no son más que contenedores almacenadoras de datos.
Con las siguientes palabras se declaran variables.

var -----> Tradicional sin embargo ya no se recomienda
let -----> Es la forma moderna y se recomienda
const----> Es una forma moderna pero el dato almmacenado no cambia.

Para declarar una variable:
var [nombrevariable] = [valor];

*/

var nombre = "Lili";
let edad = 20;
const vivo = true;

console.log(nombre)
console.log(edad)
console.log(vivo)

/* 

Las variables declaradas con "var" pueden cambiar mas no es necesario declararlas de nuevo.
Las variables declaradas con "const" no van a cambiar.
Para cambiar el valor de una variable es 
[nombreVariable] = [nuevoValor]

*/

edad = 75;
console.log(edad);
alert(nombre);