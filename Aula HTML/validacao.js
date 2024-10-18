function validaCaracter(){
    var texto = document.formulario.nome.value;
    var letras = /^[A-Za-z]+$/
    if (texto.match(letras)){
        alert("ok");
    }else{ 
        alert ("Digitar apenas letras");
    }
}
