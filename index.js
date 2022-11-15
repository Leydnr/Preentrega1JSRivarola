/*SEGUNDA PREENTREGA JS
Empezar con carrito de compras para incluirlo al proyecto final de DW
*/
function saludoGenerico() {
    let nombreUsuario = prompt("Cual es tu nombre")
    let apellidoUsuario = prompt("Cual es tu apellido")
    let aniosUsuario = parseInt(prompt("Cuantos años tenés"))
    alert(`Hola ${nombreUsuario} ${apellidoUsuario}`)
}
alert("Bienvenido")
saludoGenerico()

const carrito = []
let producto = parseInt(prompt('Elige el que deseas comprar: 0.Las Tortugas - 1.Don Nicanor - 2.Patrimonial - 3.Nieto Senetiner'))

let totalCompra = 0
let seguirEligiendo = true
let decision

const stock = []

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const lasTortugas = new Producto(0, 'Las Tortugas', 1000, 15);
stock.push(lasTortugas)
const donNicanor = new Producto(1, 'Don Nicanor', 1200, 30);
stock.push(donNicanor)
const patrimonial = new Producto(2, 'Patrimonial', 1500, 40);
stock.push(patrimonial)
const nietoSenetiner = new Producto(3, 'Nieto Senetiner', 2000, 10);
stock.push(nietoSenetiner)

const productos = [lasTortugas, donNicanor, patrimonial, nietoSenetiner];


while (seguirEligiendo === true) {
    if (producto === 1) {
        totalCompra = totalCompra + lasTortugas.precio
    } else if (producto === 2) {
        totalCompra = totalCompra + donNicanor.precio
    } else if (producto === 3) {
        totalCompra = totalCompra + patrimonial.precio
    } else if (producto === 4) {
        totalCompra = totalCompra + nietoSenetiner.precio
    } else {
        producto = parseInt(prompt('Elige el que deseas comprar: 1.Las Tortugas - 2.Don Nicanor - 3.Patrimonial - 4.Nieto Senetiner'))
        continue
    }
    decision = parseInt(prompt('Queres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(prompt('Elige el que deseas comprar: 1.Las Tortugas - 2.Don Nicanor - 3.Patrimonial - 4.Nieto Senetiner'
        )
        )
    } else {
        seguirEligiendo = false
    }

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
    const prodManual = new Producto (4, prodNombre, prodPrecio, prodStock)

    productos.push(prodManual)
    agregarCarrito()
}

creaProducto()
