var nombre = localStorage.getItem("opcionNombre")
var contra = document.getElementById("inputPassword5")
var bienvenida = document.getElementById('bienvenida')
var boton = document.getElementById('iniciarSesion')
bienvenida.innerHTML = "Hola " + nombre + " Nos da gusto verte de nuevo."

function validar(){
    var contrasenia = contra.value
    if(getPassword(nombre) === contrasenia){
        window.location.href = "./index3.html"
    } else {
        alert("Verifica que tu contraseña sea correcta")
    }
}

boton.addEventListener("click",validar)