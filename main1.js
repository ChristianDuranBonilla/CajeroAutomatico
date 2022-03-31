var nombre
var boton1 = document.getElementById('btn1')
var boton2 = document.getElementById('btn2')
var boton3 = document.getElementById('btn3')


function guardar1(){
    nombre = getNombre(0)
    localStorage.setItem("opcionNombre",nombre)
    localStorage.setItem("id",0)
}

function guardar2(){
    nombre = getNombre(1)
    localStorage.setItem("opcionNombre",nombre)
    localStorage.setItem("id",1)
}

function guardar3(){
    nombre = getNombre(2)
    localStorage.setItem("opcionNombre",nombre)
    localStorage.setItem("id",2)
}

boton1.addEventListener('click',guardar1)
boton2.addEventListener('click',guardar2)
boton3.addEventListener('click',guardar3)