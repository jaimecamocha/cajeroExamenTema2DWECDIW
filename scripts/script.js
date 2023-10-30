let saldo = 1000;
const PIN_CORRECTO = "123";
let intentosPin = 3;

// Mostrar saldo
function mostrarSaldo(){
    const saldoMos = parseFloat(document.getElementById("cantSaldo"));
    alert(saldoMos);
    txtsaldo.textContent(`Su saldo es de: ${saldoMos.toFixed(2)} euros`);
}

// Depositar dinero
function depositarDinero(){
    const deposito = parseFloat(document.getElementById("inputCantidad"));

    if(deposito <= 0){
        alert("No es posible depositar ese dinero")
    } else{
        saldo = saldo + deposito;
        mostrarSaldo();
        alert(`Se han depositado ${deposito.toFixed(2)} euros`);
    }
} 

// Retirar dinero
function retirarDinero(){
    const retiro = parseFloat(document.getElementById("inputCantidad"));

    if(retiro <= 0 || retiro > saldo){
        alert("No es posible retirar ese dinero")       
    } else{
        saldo = saldo - retiro;
        mostrarSaldo();
        alert(`Se han retirado ${retiro.toFixed(2)} euros`);       
    }
}

// Transferir dinero
function transferirDinero(){
    const transfer = parseFloat(document.getElementById("inputCantidad"));

    if(transfer > saldo){
        alert("No es posible transferir esa cantidad de dinero");
    } else{
        saldo = saldo - transfer;
        mostrarSaldo();
        alert(`Se han transferido ${transfer.toFixed(2)} euros`)
    }
} 
 
// Cambiar contraseña
function cambiarContrasena(){

}

// Iniciar sesión
function iniciarSesion(){
    const pinIntroducido = document.getElementById("pinIntroducido");

    for(const intento = 0; intento < intentosPin; intento++){
        if(PIN_CORRECTO == pinIntroducido){
            alert("INICIO DE SESIÓN CORRECTO");
            break;
        } else{
    
        }
    }
}

// Cerrar sesión
function cerrarSesion(){
    
}
