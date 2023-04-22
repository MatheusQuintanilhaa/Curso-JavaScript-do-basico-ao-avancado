let sku = "34";

console.log(sku.padStart(6, "0"));


let sku2 = "78965"

console.log(sku2.padStart(6, "3"));


let skuPedidos = ['10', '11', '12', '13', '14', '15'];

skuPedidos.forEach(sku => { console.log('Os nº dos pedidos são: #' + sku.padStart(3, '0')) })


let skuSenha = ["1", "2", "3", "4", "5"];

skuSenha.forEach(sku => {
    console.log("O numero da senha é #" + sku.padStart(2,"0"));
})