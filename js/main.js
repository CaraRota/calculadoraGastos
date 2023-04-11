class usuario {
    constructor(nombre, pwd) {
        this.nombre = nombre;
        this.pwd = pwd;
    }
}
const user1 = new usuario("Betiana", 1);
const user2 = new usuario("Sebastian", 2);

let nombreUsuario

class gasto {
    constructor(nombre, descripcion, monto, total) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.monto = monto;
        this.total = total;
    }
}

const login = () => {
    let welcome = parseInt(prompt("Cual es tu contraseña?"))
    if (welcome === user1.pwd) {
        loggedIn(user1.nombre)
    } else if (welcome === user2.pwd) {
        loggedIn(user2.nombre)
    } else {
        alert("Contraseña incorrecta.")
        return
    }
}

// This function adds the form with the input fields to add a new expense
const addForm = (nombre) => {
    const afterLogin = document.querySelector("#afterLogin")
    const loggedIn = document.createElement("div")
    loggedIn.innerHTML = `            <div class="col-12 text-center">
    <h3>Bienvenid@ ${nombre}</h3>
</div>
<div class="container col-12 mb-4 d-flex justify-content-center">
    <form id="formulario">
        <div class="form-text">
            <h6 class="text-center">Cuanto dinero has gastado?</h6>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input id="inputNumber" type="number" autofocus class="form-control" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
        </div>
        <div class="form-text">
            <h6 class="text-center">En que lo has gastado?</h6>
        </div>
        <div class="input-group mb-3">
            <input id="inputText" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        </div>
        <button id="submit" type="submit" class="btn btn-primary col-12 uppercase">Agregar
            Gasto</button>
</div>
</form>`
    // We append the form into the DOM
    afterLogin.appendChild(loggedIn);

    // We add listeners for the new created form
    const btnAgregarGasto = document.querySelector("#formulario")
    btnAgregarGasto.addEventListener("submit", agregaGasto)
}

const addButtons = () => {
    const afterLogin = document.querySelector("#addAfterLogin")
    afterLogin.innerHTML = `<div class="col-6 d-flex justify-content-center">
    <a id="login" class="btn btn-dark uppercase" role="button">Logout</a>
</div> 
<div class="col-6 d-flex justify-content-center">
    <a id="eliminarGasto" class="btn btn-danger uppercase" role="button">Borrar</a>
</div>`
}

const loggedIn = (nombre) => {
    addForm(nombre)
    addButtons()
    removeAfterLogin.remove("#removeAfterLogin")
    nombreUsuario = nombre
}

const btnloggedIn = document.querySelector("#login")
btnloggedIn.addEventListener("click", login)

const arrayMontos = []

const agregaGasto = (event) => {
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber")
    const inputText = document.querySelector("#inputText")

    const descripcion = inputText.value
    const monto = parseInt(inputNumber.value)
    const total = arrayMontos.reduce((acc, current) => acc + current, monto)

    if (isNaN(monto) || descripcion.trim() === "") {
        alert("⛔ Por favor rellena los campos.")
    } else {
        alert("✅ Su nuevo gasto ha sido ingresado")
        formulario.reset();
        arrayMontos.push(monto)
        const createNewDiv = document.querySelector("#appendMe")
        const nuevoGasto = document.createElement("div")
        nuevoGasto.innerHTML = `<div class="cell">
    <div class="col-3 column">${nombreUsuario}</div>
    <div class="col-3 column">${descripcion}</div>
    <div class="col-3 column">${monto}</div>
    <div class="col-3 column">${total}</div>
</div>`
        createNewDiv.appendChild(nuevoGasto)
    }
}