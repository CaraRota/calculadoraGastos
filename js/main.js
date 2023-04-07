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
    if (welcome === user1.pwd) {
        loggedIn(user1.nombre)
    } else if (welcome === user2.pwd) {
        loggedIn(user2.nombre)
    } else {
        alert("Contraseña incorrecta.")
        return
    }
}

const addForm = (nombre) => {
    const afterLogin = document.querySelector("#afterLogin")
    const loggedIn = document.createElement("div")
    loggedIn.innerHTML = `            <div class="col-12 text-center">
    <h3>Bienvenid@ ${nombre}</h3>
</div>
<div class="container col-12 mb-4 d-flex justify-content-center">
    <form>
        <div id="emailHelp" class="form-text">
            <h6 class="text-center">Cuanto dinero has gastado?</h6>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        </div>
        <button id="formulario" type="submit" class="btn btn-primary col-12 uppercase">Agregar
            Gasto</button>
</div>
</form>`
    afterLogin.appendChild(loggedIn);
}

const addLogout = () => {
    const afterLogin = document.querySelector("#addAfterLogin")
    afterLogin.innerHTML = `<div class="col-6 d-flex justify-content-center">
    <a id="login" class="btn btn-dark uppercase" role="button">Logout</a>
</div>
<div class="col-6 d-flex justify-content-center">
    <a id="eliminarGasto" class="btn btn-outline-dark uppercase" role="button">Borrar</a>
</div>`
}

const loggedIn = (nombre) => {
    addForm(nombre)
    addLogout()
    removeAfterLogin.remove("#removeAfterLogin")
}

const btnloggedIn = document.querySelector("#login")
btnloggedIn.addEventListener("click", login)

// const agregaGasto = () => {

//     const btnAgregarGasto = document.querySelector("#formulario")
//     btnAgregarGasto.addEventListener("click", agregaGasto)
// }