var nombre = localStorage.getItem("opcionNombre")
var bienvenida = document.getElementById('bienvenida')
var saldo = document.getElementById('saldo')
var botonIngresar = document.getElementById('ingresar')
var botonRetirar = document.getElementById('retirar')
var noti1 = document.getElementById('retiroN')
var noti2  = document.getElementById('ingresoN')
bienvenida.innerHTML = "Bienvenido, " + nombre + "."
saldo.innerHTML = "Tu saldo actual es: $"+ getSaldo(nombre) + "MXN."

function ingresar(){
    var suma = parseInt(prompt("Ingresa la cantidad: \n *No puedes ingresar mas de $" + (990 - getSaldo(nombre)) + "MXN"))
    var monto = getSaldo(nombre) + suma
    if (monto <= 990){
        setSaldo(nombre,monto)
        noti2.innerHTML = "*Se ha ingresado $" + suma + "MXN"
    } else {
        alert("No es posible ingresar ese monto")
    }
    saldo.innerHTML = "Tu saldo actual es: $"+ getSaldo(nombre) + "MXN."
}

function retirar(){
    var resta = parseInt(prompt("Ingresa la cantidad: \n *No puedes retirar mas de $" + ( getSaldo(nombre)-10) + "MXN"))
    var monto = getSaldo(nombre) - resta
    if (monto >= 10){
        setSaldo(nombre,monto)
        noti1.innerHTML = "*Se ha retirado $" + resta + "MXN"
    } else {
        alert("No es posible retirar ese monto")
    }
    saldo.innerHTML = "Tu saldo actual es: $"+ getSaldo(nombre) + "MXN."
}

botonIngresar.addEventListener('click',ingresar)
botonRetirar.addEventListener('click',retirar)