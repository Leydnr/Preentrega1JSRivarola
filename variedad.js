const stockProductos = [
    {
        id: 1,
        nombre: "imagenes/icono-2.svg",
        cantidad: 1,
        desc: "VILLA BLANCA ESTATE MALBEC",
        precio: 2200,
        img: "imagenes/villa-blanca-estate-malbec.png",
    },
    {
        id: 2,
        nombre: "imagenes/icono-2.svg",
        cantidad: 1,
        desc: "LAS TORTUGAS ESTATE BONARDA",
        precio: 2500,
        img: "imagenes/Las-Tortugas-Bonarda",
    },
    {
        id: 3,
        nombre: "imagenes/Don-Nicanor.svg",
        cantidad: 1,
        desc: "MALBEC",
        precio: 1500,
        img: "imagenes/donNicanorMalbec.png",
    },
    {
        id: 4,
        nombre: "imagenes/Don-Nicanor.svg",
        cantidad: 1,
        desc: "CABERNET SAUVIGNON",
        precio: 1800,
        img: "imagenes/dNCabernet-Sauvignon.png",
    },
    {
        id: 5,
        nombre: "imagenes/Don-Nicanor.svg",
        cantidad: 1,
        desc: "BLEND",
        precio: 1700,
        img: "imagenes/dNBlend.png",
    },
    {
        id: 6,
        nombre: "imagenes/Don-Nicanor.svg",
        cantidad: 1,
        desc: "CHARDONAY",
        precio: 1500,
        img: "imagenes/dNChardonnay-4.png",
    },
    {
        id: 7,
        nombre: "imagenes/Patrimonial-2.svg",
        cantidad: 1,
        desc: "MALBEC D.O.C.",
        precio: 3000,
        img: "imagenes/patrimonialMalbec-5.png",
    },
    {
        id: 8,
        nombre: "imagenes/Patrimonial-2.svg",
        cantidad: 1,
        desc: "SEMILLON",
        precio: 3200,
        img: "imagenes/patrimonialSemillon-3.png",
    },
    {
        id: 9,
        nombre: "imagenes/Patrimonial-2.svg",
        cantidad: 1,
        desc: "BONARDA",
        precio: 3500,
        img: "imagenes/patrimonialBonarda.png",
    },
    {
        id: 10,
        nombre: "imagenes/nieto.svg",
        cantidad: 1,
        desc: "MALBEC",
        precio: 1200,
        img: "imagenes/malbec.png",
    },
    {
        id: 11,
        nombre: "imagenes/nieto.svg",
        cantidad: 1,
        desc: "CABERNET SAUVIGNON",
        precio: 1400,
        img: "imagenes/cabernetSauvignon.png",
    },
    {
        id: 12,
        nombre: "imagenes/nieto.svg",
        cantidad: 1,
        desc: "CHARDONNAY",
        precio: 1500,
        img: "imagenes/Nieto-Senetiner_chardonnay_2021-2.png",
    },
    {
        id: 13,
        nombre: "imagenes/nieto.svg",
        cantidad: 1,
        desc: "ROSÉ",
        precio: 1500,
        img: "imagenes/Nieto-Senetiner_rose_2020-2.png",
    },
    {
        id: 14,
        nombre: "imagenes/nieto.svg",
        cantidad: 1,
        desc: "BLEND COLLECTION MALBEC",
        precio: 1600,
        img: "imagenes/Nieto-Senetiner_Blend-collection-malbec_2021-2.png",
    },
    {
        id: 15,
        nombre: "imagenes/nieto.svg",
        cantidad: 1,
        desc: "BLEND COLLECTION WHITE",
        precio: 1600,
        img: "imagenes/Nieto-Senetiner_Blen-collection-white_2021-2.png",
    },
]

let carrito = []

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carrito Contenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector('#procesar-pago')

if (activarFuncion) {
    activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    mostrarCarrito();
    document.querySelector("#activarFuncion").click(procesarPedido);
});
if (formulario) {
    formulario.addEventListener('submit', enviarCompra)
}

if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
        carrito.length = [];
        mostrarCarrito();
    });
}

if (procesarCompra) {
    procesarCompra.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire({
                title: "¡Tu carrito está vacio!",
                text: "Para continuar elige el producto que deseas comprar",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } else {
            location.href = "compra.html";
        }
    });
}

stockProductos.forEach((prod) => {
    const { id, nombre, precio, desc, img, cantidad } = prod
    console.log(nombre)
    if (contenedor) {
        contenedor.innerHTML += `
        <div class="card mt-3" style="width: 18rem;">
        <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio: ${precio}</p>
          <p class="card-text">Descripcion: ${desc}</p>
          <p class="card-text">Cantidad: ${cantidad}</p>
          <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Producto</button>
        </div>
      </div>
        `;
    }
});

const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod, id === id)
        carrito.push(item)
    }
    mostrarCarrito()

};

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");

    if (modalBody) {
        modalBody.innerHTML = "";

        carrito.forEach((prod) => {
            const { id, nombre, precio, desc, img, cantidad } = prod;
            console.log(modalBody);
            modalBody.innerHTML += `
            <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad: ${cantidad}</p>
      <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>


            `;
        });
    }


    if (carrito.length === 0) {
        console.log("Ninguno");
        modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Selecciona un producto!</p>
    `;
    } else {
        console.log("Poco");
    }
    carritoContenedor.textContent = carrito, length;


    if (precioTotal) {
        precioTotal.innerHTML = carrito.reduce(
            (acc, prod) => acc + prod.cantidad * prod.precio, 0
        );
    }

    guardarStorage();

};

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
    const vinosId = id;
    carrito = carrito.filter((vinos) = vinosId !== vinosId);
    mostrarCarrito();
}
function procesarPedido() {
    carrito.forEach((prod) => {
        const listaCompra = document.querySelector("#lista-compra tbody");
        const { id, nombre, precio, img, cantidad } = prod;
        if (listaCompra) {
            const row = document.createElement("tr")
            row.innerHTML += `
            <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
            listaCompra.appendChild(row);
        }
    });
    totalProceso.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio, 0
    );
}

function enviarCompra(e) {
    e.preventDefault()
    const edad = document.querySelector('#edad').value
    const cliente = document.querySelector('#cliente').value
    const email = document.querySelector('#correo').value

    if (edad === '' || email === '' || cliente == '') {
        swal.fire({
            title: "¡Debes completar tu edad, email y nombre!",
            text: "Rellena el formulario",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
    } else {

        const btn = document.getElementById('button');

    }


    const spinner = document.querySelector('#spinner')
    spinner.classList.add('d-flex')
    spinner.classList.remove('d-none')

    setTimeout(() => {
        spinner.classList.remove('d-flex')
        spinner.classList.add('d-none')
        formulario.reset()

        const alertExito = document.createElement('p')
        alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
        alertExito.textContent = 'Compra realizada correctamente'
        formulario.appendChild(alertExito)

        setTimeout(() => {
            alertExito.remove()
        }, 3000)


    }, 3000)
}
localStorage.clear()

