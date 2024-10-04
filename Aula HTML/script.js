document.write(somar());

function somar (){ 
var numero1 = 10
var numero2 = 80;
var soma = numero1 + numero2;

return soma;

}
function escreve(){
    alert(somar());

}
function perguntaEndereco(){
    do{
        endereco=prompt ("Insira o endereço");
        confirma = confirm("Seu endereço é:" + endereco);
    }while(!confirma);
    alert("A pagina sera alterada...");
    document.write("Seu endereço é" + endereco+".");
    }
function confirma(){
    resposta = confirm("Confirma");
    if(resposta ==1){
        return true;
    }else {
    return false;
    }
}
