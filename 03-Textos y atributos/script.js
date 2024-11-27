/* Seleccionamos los elementospor su id */

const  titulo = document.getElementById("title");
const  lista = document.getElementById("list");

/* Los mostramos por consola */

console.log(titulo);
console.log(lista);


/*  

innerText

Devulve un scrimp del contenido visible dentro de un elemento.

  elemento.innerText

 */

console.log (">>> Con innerText")
console.log (titulo.innerText);
console.log (lista.innerText);


/* 
textcontent

Devuleve un String del contenido visible dentro de un elemento 

elemento.textcontent

*/

console.log (">>> Con textContent")
console.log (titulo.textContent);
console.log (lista.textContent);

/* 

innerHTML

Devuleve un String con la estructura interna de el elemento

elemento.innerHTML

*/

console.log (">>> Con innerHTML")
console.log (titulo.innerHTML);
console.log (lista.innerHTML);


/* 
modificar el contenido con innertext 

Asignamos el valor al elemteo seleccionado 

elemento.innerText = "string"

*/

titulo.innerText = "Cuchurrumina";
lista.innerText = "se murieron";

/* 

Modificar el conetenido con textContent

Asiganamos el valor al elemtento sellecionado.

elemento. textContent ="string"

*/

titulo.textContent = "mis pokemones";
lista.textContent = "cargando...";

/* 

Modificar el conetenido con innerHTML

Asiganamos el valor al elemtento selecionado incluyendo las etiquetas html.

elemento.innerHTML =" <tag>  ...</tag>"

*/

titulo.innerHTML = "amigos <span>pokecitos</span>!";
lista.innerHTML = "<li>Snorlax</li> <li>Mew</li>";