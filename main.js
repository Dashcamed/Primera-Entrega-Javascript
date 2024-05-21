//Calculadora de compras de proveedores con unidades y precios netos. Esta calculadora permite ingresar los datos de una compra hacia un proveedor siendo empresa y permitirá calcular el precio que le tengo que pagar al proveedor en (neto) y el impuesto que deberia pagar a impuestos internos por conceptos de IVA. En Chile es común pagar al proveedor en neto y vender con iva incluido para así restar el IVA Credito del iva Debito y bajar la carga tributaria.

const calculadoraDeComprasProveedores = () => {

const reciboDePago = [];

while (true) {
    const producto = prompt('Ingresa un producto (o escribe "fin" para terminar):');
    if (producto.toLowerCase() === 'fin') {
    break;
    }
    const precio = parseFloat(prompt(`Ingresa el precio NETO unitario del ${producto} (en pesos chilenos):`));
    const cantidad = Number(prompt(`Ingresa cantidades compradas por Kg o Un de ${producto} (si compras menos de 1 kg ingresa el valor en decimales con un punto ej: 0.5)`));

    const costoTotal = precio * cantidad;
    reciboDePago.push({ producto, precio, cantidad, costoTotal });
}

console.log('Detalle proveedor:');
for (const item of reciboDePago) {
console.log(`${item.producto} - Precio: ${item.precio} CLP - Cantidad: ${item.cantidad} - Costo total: ${item.costoTotal} CLP`);
}

let suma = 0;
for (let i = 0; i < reciboDePago.length; i++) {
    suma += reciboDePago[i].costoTotal;
}
console.log('Total neto: '+ suma);

let totalMasIva = 0;
totalMasIva = suma * 1.19;
console.log('Total bruto: '+ totalMasIva);

let totalImpuestoAPagar = 0;
totalImpuestoAPagar = suma * 0.19;
console.log('Impuesto por pagar: '+ totalImpuestoAPagar)

}

calculadoraDeComprasProveedores();