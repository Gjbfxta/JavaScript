/* 

instrucciones condicionales if / else / else if

 Crear una variable y asignar una valor nuemerico
 2. Con la sentencia if y else, ebvaluar el valor de la variable dia con los siguientes comentarios

 -> dia = 1 // lunes
 -> dia = 2 // martes
 -> dia = 3 // miercoles
 -> dia = 4 // jueves
 -> dia = 5 // viernes
 -> dia = ? // valor no valido

   else if e if evaluan lo verdaero
   else para que no entren ninguna de las condiciones anteriores // falso

*/

/* let dia = 9;
if (dia === 1){
  console.log ("lunes")
} else if (dia === 2){
  console.log ("martes")
}  else if (dia === 3){
  console.log ("miercoles")
} else if (dia === 4){
  console.log ("jueves")
} else if (dia === 5){
  console.log ("viernes")
} else { 
  console.log ("dia no valido")
} */
  
/* 

Es una estructura de control de flujo condiconal, pero se utiliza cuando teenmos casos posibles para evaluar una expresion.
Es mas eficiente y legible en situaciones donde se requiere comparar una sola variable con varias valores posibles.
sinatxis:

switch (expresion){
 case valor1:
  // codigo que se ejecuta
  brake;
  case valor2:
  // codigo que se ejecuta
  brake;case valor3:
  // codigo que se ejecuta
  brake;
  default: 
  // codigo que se ejecuta por default
}

*/

let dia = 9;

switch (dia) {
 case 1:
  console.log ("lunes")
  break;
  case 2:
  console.log ("martes")
  break;
  case 3:
  console.log ("miercoles")
  break;
  case 4:
  console.log ("jueves")
  break;
  case 5:
  console.log ("viernes")
  break;
  default:
    console.log ("dia no valido")
}

let pokemon = "kn";
switch (pokemon){
  case "pikachu":
    console.log (`tu pokemon es ${pokemon} y es de tipo electrico!`)
    break;
  case "charmander":
    console.log (`tu pokemon es ${pokemon} y es de tipo fuego!`)
    break;
  case "venusaur ex":
    console.log (`tu pokemon es ${pokemon} y es de tipo natural!`)
    break;
  default:
    console.log (`Quien es ese ${pokemon}??? No es un pokemon`)
}
  