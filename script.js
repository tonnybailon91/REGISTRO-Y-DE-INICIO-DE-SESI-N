//Alerta
alert("Bienvenido");
var inputs = document.getElementsByClassName('input');
for (var tonny = 0; tonny< inputs.length; tonny++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

// Registro
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Usuario:', username, 'Contraseña:', password);
});

// Inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Usuario:', username, 'Contraseña:', password);

});


// Olvidé mi contraseña
document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Olvidé mi contraseña');
});
