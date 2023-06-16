const cachorro = {
  raca: 'SRD',
  uivar: function () {
    console.log('Auuuuuu');
  },
  rosnar: function () {
    console.log('grrrr');
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return "A raça é " + this.raca;
  },

  setSize: function (size) {
    this.size = size
  },

  getSize: function () {
    return "O tamanho do cachorro é " + this.size;
  }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

cachorro.getRaca;

console.log(cachorro.getRaca());

cachorro.setSize('175')
console.log(cachorro.size);

console.log(cachorro.getSize());



const  animal  = {
  _racas : [1,2,3,4,5,6,7,8,9,10,18,70],


}

animal._racas.unshift(50,70)
console.log(animal)

