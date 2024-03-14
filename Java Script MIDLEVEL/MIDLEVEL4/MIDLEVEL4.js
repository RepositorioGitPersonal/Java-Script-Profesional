const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try{
        resultadoPrevio = parseInt(document.getElementById('nota').value);
        if(isNaN(resultadoPrevio)){
            throw "Gracioso";
        }
        mensaje = definirMensaje(resultadoPrevio);
        resultado = verificarAprobacion(8,5,resultadoPrevio);
    }catch(e){
        resultado = "¿Eres gracioso?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado, mensaje);

});

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr){
        case 1: resultado = "Sacaste 1";
        break;
        case 2: resultado = "Sacaste 2";
        break;
        case 3: resultado = "Sacaste 3";
        break;
        case 4: resultado = "Sacaste 4";
        break;
        case 5: resultado = "Sacaste 5";
        break;
        case 6: resultado = "Sacaste 6";
        break;
        case 7: resultado = "Sacaste 7";
        break;
        case 8: resultado = "Sacaste 8";
        break;
        case 9: resultado = "Sacaste 9";
        break;
        case 10: resultado = "Sacaste 10";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, resultadoPrevio)=>{
    promedio = (nota1 + nota2 + resultadoPrevio) / 3;
    if(promedio >= 7){
        return "<span class= 'green'>Aprobado</span>";
    }
    return "<span class= 'red'>Desaprobado</span>";
    
}

const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex"; 
    modal.style.animation = "aparecer 1s forwards";
    
}