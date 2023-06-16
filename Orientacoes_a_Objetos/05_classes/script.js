let cachorro = {
  patas: 4,
  raca: 'SRD',
  latir: function () {
    console.log(' Au Au');
  }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = 'Labrador'

// console.log(labrador.raca);
// console.log(cachorro.raca);

let bulldog = Object.create(cachorro);

bulldog.latir();

bulldog.raca = "Bulldog Francês"

console.log(bulldog.raca);


let animais = {
  predador: "tubarão",
  rei: "leão",
  peconhento: "cobra",

  cuidado: function () {
    console.log("perigo");
  }
}

console.log(animais.predador);

let felino = Object.create(animais)

felino.cuidado();

felino.predador = "tigre"

console.log(felino.predador);
