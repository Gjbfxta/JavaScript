/* 

Son una estructura de datos que permiten almacenar diferentes valores en una sola variable.
Los elemenntos dentro del array tiene una posicion o índice que permite acceder a ellos.
Los indices de los datos comine¿zan en 0.
Sintaxis
  let nombrearray = [elemntos1 , elemto2] 

*/
let frutasfavoritas = ["sandia" , "piña" , "maracuya"];
let numerosuerte = [5, 13, 4, 3];
let mequierenomequiere = [true, false, true, false];
let misdatos = ["lili", "zahunatitla", " 20", false];
let animandoarrays = [
  ["gato", "perro", "liebre"], 
  [123, 15, 45, 5,8, 96], 
  [true, false, true]
]

/* 

array -> ["sandia" , "piña" , "maracuya"]
índice ->    0         1          2

array -> [5, 13, 4, 3]
índice -> 0  1   2  3

*/

/* 

Acceder a elementos de un array 
para acceder a un dato usamos el siguiente sintaxis
nombreArray[indice];

*/

console.log (frutasfavoritas[1])
console.log (numerosuerte[1])
console.log (animandoarrays[0][2])


/* 

Para cambiar el valor dentro del array usamos la siguiente sintaxis:

nombrearray[indice] = nuevodato

*/

console.log(frutasfavoritas)

frutasfavoritas[0] = "uva";

console.log(frutasfavoritas)

/* 

Metodos array 
  Son funciones que trabajan con los datos de los arrays
  Su sintaxis es la siguiente:

  nombrearray. nombremetodo
  nombrearray. nombremetodo(parametro)

*/
/* 

Medotodo length
  Dice cuantos elementos tiene un array

*/

console.log (frutasfavoritas.length)
console.log (numerosuerte.length)
console.log (animandoarrays[1].length)

/* 

push() agrega elemntos al final del array
nombrearray.push(dato)

*/

console.log (frutasfavoritas);
frutasfavoritas.push ("lichi");
console.log(frutasfavoritas)

/* 

pop()
aqui eliminamos el ultimo elemento del array y lo devuelve 

nombrearray.pop()

*/

console.log(numerosuerte);
/* let numeroeliminado = numerosuerte.pop(); */
numerosuerte.pop(3);
console.log(numerosuerte);

/* 

unshift() agrgar un elemento al inicio del array 
nombreArray.unshift(dato)

*/

console.log(frutasfavoritas);
frutasfavoritas.unshift("pitajaya");
console.log(frutasfavoritas);

/* 

Shift elimina el primer elemneto del array y te lo devuelve
nombreArray.shift
*/

console.log(numerosuerte);
let quitarprimero = numerosuerte.shift();
console.log(numerosuerte);
console.log(quitarprimero);

/* 

indexof()= encuentra o devuelve un elemento en el array 

nombreArray.indexof(dato);

*/

let indece = frutasfavoritas.indexOf("piña")
console.log(indece)

/* 

Splice puede eliminar o agrgar elemntos al array desde una posicion especifica.

Para eliminar es:
nombreArray.splice(indicedeinicio, indicefinal);

Para agregares:
nombreArray.splice(indiceInicio, pasos, valores)

*/


console.log (frutasfavoritas);
frutasfavoritas.splice(1,2);
console.log (frutasfavoritas);
frutasfavoritas.splice(1,0, "fresa", "platano");

/* 

slice crea una copia de una porsion del array

nombreArray.slice(indicedeinicio, indicefinal);

*/

let frutascopia = frutasfavoritas.slice (1,2);
console.log (frutascopia);

/* 

sort: ordena los elementos de imn array de mayor a menor 

nombreArray.sort() -> no se pone dada entre los parentesis

*/

console.log (frutasfavoritas);
frutasfavoritas.sort();
console.log (frutasfavoritas);

console.log (numerosuerte);
numerosuerte.sort();
console.log (numerosuerte);


