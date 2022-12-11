const divProductos = document.getElementById("divProductos")


const productosArray = [];


const consultarProductos = async () => {
    let res = await fetch("./json/productos.json")
    let response = await res.json()
    return response

};
consultarProductos().then(productos => {

    productos.forEach(producto => {
        productosArray.push(producto)
        divProductos.innerHTML += `
                  <div id= ${producto.id} class="card cardProducto">
                      <img src="./images/${producto.img}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">${producto.nombre}</h5>
                              <p class="card-text">Modelo: ${producto.modelo}</p>
                              <p class="card-text">Marca: ${producto.marca}</p>
                              <p class="card-text">Precio:$ ${producto.precio}</p>
                              
                              <button id= ${producto.id} class="btn btn-primary">Agregar al carrito</button>
                          </div>
                  </div>
                  `
    })

    const botonAgregar = document.querySelectorAll(".btn-primary")




    botonAgregar.forEach(boton => {
        boton.onclick = () => {
            // console.log("hiciste click")
            const productoSeleccionado = productosArray.find(prod => prod.id === parseInt(boton.id))
            // console.log(productoSeleccionado)
            const productoCarrito = { ...productoSeleccionado, cantidad: 1 };
            // console.log(productoSeleccionado, productoCarrito)
            const indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id)
            if (indexCarrito === -1) {
                carrito.push(productoCarrito)

            } else {
                carrito[indexCarrito].cantidad++
            }
            console.table(carrito)

            // localStorage.setItem("carrito", JSON.stringify(carrito))

            Toastify({
                text: "Producto agregado al carrito",
                duration: 1500,
                position: "center",
                style: {
                    background: "rgb(171, 181, 181)",
                }

            }).showToast();

            mostrarCarrito()
        }
    })

})
let carrito

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    mostrarCarrito()
})

const carritoStorage = JSON.parse(localStorage.getItem("carrito"))
if (carritoStorage) {
    carrito = carritoStorage
} else {
    carrito = []
}
// console.log(productosArray)



const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body")
    modalBody.innerHTML = ""
    carrito.forEach((prod) => {
        const { id, img, nombre, cantidad, precio } = prod
        // console.log(prod)
        modalBody.innerHTML += `
        <div class="carritoModal">
           
            <div>
                <p>Producto: ${nombre} </p>
                <p>precio: $${precio} </p>
                <p>Cantidad: ${cantidad}</p>
                    
                <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
            </div>
        </div>
`
    })

    if (carrito.length === 0) {
        modalBody.innerHTML = `
        <p class= "text-center text-primary parrafo"> El carrito esta vacio! </p>
        `
    }
    guardarStorage()
    carritoContenedor.textContent = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}
function eliminarProducto(id) {
    const carritoId = id
    carrito = carrito.filter((prod) => prod.id !== carritoId)
    console.log(carrito)
    mostrarCarrito()
}

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.querySelector("#precioTotal")
const procesarCompra = document.querySelector("#procesarCompra")
const botonFinalizar = document.querySelector("#finalizar");


vaciarCarrito.addEventListener("click", () => {
    carrito.length = []
    mostrarCarrito()
})
procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
        Swal.fire({
            title: "Tu carrito esta vacio!",
            text: "Elije un producto para continuar",
            icon: "error",
            confirmButtonText: "aceptar",
        })
    } else {
        const valores = carrito.map(prod => prod.precio * prod.cantidad)
        let totalCompra = 0
        valores.forEach(valor => {
            totalCompra += valor
        })
        Swal.fire(`El total de tu compra es: $${totalCompra}`)
        carrito.length = []
        mostrarCarrito()
    }

})


botonFinalizar.onclick = () => {
    const valores = carrito.map(prod => prod.precio * prod.cantidad)
    let totalCompra = 0
    valores.forEach(valor => {
        totalCompra += valor
    })
    if (carrito.length === 0) {
        Swal.fire({
            title: "Tu carrito esta vacio!",
            text: "Elije un producto para continuar",
            icon: "error",
            confirmButtonText: "aceptar",
        })
    } else {
        Swal.fire(`Gracias por tu compra, el total es: $ ${totalCompra}.-`)
        localStorage.clear()
        carrito.length = []

    }
    mostrarCarrito()

}









