/* 

Variable llmada heroe, con dato string con el nombre de un super heroe

Definimos una funcion llamada obtener poder

Esta funcion recibe el parametro heroe que se valida en el cuerpo de la funcion

En el cuerpo de la funcion si el paremetro hereo es igual a superman mostrar por consola su poder es superfuerza
si heroe es igual igual a flash por consola su poder es la velocidad
si herope es igual a batman su poder es super millonario, sinada de esto es igual  "no te inviataron a la fiesta"

Invocar a la funcion con su parametro heroe

*/

let heroe = prompt ("Ingresa el nombre de un Heroe de DC"); 

function obtenerpoder(heroe) {
  
if (heroe === "superman") {
  console.log("su poder es superfuerza")
} else if (heroe === "Flash") {
  console.log ("su poder es la supervelocidad")
} else if (heroe === "batman") {
  console.log ("su poder es supermillonario")
} else {
  console.log ("no te inviataron a la fiesta")
}

}

obtenerpoder(heroe)  /* Asi se invoca una funcion, con el nombre de la funcion */
