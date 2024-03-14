/*
Desarrolla un juego de adivinar el número. Genera un número aleatorio entre 1 y 100, y pide al usuario que adivine ese número. Muestra mensajes indicando si el número adivinado es mayor o menor al número generado, hasta que el usuario acierte. */

class juegoAdivinaElNumero{
    constructor(){
        this.numeroAleatorio = Math.floor(Math.random()*100)+1;
        this.intentos = 0; 
    }
    adivina(numeroUsuario){
        this.intentos++;
        if(numeroUsuario === this.numeroAleatorio){
            alert("Felicitaciones! Adivinaste el número en " + this.intentos + " intentos");
        }else if(numeroUsuario > this.numeroAleatorio){
            alert("Te acercaste, pero tu número es mas grande que el número aleatorio");
        }else{
            alert("Te acercaste, pero tu número es menor al generado aleatoriamente")
        }
    }
}

const juego = new juegoAdivinaElNumero();
alert("Bienvenido al juego usuario!, este juego es de adivinar el número, ¡COMENCEMOS!");
alert("Intenta adivinar un número del 1 al 100");

const numeroIngresadoPorUsuario = parseInt(prompt("Ingrese un número: "));
juego.adivina(numeroIngresadoPorUsuario);