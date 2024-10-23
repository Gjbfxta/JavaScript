/* 

Funciones 
Son bloques de código reutilizables, ya que realiza una tarea especifica.
Se define una funcion una sola vez y se usa siempre que se necesite.
  
  Definir: creamos una funcion
  Invocan: Llamamos la funcion cuando quieremos que se nos ejecute un codigo es decir qie haga su tarea.
  Retorna: Puede devolver un resultado la funcion (opcional).

Sintaxis
funcion nombreFunciones(param1, param2) {
//codigo que se va ejecurtar (CUERPO DE LA FUNCION)
retunr resultado;
}

  Funcion-> La palabra clave para declarar una función.
  
  cuerpo de la funcion que se ejecuta y realiza la tarea de la función.
  return ->devuelve o retorna un resultado. (opcional)

*/

function saludo(){
  console.log("Hola nariz de bola")
}
/* saludo(); */
function saludopersoanlizado(nombre){
  console.log(`¡Hola queride ${nombre },Tienes nariz de bola! xd`)
}

/* saludopersoanlizado("Lili")
saludopersoanlizado("Bebe")
saludopersoanlizado("Yattito") */

function sumar(a, b){
  return a+ b
}

let resultado = sumar (15, 20)
console.log(resultado * 5)