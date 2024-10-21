/* 

Practica-Liga superpoderes
1. defginir un arreglo llamado heroes, que contenga 5 nombres de sperheroes.

2. Agrega un muevo heroe al final de array 
3. Elimina un superpoder
4. Cambiar el 3er poder
5 odernar aflabeticamente

*/

let superpoderes = ["hielo" , "fuego" , "teletransportacion", "invisibilidad", "rayos laser"];
superpoderes.push ("super fuerza");
superpoderes.shift();
superpoderes[3] = "respiracion bajo el agua";
superpoderes.sort();
let debilidades = superpoderes.splice(2,5);

console.log (superpoderes);
console.log (debilidades);
