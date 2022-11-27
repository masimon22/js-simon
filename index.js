
const productosArray = [];

class Producto {
    constructor(id, nombre, precio, stock, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
    restaStock() {
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`)
    }

};

const velas = new Producto(1, "velas", 500, 100, src = "images/vela.jpg");
productosArray.push(velas)
const fanales = new Producto(2, "difusor", 1000, 50, src = "images/difusor.jpg");
productosArray.push(fanales)
const sahumerios = new Producto(3, "Sahumerios", 800, 100, src = "images/sahumerio.jpg");
productosArray.push(sahumerios)
const velones = new Producto(4, "maceta", 1500, 50, src = "images/maceta.jpg");
productosArray.push(velones)

// console.table(productosArray)

const divProductos = document.getElementById("divProductos");

productosArray.forEach(producto => {
    divProductos.innerHTML += `
    <div id="${producto.id}" class="card cardProd" style="width: 18rem;">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}.-</p>
      <button id="${producto.id}" class="btn btn-primary">AGREGAR</button>
    </div>
  </div>

`
})
let carrito
const carritoStorage = JSON.parse(localStorage.getItem("carrito"))
if (carritoStorage) {
    carrito = carritoStorage
} else {
    carrito = []
}

const botonAgregar = document.querySelectorAll(".btn-primary")
// console.log(botonAgregar);

botonAgregar.forEach(boton => {
    boton.onclick = () => {
        const productoSeleccionado = productosArray.find(prod => prod.id === parseInt(boton.id))
        
        // console.log(productoSeleccionado);

        const productoCarrito = { ...productoSeleccionado, cantidad: 1 };
        // console.log(productoSeleccionado, productoCarrito);

        const indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id)
        if (indexCarrito === -1) {
            carrito.push(productoCarrito)


        } else {
            carrito[indexCarrito].cantidad++
        }

        console.table(carrito)

        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
})

const botonFinalizar = document.getElementById("finalizar");
botonFinalizar.onclick = () => {
    const valores = carrito.map(prod => prod.precio * prod.cantidad)
    let totalCompra = 0
    valores.forEach(valor => {
        totalCompra += valor
    })
    console.log(totalCompra)

    let valorCompra = `El total de tu compra es: $ ${totalCompra}.-`

    console.log(valorCompra)

}   
