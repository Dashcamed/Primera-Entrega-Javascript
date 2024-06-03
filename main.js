//Calculadora de compras de proveedores con unidades y precios netos. Esta calculadora permite ingresar los datos de una compra hacia un proveedor siendo empresa y permitirá calcular el precio que le tengo que pagar al proveedor en (neto) y el impuesto que deberia pagar a impuestos internos por conceptos de IVA. En Chile es común pagar al proveedor en neto y vender con iva incluido para así restar el IVA Credito del iva Debito y bajar la carga tributaria.

// const calculadoraDeComprasProveedores = () => {
// alert("Bienvenido a Calculadora de compras de proveedores con unidades y precios netos. Esta calculadora permite ingresar los datos de una compra hacia un proveedor siendo empresa y permitirá calcular el precio que le tengo que pagar al proveedor en (neto) y el impuesto que deberia pagar a impuestos internos por conceptos de IVA. En Chile es común pagar al proveedor en neto y vender con iva incluido para así restar el IVA Credito del iva Debito y bajar la carga tributaria.")
//     const reciboDePago = [];

//         while (reciboDePago) {
//         const producto = prompt('Ingresa un producto (o escribe "fin" para terminar):');

//         if (producto.toLowerCase() === 'fin') {
//             break;
//         };
//         const precio = parseFloat(prompt(`Ingresa el precio NETO unitario del ${producto} (en pesos chilenos):`));
//         const cantidad = Number(prompt(`Ingresa cantidades compradas por Kg o Un de ${producto} (si compras menos de 1 kg ingresa el valor en decimales con un punto ej: 0.5)`));

//         const costoTotal = precio * cantidad;
//         reciboDePago.push({ producto, precio, cantidad, costoTotal });
//     };

//     let suma = 0;
//     for (let i = 0; i < reciboDePago.length; i++) {
//     suma += reciboDePago[i].costoTotal;
//     };

//     console.log('Detalle proveedor:');
//     for (const item of reciboDePago) {
//         console.log(`${item.producto} - Precio: ${item.precio} CLP - Cantidad: ${item.cantidad} - Costo total: ${item.costoTotal} CLP`);
//     };
//     console.log('Total neto: '+ suma + ' CLP');

//     let totalMasIva = 0;
//     totalMasIva = suma * 1.19;
//     console.log('Total bruto (IVA 19%): '+ totalMasIva + ' CLP');

//     let totalImpuestoAPagar = 0;
//     totalImpuestoAPagar = suma * 0.19;
//     console.log('Impuesto por pagar: '+ totalImpuestoAPagar + ' CLP');

//     for (const item of reciboDePago) {
//         alert(`${item.producto} - Precio: ${item.precio} CLP - Cantidad: ${item.cantidad} - Costo total: ${item.costoTotal} CLP`);
//     };

//     alert('Total neto: ' + suma + ' CLP ' + '-' +' Total bruto (IVA 19%) : '+ totalMasIva + ' CLP ' + '-' +' Impuesto por pagar: '+ totalImpuestoAPagar + ' CLP ');

// };

// calculadoraDeComprasProveedores();

// version 2.0 aplicando arrays y estructura do while

// const acumuladorDeCompras = () => {
//     do{
//     seguirComprando = (true);
//     const compras = [
//         {   producto: prompt('ingresa un producto'),

//             precio: parseFloat(prompt('ingresa su precio neto')),

//             cantidad: Number(prompt('ingresa la cantidad en kg o unidades. Para productos de menos de 1Kg agregar el valor en decimales ejemplo: 0.5kg'))}
//         ];
//         compras.push();
//         const nombresProductos = [];
//         compras.forEach((id) => {
//             nombresProductos.push(id.producto);
//         });
//         console.log(nombresProductos);

//         const preciosProductos = [];
//         compras.forEach((pre) => {
//             preciosProductos.push(pre.precio);
//         });
//         console.log(preciosProductos);

//         compras.forEach((elemento) => {
//             console.log(elemento.producto);
//             console.log('$' + elemento.precio + ' CLP');
//             console.log('cantidad: ' + elemento.cantidad);

//         const resultado = compras.find((compra) => compra.producto == 'pollo');
//         console.log(resultado);

//         const filtro = compras.filter ((compra) => compra.precio < 1000);
//         console.log(filtro);
//         });
//     } while (producto = confirm('¿desea ingresar otro producto?'));
// };
// acumuladorDeCompras();



// calculadoras de chefs planner

const unidades = (1);
const peso = (360);
const receta = [
    {ingrediente: 'harina', porcentaje:100},
    {ingrediente: 'sal', porcentaje:2},
    {ingrediente: 'agua', porcentaje:60},
    {ingrediente: 'masa madre', porcentaje:20},
    {ingrediente: 'levadura', porcentaje:10},
];

const sumaPorcentaje = receta.reduce((acumulador, item) => acumulador + item.porcentaje, 0);
console.log (sumaPorcentaje);

const porcentajes = [];
receta.forEach((numero) => {
    porcentajes.push(numero.porcentaje);
});

console.log(porcentajes);

const celda1 = porcentajes[0];
const celda2 = porcentajes[1];
const celda3 = porcentajes[2];
const celda4 = porcentajes[3];
const celda5 = porcentajes[4];

const totalCelda1 = ((peso / sumaPorcentaje) * (celda1 * unidades));
console.log(totalCelda1);
const totalCelda2 = ((peso / sumaPorcentaje) * (celda2 * unidades));
console.log(totalCelda2);
const totalCelda3 = ((peso / sumaPorcentaje) * (celda3 * unidades));
console.log(totalCelda3);
const totalCelda4 = ((peso / sumaPorcentaje) * (celda4 * unidades));
console.log(totalCelda4);
const totalCelda5 = ((peso / sumaPorcentaje) * (celda5 * unidades));
console.log(totalCelda5);

const pesoTotalReceta = (totalCelda1 + totalCelda2 + totalCelda3 + totalCelda4 + totalCelda5);
console.log(pesoTotalReceta);