/*
Un Joven muy afortunado logró ganar el primer premio de la lotería... Exacto, estamos hablando del pobre al que cofla le dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con este millonario compró una maquina que deja pasar solamente a los mayores de edad, entre otras cosas.

- Dejar pasar solo a los mayores de edad (En colombia son los que tienen mayor a 18 años)
- La primera persona que entre despues de las 2AM, no paga. */
document.getElementById
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis, ya que eres la primera persona en entrar despúes de las 2AM");
            free = true
        }
        else{
            alert("Son las " + time + ":00Hs, Puedes pasar pero tienes que pagar la entrada");
        }
    }
    else{
        alert("No puedes pasar men, ya que no eres mayor a 18 años");
    }
}

validarCliente(23);
validarCliente(2);
