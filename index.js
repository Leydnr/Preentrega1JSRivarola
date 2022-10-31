/*PRIMERA PREENTREGA JS<
    Muestreo
    Determinar el uso de redes  
    Se quiere determinar cuantas horas usan las redes en las distintas edades
    Se realizara
    -- valor promedio de datos ingresados
    -- valor promedio por edad
    --valor promedio de horas*/

function saludoGenerico() {
    let nombreUsuario = prompt("Cual es tu nombre")
    let apellidoUsuario = prompt("Cual es tu apellido")
    let aniosUsuario = parseInt(prompt("Cuantos años tenés"))
    alert(`Hola ${nombreUsuario} ${apellidoUsuario}`)
}
alert("Bienvenido")
saludoGenerico()


let smartPhone = parseInt(prompt('Elige el modelo que deseas comprar: 1.Samsung A23 - 2.Samsung A03 - 3.Samsung S21 4.Samsung S22')) 

let totalCompra = 0
let seguirEligiendo = true
let decision

while(seguirEligiendo === true){
if (smartPhone === 1){
    totalCompra = totalCompra + 70000
} else if (smartPhone === 2){
    totalCompra = totalCompra + 20000
} else if (smartPhone === 3){
    totalCompra = totalCompra + 150000
} else if (smartPhone === 4){
    totalCompra = totalCompra + 200000
} else {
    smartPhone = parseInt(prompt('Elige la opción habilitada: 1.Samsung A23 - 2.Samsung A03 - 3.Samsung S21 4.Samsung S22'))
    continue
}
decision = parseInt(prompt('Queres seguir comprando? 1.Si - 2.No'))
if (decision === 1){
    smartPhone = parseInt(prompt('Elige el modelo que deseas comprar: 1.Samsung A23 - 2.Samsung A03 - 3.Samsung S21 4.Samsung S22'
        )
        )
} else {
    seguirEligiendo = false
}

}

alert(`El total se tu compra es ${totalCompra}`)

alert(`Si podes contesta una pequeña encuesta`)

function calcularHoras(r1, r2, r3, r4){
    let sumaHoras = r1 + r2 + r3 + r4
    let promedio = sumaHoras / 4

    if (promedio >= 7){
        alert(`El tiempo de uso es muy alto`)
    }else if (promedio > 4){
        alert(`El tiempo de uso es medio`)
    }else {
        alert(`El tiempo de uso es bajo`)
    }
}
let redes = prompt("Ingrese la cantidad de horas que utiliza el celular ")

for(let i = 0;i<=4; i++){
    let redes1 = prompt("Ingrese cuantas horas usa Facebook")
    let redes2 = prompt("Ingrese cuantas horas usa Instagram")
    let redes3 = prompt("Ingrese cuantas horas usa Twitter")
    let redes4 = prompt("Ingrese cuantas horas usa Tik tok")
    calcularHoras(redes1, redes2, redes3, redes4)
    alert(`Muchas gracias por contestar`)
}

 