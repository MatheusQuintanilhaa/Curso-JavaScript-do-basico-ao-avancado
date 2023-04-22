// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
//Os métodos só devem aceitar dois parametros;
// Utilize cada um dos métodos e imprima os valores no console;

let calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multiplicar: function (a, b) {
        return a * b;
    },
    dividir: function (a, b) {
        return a / b;
    }
};

console.log(calculadora.soma(10,5));
console.log(calculadora.subtrair(50,5));
console.log(calculadora.multiplicar(70,8));
console.log(calculadora.dividir(150,10));