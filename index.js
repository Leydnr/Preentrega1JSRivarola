/*TERCERA PREENTREGA JS
Empezar con carrito de compras para incluirlo al proyecto final de DW
*/
// function saludoGenerico() {
// let nombreUsuario = prompt("Cual es tu nombre")
// let apellidoUsuario = prompt("Cual es tu apellido")
// alert(`Hola ${nombreUsuario} ${apellidoUsuario}`)
// }
// alert("Bienvenido")
// saludoGenerico()

class Produc {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = this.imagen;
    }
}

const producto0 = new Produc(0, 'Las Tortugas', 1000, 15,"");
const producto1 = new Produc(1, 'Don Nicanor', 1200, 30,"");
const producto2 = new Produc(2, 'Patrimonial', 1500, 40,"");
const producto3 = new Produc(3, 'Nieto Senetiner', 2000, 10,"");

const productos = [producto0, producto1, producto2, producto3];


const divProductos = document.getElementById('divProductos')
productos.forEach(producto => {
    divProductos.innerHTML += `
    <div id="${producto.id}" class="card cardProd" >
    <img src="..." class="card-img-top" alt="">
    <div class="card-body">
    <h2 class="card-tittle">${producto.nombre}</h2>
    <p class="card-text">${producto.precio}</p>
    <button id=${producto.id} class="btn btn-primary">AGREGAR</button>
    </div>
    </div> 
    `
})

const carrito = JSON.parse (localStorage.getItem('carrito')) || []
console.log(carrito)

const botonesAgregar = document.querySelectorAll('.btn-primary')
// console.log(botonesAgregar)

botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const productoSeleccionado = productos.find(prod => prod.id === parseInt(boton.id))
        console.log(productoSeleccionado)

        const productoCarrito = { ...productoSeleccionado, cantidad: 1 }
        console.log(productoSeleccionado, productoCarrito)

        const indexCarrito = carrito.findIndex(
            (prod) => prod.id === productoCarrito.id
        )
        if (indexCarrito === -1) {
            carrito.push(productoCarrito)
        } else {
            carrito[indexCarrito].cantidad++
        }
        localStorage.setItem('carrito',JSON.stringify(carrito))
        console.log(carrito)
    }

})

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = ()=> {
    const valores = carrito.map(prod=>prod.precio * prod.cantidad)
    const totalCompra = 0
    valores.forEach(valor=>{
        totalCompra += valor
    })
    console.log(totalCompra)
    console.log(valores)

}
alert(`El total se tu compra es ${totalCompra}`)





function creaProducto() {
    let prodNombre = prompt("Nombre del producto a crear")
    let prodPrecio = parseInt(prompt("Valor del producto a crear"))
    let prodStock = parseInt(prompt("Cantidad del producto a crear"))
    while (prodNombre == "" || isNaN(prodPrecio) || isNaN(prodStock)) {
        alert("Alguno de los datos no es válido, reintente.")
        prodNombre = prompt("Nombre del producto a crear")
        prodPrecio = parseInt(prompt("Valor del producto a crear"))
        prodStock = parseInt(prompt("Cantidad del producto a crear"))
    }
    const prodManual = new Producto(4, prodNombre, prodPrecio, prodStock)

    productos.push(prodManual)

}
//creaProducto()
