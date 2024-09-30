/* Son simbolos utilizados para realizar openaciones sobre valores y variables

1. Aritmeticos
2.Asignación
3.Comparación */
/* 
Operadoreres Aritmeticos
  se utilizan calculos matematicos
*/
// Suma (+) suam dos valores
let suma = 20 + 16;
console.log(suma);
// resta (-)

let resta = 25 - 46;
console.log(resta);

// Multiplicaccion (*)

let multiplicacion = 25 * 46;
console.log(multiplicacion);

//Divisoin (/)

let division = 32 / 4;
console.log (division);

//Modulo(%) devuelve el resto de la division de los valores.

let mod = 7 % 3;
console.log(mod);

// Exponentes (**)
let expo = 4 ** 15;
console.log (expo)

//incremento (++) por una unidad
let x = 15;
x ++;
console.log (x);

//Decremento (--)
let y = 4;
y --;
console.log(y)


/*

2. Asignación

  Estos operadores asignan o reasigan un valor a una variable.

*/

// Asignación (=): Asigna un valor a una variable.

let w = 95;

// Asignación con suma (+=): Suma el valor de una variable y la reasigna.

w += 56; 
console.log(w);

// Asignación con resta (-=): Resta el valor a una variable y la reasigna.

w -=34; 
console.log(w);

// Asignación con Multiplicación (*=):Multiplica una variable por un valor y la asigna

w *=5; // 70
console.log(w);

// Asignación con división (/=): Divide una varible con un valor y la reasinga.

w /=22;
console.log(w);

/* 

3. Comparación

  Estos operadores comparan dos valores y devuelven 'true' o 'false'.

*/

// Igualdad (==): Compara dos valores para ver si son iguales. NOTA: Sin tomar en cuenta el tipo de dato.

let valorUNO = "2";
let compara = 2 == valorUNO;

console.log(compara) // true

// Igualdad estricta (===): Compara dos valore y su tipo, para ver si son exactamente iguales.

compara = 2 === valorUNO;

console.log(compara) // false

// Desigualdad (!=): Verificar si dos valores no son iguales. NOTA: No tom en cuenta el tipo de dato.

let valorDOS = "40";
let valorTRES = 40;

console.log(valorDOS != valorTRES);

// Desiguladd estricta (!==) Verifica si dos valores y sus tipos no son exactamente sus iguales.

valorDOS = "40";
valorTRES = 40;

console.log(valorDOS !== valorTRES) // True

// Mayor que (>): Verifica si el primer valor es mayor que el segundo.

compara = 2 > 4;

console.log(compara); // false

// Mayor o igual que (>=): Verifica si el primer valor es mayor o igual que el segundo.

compara = 4 >= 4;

console.log(compara); // true

// Menor que (<): Verifica si el primer valor es menor que el segundo

let Dimitri = 30;
let SuCrush = 8;

console.log (SuCrush < Dimitri); // true
console.log(10 < 6); // false

// Menor o igual que (<=): Verifica si el primer valro es menor o igual que el segundo valor

console.log(5 <= 20); //true
console.log(40 <= 150); //true
console.log(58 <= 6); // false
console.log(4 <= 4); // true

