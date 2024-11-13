class Arma {
  constructor(nombre, tipo,daño){
    this.nombre = nombre;
    this.tipo =tipo;
    this.daño = daño;
  }
  decribir(){
    console.log (`Arma:${this.nombre} Tipo:${this.tipo} Daño:${this.daño}`)
  }
}

let arsenal = {
  armas:[],
  agregarArma: function (arma){
    this.armas.push(arma);
  }
}


let arma1 = new Arma ("Calibre 50","Armas de fuego corta",500 ); 
let arma2 = new Arma ("Fuegolata","Armas de fuego larga",422 );
let arma3 = new Arma ("boomclap","Cañon",10000);

console.log (arma1);
console.log (arma2);
console.log (arma3);

arsenal.agregarArma (arma1)
arsenal.agregarArma (arma2)
arsenal.agregarArma (arma3)
 
for(let i = 0; i < arsenal.armas.length; i++){
  arsenal.armas[i].describir();
}
