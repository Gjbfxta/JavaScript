// En este código vamos a ver los tipos de datos utilizables en el código

/* 
Tipos de datos
los tipos de datos se dividen en primitivos y complejos.

   1. Tipos de datos primitivos
    Datos basicos que no se consideran "objetos" y no tienen "métodos" number o número representación de valores ya sea enteros o con decimales (punto flotante).
    Tambien hay valores boolianos que son los de verdadero o falso se utilizan para los condicionantes ademas Existen las cadenas de caracteres con el formato String y se usa para representar tecto se usa con comillas dobles o simples mientras que seas consistente con el uso de ese signo ("") o '' Puedes tener variables definidas cuando son inicializadas o indefinidas cuando no han sido inicializadas Array o arreglos son un conjunto de datos que los almacena en una lista ordenada de elementos. 
    Los datos dentro de los arreglos se escriben entre corchetes. [] y separados por comas ,
    *Funciones: Es un tipo de dato que puede ser invocado. Se declaran con la palabra reservada fuction y el codigo q identfican con llave

*/

let miNumero = 6;
let miNumeroDecimal = 24.5;

/* console.log(miNumero);
console.log(miNumeroDecimal); */

let miTexto = "lilibeth";

/* console.log(miTexto); */

let miVerdad = true;
let miMentira = false;

/* console.log(miVerdad);
console.log(miMentira);

 */
let x;
/* x = prompt("cual es tu numero favorito");
 */
/* console.log(x);
alert(x);
 */

let arreglito = ['piña', 'granada', 'cereza', 'guayaba'];
console.log(arreglito[0]);

let persona ={
    // clave :valor,
    nombre :"lilibeth" ,
    edad : 85,
    colorCabello :"Castaño",
    colorOjos : "Cafe",
    altura : 1.70,
    peso : 52,
    vivo : true,
    novie : false,

}

console.log (persona);
//accedemos a los datos de una clave dentro de un objeto
//con la notacion de punto ejemplo
console.log(persona.nombre);
console.log(persona.altura);

/* FUNCIONES */

let mensajito = function () {
    //pasamos el codigo que ejecuta la funcion
    console.log("este es un mensaje enlazado por la funcion")
}
// invocamos una funcion siempre lleva parentesis al final
mensajito()