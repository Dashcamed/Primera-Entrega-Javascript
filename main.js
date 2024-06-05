const miPanaderia = () => {
    let producto = "";
    let precio = 0;
    let cantidad = 0;
    let cantidadTotal = 0;
    let seguirComprando = (false);
    let precioTotal = 0;

    alert('Bienvenido a Panaderia las Margaritas 🥖🫓. \nHoy tenemos una promoción: Si llevas 5 kg o más de cualquier producto, lleva un 5% de descuento en el total de tu compra 😉.')
    do{
        producto = prompt("Tenemos para ofrecerte: \n- marraqueta \n- hallulla \n- ciabatta. \n¿Cuál deseas llevar?");
        cantidad = Number(prompt("¿Cuantos kg de pan quieres? \n(Si deseas menos de un kilo, agrega la cantidad así (0.5) = equivale a 500 gramos)."))

        while (Number.isNaN(cantidad) || cantidad <= 0) {
            alert('debes ingregar una cantidad válida')
            cantidad = Number(prompt("¿Cuantos kg de pan quieres? \n(Si deseas menos de un kilo, agrega la cantidad así (0.5) = equivale a 500 gramos)."));
        }

        switch (producto) {
            case "marraqueta":
                precio = 2300;
            break;
            case "hallulla":
                precio = 2500;
            break;
            case "ciabatta":
                precio = 4500;
            break;
            default:
                alert("el producto ingresado no existe, ingresa solo los productos mencionados");
                precio=0;
                cantidad=0;
        }
        if (cantidad >= 5) {
            precioTotal += (precio*cantidad) *0.95
        } else {
            precioTotal += precio*cantidad;
        }
        precioMasIva = precioTotal*1.19;
        cantidadTotal += cantidad;

        seguirComprando = confirm('¿quieres agregar algo más?');

    } while (seguirComprando);

    alert(`Ha comprado ${cantidadTotal} kg de pan, \nEl total sin impuesto  es $${precioTotal}. \ny con el impuesto incluido (IVA 19%) será $${Math.round(precioMasIva)}.`);
    alert('¡Gracias por comprar, que vuelvas pronto 😊!')
};

miPanaderia();