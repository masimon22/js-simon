// si la compra supera los 2000 pesos, se aplica un 10% de descuento

let seguirComprando = true
let totalCompra = 0
let decision


let nombre = prompt("Bienvenid@ a mi sitio de Attrezzos, cual es tu nombre?")
let productoSeleccionado = parseInt(prompt(`Hola ${nombre} Escoge el producto que deseas comprar: 1.velas - 2.fanales - 3.sahumerios - 4.velones`))

//agrego un array de productos
const productosArray = []


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

const velas = new Producto(1, "velas", 500, 100);
productosArray.push(velas)
const fanales = new Producto(2, "Fanales", 1000, 50);
productosArray.push(fanales)
const sahumerios = new Producto(3, "Sahumerios", 800, 100);
productosArray.push(sahumerios)
const velones = new Producto(4, "Velones", 1500, 50);
productosArray.push(velones)


const carrito = []
while (isNaN(productoSeleccionado)) {
            alert("Ingrese un número válido")
            productoSeleccionado = parseInt(prompt("Escoge el producto que deseas comprar: 1.velas - 2.fanales - 3.sahumerios - 4.velones"))
        }

while (seguirComprando === true) {
    const producto = productosArray.find((prod) => prod.id === productoSeleccionado)
    if (producto) {
        carrito.push(producto)
        producto.restaStock()
    }
    decision = parseInt(prompt("Quieres seguir comprando? 1.SI - 2.NO"))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt("Escoge el producto que deseas comprar: 1.velas - 2.fanales - 3.sahumerios - 4.velones"))
    } else if (decision === 2){
        seguirComprando = false
        
    } else {
        alert("Ingrese un número válido")
        
    }

}
carrito.forEach(producto => { totalCompra = totalCompra + producto.precio })

console.table(carrito)

alert(`El total de tu compra es $${totalCompra}`)

function descuento(totalCompra) {
    let resultado = totalCompra * 0.9
    alert(`${nombre} Gracias por pensar en mis attrezzos para regalar-te. Te doy un 10% de descuento en tu compra y el total es $ ${resultado}`)
}

if (totalCompra >= 2000) {
    descuento(totalCompra)

} else {

    alert(`${nombre} Gracias por pensar en mis attrezzos`)
}