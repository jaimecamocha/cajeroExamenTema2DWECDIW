let saldo = 1000;
let PIN_CORRECTO = "123";
let intentosPin = 3;
let intentosRestantes = intentosPin;

// Mostrar saldo
function mostrarSaldo() {
    const cantSaldo = document.getElementById("cantSaldo");
    cantSaldo.textContent = `Su saldo actual es: ${saldo.toFixed(2)} €`;
}

// Depositar dinero
function depositarDinero(){
    const deposito = document.getElementById("inputCantidad");
    const depositoCant = parseFloat(deposito.value);

    if(isNaN(depositoCant) || depositoCant <= 0){
        alert("No es posible depositar ese dinero")
    } else{
        saldo = saldo + depositoCant;
        mostrarSaldo();
        alert(`Se han depositado ${depositoCant.toFixed(2)} euros`);
    }
    deposito.value = "";
} 

// Retirar dinero
function retirarDinero(){
    const retiro = document.getElementById("inputCantidad");
    const retiroCant = parseFloat(retiro.value);

    if(isNaN(retiroCant) || retiroCant <= 0 || retiroCant > saldo){
        alert("No es posible retirar ese dinero")       
    } else{
        saldo = saldo - retiroCant;
        mostrarSaldo();
        alert(`Se han retirado ${retiroCant.toFixed(2)} euros`);       
    }
    retiro.value = "";
}

// Transferir dinero
function transferirDinero(){
    const transfer = document.getElementById("inputCantidad");
    const transferCant = parseFloat(transfer.value);

    if(isNaN(transfer) || transferCant > saldo){
        alert("No es posible transferir esa cantidad de dinero");
    } else{
        const numCuenta = prompt("Introduzca el número de cuenta: ");
        saldo = saldo - transferCant;
        mostrarSaldo();
        alert(`Se han transferido ${transferCant.toFixed(2)} euros a ${numCuenta}`);
    }
    transfer.value ="";
} 
 
// Cambiar contraseña
function cambiarContrasena(){
    const contraBien = prompt("Introduzca su contraseña actual: ");

    if(PIN_CORRECTO == contraBien){
        const nuevaContra = prompt("Introduzca la nueva contraseña: ");
        PIN_CORRECTO = nuevaContra;     
    }
}

// Iniciar sesión
function iniciarSesion() {
    const pinIntroducido = document.getElementById("pinIntroducido");

    if (pinIntroducido.value === PIN_CORRECTO) {
        alert("INICIO DE SESIÓN EXITOSO");
        pinIntroducido.value = "";
        document.getElementById("inicio").style.display = "none";
        document.getElementById("cajero").style.display = "block";
        mostrarSaldo();
    } else {
        intentosRestantes--;

        if (intentosRestantes > 0) {
            alert(`PIN incorrecto. Te quedan ${intentosRestantes} intentos.`);
        } else {
            alert("PIN INCORRECTO. CAJERO BLOQUEADO");
            document.getElementById("pinIntroducido").disabled = true;
        } 
 
        pinIntroducido.value = "";
    }
}

// Cerrar sesión
function cerrarSesion(){
    document.getElementById("index.html").style.display = close;
    document.getElementById("salir.html").style.display = open;
}
