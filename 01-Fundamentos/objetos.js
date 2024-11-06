/* 

Objetos 
Es una coleccion de propiedades y metodos

Las propiedades decriben las caracteristicas del objeto
Los metodos describen los comportamientos del objeto

en los obejetos pueden contener distintos tipood de datos

sintaxis:

let nombreArray  = [];
let nombreobjeto ={
 // Propiedade4s y métodos

};

//Propiedades dentro de un objeto se escriben en pares "clave" : "valor"

let nombre = Tatao // Variable -> es incorrecto

nombre : "Tatao" // Propiedas -> es correcto

las propiedades de un objeto se utilizan las comas (,) despues del valor-

Las claves de la propiedades pueden tener mas de una palabra, pero se deberán escribir entre comillas "" o ''

"nombre real" = 'Tatao',

También s se puede escribir en formato Camel Case y sin comillas

nombreReal = "Yattito"

*/

/* DEFINIR UN OBJETO */

let personaje = {
  nombre : "Fordo Bolsón",
  edad: 15,
  residencia : "la marca",
  poderes : false,
  habilidadeshumanas : ["valor", "determinacion", "compañerismo"]

}

/* Accedemos al valor de las propiedades del objeto */

console.log (personaje.nombre);
/* console.log (personaje["habilidades humanas"]); */
console.log (personaje.habilidadeshumanas[0]);

/* Agregar y borrar propiedades de objetos */
personaje.enemigos = ["sauron, gollum"];

delete personaje.residencia;

/* 

nombramos 
crear un objeto mascota
*/

let mascota = {
  nombre : "Toby",
  tipo : "perro",
  edad: 4,
  fisico :{
    estatura : 70,
    peso : 50,
    raza : "San Bernardo"
    
  },
  saludo : function(amo){
  //codigfo que se ejecuta al invocar la funcion
  alert(`Tu hueles a cola de ${this.nombre} GUAF,GUAF, GUAF tu tambien ` + amo);
}
}


/* declaramos un metodo */



console.log (mascota.fisico.raza);
console.log (mascota.fisico.peso);
console.log (mascota.nombre);

mascota.fisico.colorojos = "cafe";
mascota.fisico.gordo = true
delete mascota.fisico.colorojos;




/* sintaxis 

nombreClave : function(parametros) {
 // codigo que se ejecuta
}

this es una plabra reservada que se refiere al trabajo actual, y sirve para acceder a sus propiedades del mismo;

*/

mascota.saludo("lili");