// si la compra supera los 2000 pesos, se aplica un 10% de descuento

let nombre = prompt("Bienvenid@ a mi sitio de Attrezzos, cual es tu nombre?")

let producto = parseInt(prompt(`Hola ${nombre} escoge el producto que deseas comprar: 1.Velas - 2.Fanales - 3.Sahumerios - 4-Velones`))

let totalCompra = 0
let seguirComprando = true
let decision
while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 500
    } else if (producto === 2) {
        totalCompra = totalCompra + 1000
    } else if (producto === 3) {
        totalCompra = totalCompra + 800
    } else if (producto === 4) {
        totalCompra = totalCompra + 1500
    } else {
        producto = parseInt(prompt("Escoge un producto de la lista : 1. Velas - 2. Fanales - 3. Sahumerios - 4. - Velones"))
        continue
    }
    decision = parseInt(prompt("Quieres seguir comprando? 1.SI - 2.NO"))
    if (decision === 1) {
        producto = parseInt(prompt("Escoge el producto que deseas comprar: 1.Velas - 2.Fanales - 3.Sahumerios - 4-Velones"))
    } else {
        seguirComprando = false
    } 
}



function descuento(totalCompra) {
    let resultado = totalCompra * 0.9
    alert(`${nombre} Gracias por pensar en mis attrezzos para regalar-te. Te doy un 10% de descuento en tu compra y el total es $ ${resultado}`)
}

if (totalCompra >= 2000) {
    descuento(totalCompra)

} else {

    alert(`${nombre} El total de tu compra es ${totalCompra}`)
}
