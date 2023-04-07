class usuario {
    constructor(nombre, pwd) {
        this.nombre = nombre;
        this.pwd = pwd;
    }
}
const user1 = new usuario("Betiana", 1);
const user2 = new usuario("Sebastian", 2);

const login = () => {
    let welcome = parseInt(prompt("Cual es tu contraseña?"))
    if (welcome == null) {
        alert("Nos vemos pronto.")
        return
    } else if (welcome === user1.pwd || welcome === user2.pwd) {
        agregarGasto()
    } else {
        alert("Contraseña incorrecta.")
        return
    }
}

const agregarGasto = () => {
    const loggedIn = document.createElement("div")
    loggedIn.innerHTML = ``
}

const btnagregarGasto = document.querySelector("#agregarGasto")
btnagregarGasto.addEventListener("click", login)


















// class gastos {
//     constructor(descripcion, monto, total) {
//         this.descripcion = descripcion
//         this.monto = monto
//         this.total = total
//     }
// }

// const arrayUsuarios = []
// const arrayGastos = []
// const arrayNuevoGasto = []

// const agregarGasto = () => {
//     let validarUsuario = parseInt(prompt("👋 Hola! Escribe tu contraseña."))
//     if (validarUsuario == null) {
//         return
//     }
//     else {
//         const login = new usuarios(null, validarUsuario)
//         login.login()

//         while (login.login()) {
//             let descripcion = prompt(`🫡 Hola ${login.nombre}, en que has gastado dinero?`)
//             if (descripcion == "") {
//                 alert("⛔ Por favor indica una descripcion.")
//             } else if (descripcion == null) {
//                 break
//             }
//             else {
//                 let monto = parseInt(prompt(`✅ Perfecto ${login.nombre}. Cuanto dinero has gastado?`))
//                 if (isNaN(monto) || monto <= 0) {
//                     alert("⛔ Por favor ingresa un numero mayor a cero.")
//                 } else if (monto === null) {
//                     break
//                 }
//                 else {
//                     alert(`✅ Excelente  ${login.nombre}, tu gasto ha sido ingresado al sistema.`)
//                     total = arrayGastos.reduce((acc, total) => acc + total.monto, monto)

//                     arrayGastos.push(new gastos(descripcion, monto, total))
//                     arrayNuevoGasto.push(arrayGastos)

//                     const appendMe = document.querySelector("#appendMe")
//                     const nuevoGasto = document.createElement("div")
//                     nuevoGasto.innerHTML = `<div class="cell">
//                 <div class="column">${login.nombre}</div>
//                 <div class="column">${descripcion}</div>
//                 <div class="column">${monto}</div>
//                 <div class="column">${total}</div>
//                 </div>`

//                     appendMe.appendChild(nuevoGasto)
//                     arrayNuevoGasto.length = 0
//                     return
//                 }
//             }
//         }
//     }
// }

// const eliminarGasto = () => {
//     let resultado = parseInt(prompt("🗝️ Ingrese la contraseña maestra"))
//     if (resultado === 4545) {
//         appendMe.lastChild.remove();
//     } else {
//         return
//     }
// }

// const btnAgregarGasto = document.querySelector("#agregarGasto")
// btnAgregarGasto.addEventListener("click", agregarGasto)

// const btnEliminarGasto = document.querySelector("#eliminarGasto")
// btnEliminarGasto.addEventListener("click", eliminarGasto)