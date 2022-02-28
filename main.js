function validarEmail() {
    var email = document.getElementById('email');
    var erro = document.getElementById('erro-email')
    
    if (!email.checkValidity()) {
        erro.innerHTML = 'Email inválido'
    }
}

function redefinirMsg() {
    var erro = document.getElementById('erro-email');
    if (!email.checkValidity()) {
        erro.innerHTML = "";
    }
}


