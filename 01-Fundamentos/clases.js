
/* 

Clases 

Una clase en Js ES UNA PLANTOTLLA PAra crear objetos

Es una forma moderna y natural de trabajar con la programación orientada a objetos


-Método constructor

El método constructor es un método especial que se ejecuta automaticamente cuando se crea una estancia de la clase

Dentor del método contrcutor pasamos las propiedades y valores de la clase

las propiedades pasan como parametros y luego como ´this´

clase simepre en mayuscula

Sintaxis básica:

class nombreClase {
//Método contructor 

  constructor(part1, part2){
   this.part1 = part1;
   this.part2 = part2;
  }
}

-Instancias de clases

Para crear un objeto usando la clase se utiliza la palabra "new", esto invoca la constructor de la clase.

Sintaxis:

new NombreClase(part1,part2);

Esta instacia se asigna a una varible o constante

-Metodos de clase

se define dento de una clase y se asignan automaticamente en el "prototipo" del objeto. este permite que todas las estanciasa compartan el mismo metodo

Sintaxis: 

nombreMetodo() {
 
}

*/

//definir la clase mascota

class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  saludo(){
    console.log (`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`)
  }
}

/* 

Intancear la clase Mascota. Creamos un objeto con la plantilla mascota.

*/

let mascota1 = new Mascota ("Toby",5);
let mascota2 = new Mascota ("Max", 8);


console.log (mascota1.nombre);
console.log (mascota1.edad);

console.log (mascota2.nombre);
console.log (mascota2.edad);

/* lanzar los métodos de los objetos */

mascota1.saludo();
mascota2.saludo();