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
    restaStock(){
        this.stock = this.stock - 1;
        console.log(`El Stock de ${this.nombre} ha sido actualizado`)
    }
}

const lasTortugas = new Producto(0, 'Las Tortugas', 1000, 15);
const donNicanor = new Producto(1, 'Don Nicanor', 1200, 30);
const patrimonial = new Producto(2, 'Patrimonial', 1500, 40);
const nietoSenetiner = new Producto(3, 'Nieto Senetiner', 2000, 10);

const productos = [lasTortugas, donNicanor, patrimonial, nietoSenetiner];
console.log(productos)
const carrito = []

let productosOfrecidos = "Tenemos para ofrecerle: "

function validaDato(respuestaUsuario){
    while(isNaN(respuestaUsuario)){
        alert("Por favor ingrese sólo números")
        respuesta = parseInt(prompt(productosOfrecidos)) 
    }
    return respuesta
}
function agregaCarrito(){
    for (item of productos){
        productosOfrecidos +=  ` \n ${item.id} - ${item.nombre} a tan solo $ ${item.precio}`
    }

    productosOfrecidos += `\n Ingrese el nro de Item que desea agregar a su carrito. Para finalizar ingrese 10`

    let respuesta = parseInt(prompt(productosOfrecidos)) 


    let respuestaValidada = validaDato(respuesta)

    while(respuestaValidada != 10){
      
        switch(respuestaValidada){
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
                alert(`No lo tenemos en stock `)
                break;
        }
        respuesta = parseInt(prompt(productosOfrecidos))
    }
    alert("Cerramos tu pedido")
    mostrarCarrito()
}   
let productosCarrito = `Vas a llevar: `
let precioCarrito = 0
agregaCarrito()

function mostrarCarrito(){
    for (itemsElegidos of carrito){
        productosCarrito += `\n - ${itemsElegidos.nombre}`
        precioCarrito += itemsElegidos.precio
    }

    alert(`Repasemos: \n ${productosCarrito} \n Por un total de ${precioCarrito}`)
}


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
    agregaCarrito()
}



creaProducto()
