// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// Faça uma função que verifica o numero de elementos;
// Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos";

let elements = ["Celular", "Televisão", "AirFrayer", "Ventilador", "Geladeira", "Vaso Sanitário", "Choveiro"];

let brands = ["Nike", "Adidas", "Puma", "Reebok"];

// function verifyElements(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i].length);
//     }
//     if (args.length <= 5) {
//         console.log("Poucos elementos");
//     } else {
//         console.log("Muitos elementos");
//     };
// }

// verifyElements(elements);
// verifyElements(brands);


function verifyElements(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
};

verifyElements(elements);
verifyElements(brands);