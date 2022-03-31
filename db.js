var cuentas = [
    {
        nombre:"Hiromi", saldo: 200, password: "helloworld"
    },
    {
        nombre:"Manuel", saldo: 290, password: "l33t"
    },
    {
        nombre:"Luis", saldo: 67, password: "123"
    }
]

function getPassword(nombre){
    var pass = ""
    for(var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre){
            pass = cuentas[i].password
        }
    }
    return pass
}

function getSaldo(nombre){
    var sal = 0
    for(var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre){
            sal = cuentas[i].saldo
        }
    }
    return sal
}

function getNombre(numero){
    return cuentas[numero].nombre
}

function setSaldo(nombre,monto){
    for(var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombre){
            cuentas[i].saldo = monto
        }
    }
}   
