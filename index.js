// si la compra supera los 2000 pesos, se aplica un 10% de descuento


// let producto = parseInt(prompt(`Hola ${nombre} escoge el producto que deseas comprar: 1.Velas - 2.Fanales - 3.Sahumerios - 4-Velones`))

// let totalCompra = 0
// let seguirComprando = true
// let decision
// while (seguirComprando === true) {
//     if (producto === 1) {
//         totalCompra = totalCompra + 500
//     } else if (producto === 2) {
//         totalCompra = totalCompra + 1000
//     } else if (producto === 3) {
//         totalCompra = totalCompra + 800
//     } else if (producto === 4) {
//         totalCompra = totalCompra + 1500
//     } else {
//         producto = parseInt(prompt("Escoge un producto de la lista : 1. Velas - 2. Fanales - 3. Sahumerios - 4. - Velones"))
//         continue
//     }
//     decision = parseInt(prompt("Quieres seguir comprando? 1.SI - 2.NO"))
//     if (decision === 1) {
//         producto = parseInt(prompt("Escoge el producto que deseas comprar: 1.Velas - 2.Fanales - 3.Sahumerios - 4-Velones"))
//     } else {
//         seguirComprando = false
//     } 
// }






let nombre = prompt("Bienvenid@ a mi sitio de Attrezzos, cual es tu nombre?")


class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    restaStock() {
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`)
    }
}

const producto0 = new Producto(0, "velas", 500, 100);
const producto1 = new Producto(1, "Fanales", 1000, 50);
const producto2 = new Producto(2, "Sahumerios", 800, 100);
const producto3 = new Producto(3, "Velones", 1500, 50);

const productos = [producto0, producto1, producto2, producto3];

const carrito = []

let productosOfrecidos = `Hola ${nombre} Estos son los productos que tenemos para vos: ` 


function agregarCarrito() {
    for (item of productos) {
        productosOfrecidos += ` \n ${item.id} - ${item.nombre} a $ ${item.precio}`
    }

    productosOfrecidos += "\n Ingrese el item correspondiente al producto que desea comprar. Para finalizar ingrese 99"

    let respuesta = parseInt(prompt(productosOfrecidos))

    while (isNaN(respuesta)) {
        alert("Ingrese un número válido")
        respuesta = parseInt(prompt(productosOfrecidos))
    }
    while (respuesta != 99) {
        switch (respuesta) {
            case 0:
                carrito.push(productos[0])
                alert(`Agregamos al carrito el producto ${productos[0].nombre}`)
                productos[0].restaStock()
                break;

            case 1:
                carrito.push(productos[1])
                alert(`Agregamos al carrito el producto ${productos[1].nombre}`)
                productos[1].restaStock()
                break;
            case 2:
                carrito.push(productos[2])
                alert(`Agregamos al carrito el producto ${productos[2].nombre}`)
                productos[2].restaStock()
                break;

            case 3:
                carrito.push(productos[3])
                alert(`Agregamos al carrito el producto ${productos[3].nombre}`)
                productos[3].restaStock()
                break;
            default:
                alert("Producto inexistente")
                break;
        }
        respuesta = parseInt(prompt(productosOfrecidos))
    }
    alert("Cerramos tu pedido")
    mostrarCarrito()
}

let productosCarrito = "Tu pedido es: "
let precioCarrito = 0

agregarCarrito()


function mostrarCarrito() {
    for (itemsElegidos of carrito) {
        productosCarrito += `\n - ${itemsElegidos.nombre}`
        precioCarrito += itemsElegidos.precio
    }
}

alert(`Resumen de ${productosCarrito} \n por un total de $ ${precioCarrito}`)

function descuento(precioCarrito) {
    let resultado = precioCarrito * 0.9
    alert(`${nombre} Gracias por pensar en mis attrezzos para regalar-te. Te doy un 10% de descuento en tu compra y el total es $ ${resultado}`)
}

if (precioCarrito >= 2000) {
    descuento(precioCarrito)

} else {

    alert(`${nombre} El total de tu compra es ${precioCarrito}`)
}
console.table(productos)