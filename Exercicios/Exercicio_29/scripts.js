// Adicione a propriedade janelas no ônibus com valor de 20;
// Delete a propriedade rodas;
// imprima a propriedade janelas no console;


let onibus = {
    rodas: 8,
    limiteDePassageiros: 40,
    portas: 2,
};

delete onibus.rodas;
console.log(onibus.rodas);

onibus.janelas = 20;
console.log(onibus.janelas);

console.log(onibus);